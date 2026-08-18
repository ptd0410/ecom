import { DataTable } from "#/components/custom";
import { useAdmin } from "#/hooks";
import { AddAdminModal } from "./AddAdminModal";
import { columns } from "./columns";

export function AdminTable() {
  const { data = [] } = useAdmin();
  return (
    <div className="container mx-auto py-10 flex flex-col gap-3">
      <AddAdminModal />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
