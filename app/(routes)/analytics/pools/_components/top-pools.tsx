'use client';

import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import Link from "next/link";
import Image from "next/image";


const TopPools = (
  {
    data = []
  }: {
    data: any[]
  }
) => {

  return (
    <section className="z-[2] relative">
      <Card className="lg:w-4/5 mx-auto">
        <h2 className="text-block text-center mb-4">Pools</h2>

        <div className="flex items-center gap-4 border-b-2 border-primary-light p-4">
          <div>
            #
          </div>
          <div>
            Pool
          </div>
          <div className="ms-auto">
            TVL
          </div>
        </div>

        {
          data.map((d, index) => (
            <div className='flex items-center gap-4 border-b-2 border-primary-light p-4 ' key={d.id}>
              <div>
                {index + 1}
              </div>
              <div>
                <Link href={`/pools/`} className="text-sm">
                  <div className="flex items-center flex-1">
                    <Image src={d.image} alt={d.name} width={30} height={30}/>
                    <span className="font-bold ml-1">{d.name}</span>
                  </div>
                </Link>
              </div>

              <div className="ms-auto text-sm">
                ${d.tvl}
              </div>

            </div>
          ))
        }

      </Card>
    </section>
  )
}

export default TopPools;
