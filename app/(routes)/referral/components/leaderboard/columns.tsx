"use client"

import {ColumnDef} from "@tanstack/react-table"

export type LeaderboardEntry = {
    rank: number,
    referrer: string,
    referrals: number,
    earnings: number
}

export const columns: ColumnDef<LeaderboardEntry>[] = [
    {
        accessorKey: "rank",
        header: () => <div className="font-bold">Rank</div>,
        cell: ({row}) => (
            <div className="flex items-center justify-center h-12 w-12 bg-accent font-bold rounded-full">
                {row.getValue("rank")}
            </div>
        )
    },
    {
        accessorKey: "referrer",
        header: () => <div className="font-bold flex-1">Referrer</div>,
        cell: ({row}) => (
            <div className="font-bold flex-1">
                {row.getValue("referrer")}
            </div>
        )
    },
    {
        accessorKey: "referrals",
        header: () => <div className="font-bold">Referrals</div>,
        cell: ({row}) => (
            <div className="font-bold">
                {row.getValue("referrals")}
            </div>
        )
    },
    {
        accessorKey: "earnings",
        header: () => <div className="font-bold">Earnings USD</div>,
        cell: ({row}) => (
            <div className="font-bold">
                {row.getValue("earnings")}
            </div>
        )
    }
]
