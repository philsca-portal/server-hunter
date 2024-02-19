"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "@/app/(routes)/components/tasks/components/data-table-view-options"

import { products, stocks } from "../data/data"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  globalFilter: string
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>
}

export function DataTableToolbar<TData>({
  table,
  globalFilter,
  setGlobalFilter
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="space-y-5">
      <Input
          placeholder="Search for your prefect server..."
          value={globalFilter}
          onChange={e => setGlobalFilter(e.target.value)}
          className="w-full h-16 border-[#e87b73]"
        />
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          {table.getColumn("product") && (
            <DataTableFacetedFilter
              column={table.getColumn("product")}
              title="Product"
              options={products}
            />
          )}
          {table.getColumn("stock") && (
            <DataTableFacetedFilter
              column={table.getColumn("stock")}
              title="Stock"
              options={stocks}
            />
          )}
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
