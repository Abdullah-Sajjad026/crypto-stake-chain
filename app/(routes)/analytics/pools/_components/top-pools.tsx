'use client';

import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import Link from "next/link";
import Image from "next/image";


export const topPoolsColumns: ColumnDef<any>[] = [
  {
    id: "serial",
    header: () => <div className="font-bold">#</div>,
    cell: ({row}) => (<div className="flex items-center justify-center h-8 w-8 bg-accent font-bold rounded-full">
      {row.index + 1}
    </div>),
  },
  {
    accessorKey: "name",
    header: () => <div className="font-bold">Token</div>,
    cell: ({row}) => (
      <Link href={`/pools`}>
        <div className="flex items-center flex-1">
          <Image src={row.original.image} alt={row.getValue("name")} width={30} height={30}/>
          <span className="font-bold ml-1">{row.getValue("name")}</span>
        </div>
      </Link>

    )
  },
  {
    accessorKey: "tvl",
    header: () => <div className="font-bold">TVL</div>,
    cell: ({row}) => (
      <div>
        ${row.getValue("tvl")}
      </div>
    )
  }
]


const TopPools = (
  {
    data = []
  }: {
    data: any[]
  }
) => {

  const table = useReactTable({
    data,
    columns: topPoolsColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="z-[2] relative">
      <Card className="lg:w-4/5 mx-auto">
        <h2 className="text-block text-center mb-4">Pools</h2>
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
                  colSpan={topPoolsColumns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </section>
  )
}

export default TopPools;
