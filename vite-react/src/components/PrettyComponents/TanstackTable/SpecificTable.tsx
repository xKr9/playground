import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import BaseTanstackTable from "./Table";

type Props<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
};

const EmailSentTable = <TData, TValue>({
  columns,
  data,
}: Props<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <BaseTanstackTable table={table} />;
};

export default EmailSentTable;
