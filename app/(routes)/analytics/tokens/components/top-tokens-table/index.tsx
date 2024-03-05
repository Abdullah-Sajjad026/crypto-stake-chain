"use client"

import {Card} from "@/components/ui/card";
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageNo?: number;
}

export default function TopTokensTable<TData, TValue>({
                                                        data,
                                                        columns,
                                                        pageNo = 1
                                                      }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <section className="z-[2] relative">
      <Card>
        <h2 className="text-block text-center mb-4">Top Tokens</h2>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="mt-12">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="mt-4 text-center">
          <Link className={buttonVariants({variant: "default"})} href={`/analytics/tokens?page=${Number(pageNo) + 1}`}>
            View All
          </Link>
        </div>
      </Card>
    </section>
  );
}
