"use client";

import { createColumnHelper } from "@tanstack/react-table";

import type { IAdmin } from "#/data-type";
import { DateTimeItem, type DataTableFeatures } from "#/components/custom";
import { useRemoveAdmin } from "#/hooks";
import { Button } from "#/components/ui";
import { TrashIcon } from "lucide-react";

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, IAdmin>();

export const columns = columnHelper.columns([
  columnHelper.display({
    id: "index",
    header: "No.",
    cell: ({ row }) => row.index + 1,
  }),
  columnHelper.accessor("profile.name", {
    header: "Name",
  }),
  columnHelper.accessor("createdAt", {
    header: "Create at",
    cell: ({ getValue }) => <DateTimeItem>{getValue()}</DateTimeItem>,
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { mutate } = useRemoveAdmin();

      return (
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => mutate({ uid: row.original.id })}
        >
          <TrashIcon />
        </Button>
      );
    },
  }),
]);
