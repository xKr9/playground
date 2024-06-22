import { Table, flexRender } from "@tanstack/react-table";

type Props<T> = {
  customHeader?: React.ReactNode;
  customRow?: React.ReactNode;
  table: Table<T>;
};

export default function BaseTanstackTable<T>({
  table,
  customHeader,
  customRow,
}: Props<T>) {
  return (
    <table className="overflow-x-auto w-full">
      <thead className="text-left font-bold bg-mp-dark-blue text-white !rounded-lg">
        {customHeader === null
          ? table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id} className="text-white">
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        className="py-3 px-5 text-inherit"
                        key={header.column.id}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })
          : customHeader}
      </thead>
      <tbody>
        {customRow === null
          ? table.getRowModel().rows.map((row, idx) => (
              <tr
                key={row.id}
                className={`${
                  idx % 2 ? "bg-mp-light-gray" : "bg-white"
                } px-2 lg:px-8`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td className="py-4 px-5" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          : customRow}
      </tbody>
    </table>
  );
}

BaseTanstackTable.defaultProps = {
  customHeader: null,
  customRow: null,
};
