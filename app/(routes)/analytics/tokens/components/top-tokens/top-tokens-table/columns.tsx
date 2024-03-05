'use client';

import {ColumnDef} from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

export type MarketTokenItem =
  {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply?: any;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: {
      times: number;
      currency: string;
      percentage: number;
    };
    last_updated: string;
  }


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
