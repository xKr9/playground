import { ColumnDef } from "@tanstack/react-table";

export type EmailSentTableData = {
  to: string;
  event: string;
  loggedAt: string;
};

export const emailSentColumns: ColumnDef<EmailSentTableData>[] = [
  {
    accessorKey: "to",
    header: "To",
  },
  {
    accessorKey: "event",
    header: "Event",
  },
  {
    accessorKey: "loggedAt",
    header: "Logged at",
  },
];
