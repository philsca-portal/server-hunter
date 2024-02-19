import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import data from "./data/tasks.json"

export default async function ServerTable() {
  const tasks = data;

  return (
    <>
      <div id="table" className="flex h-full flex-1 flex-col space-y-8 py-8">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
