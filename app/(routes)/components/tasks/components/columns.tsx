"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"

import { DataTableColumnHeader } from "./data-table-column-header"
import { Task } from "../data/schema"

const numberOfStars = 5;

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "nameAndProvider",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name and Provider" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <div className="flex space-x-2">
            <Badge className="w-fit" variant="outline">{row.original.nameAndProvider.name}</Badge>
            <div className="flex">
              {[...Array(numberOfStars)].map((_, index) => (
                <span key={index} className={index < Math.round(row.original.nameAndProvider.rating) ? ' text-yellow-500' : 'text-gray-500'}>
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-1">
            <span>
              - {row.original.nameAndProvider.review} reviews -
            </span>
            <span>
              | Hosted by: {row.original.nameAndProvider.provider} |
            </span>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "processor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <div>
            {row.original.processor.name}
          </div>
          <div>
            {row.original.processor.description}
          </div>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "product",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span>
            {row.original.product}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "memory",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Memory" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span>
            {row.original.memory}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "storage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Storage" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span>
            {row.original.storage}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stock" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span>
            {row.original.stock}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span>
            {row.original.price}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]
