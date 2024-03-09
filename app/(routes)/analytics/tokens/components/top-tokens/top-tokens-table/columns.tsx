'use client';

import {MarketTokenItem} from "@/app/actions/token-actions";
import {ColumnDef} from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";


export const topTokensColumns: ColumnDef<MarketTokenItem>[] = [
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
      <Link href={`/analytics/tokens/${row.original.id}`}>
        <div className="flex items-center flex-1">
          <Image src={row.original.image} alt={row.getValue("name")} width={30} height={30}/>
          <span className="font-bold ml-1">{row.getValue("name")}</span>
        </div>
      </Link>

    )
  },
  {
    accessorKey: "current_price",
    header: () => <div className="font-bold flex-1">Price</div>,
    cell: ({row}) => (
      <div>
        ${(row.getValue("current_price") as number).toFixed(2)}
      </div>
    )
  },
  {
    accessorKey: "price_change_24h",
    header: () => <div className="font-bold">Price Change (24H)</div>,
    cell: ({row}) => (
      <div
        className={
          // @ts-ignore
          row.getValue("price_change_24h") > 0
            ? "text-green-500"
            : "text-red-500"
        }
      >
        ${(row.getValue("price_change_24h") as number).toFixed(2)}
      </div>
    )
  },
  {
    accessorKey: "market_cap",
    header: () => <div className="font-bold">Market Cap</div>,
    cell: ({row}) => (
      <div>
        ${row.getValue("market_cap")}
      </div>
    )
  }
]
