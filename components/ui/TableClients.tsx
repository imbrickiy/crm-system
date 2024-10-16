"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./button";
import Link from "next/link";
import { PencilIcon, TrashIcon, EyeIcon } from "lucide-react";

interface Client {
  id: string;
  title: string;
  description: string | null;
}

export const TableClients = ({ clients }: { clients: Client[] }) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow className="hover:bg-muted cursor-pointer" key={client.id}>
            <TableCell className="font-medium">{client.id}</TableCell>
            <TableCell>{client.title}</TableCell>
            <TableCell>{client.description}</TableCell>
            <TableCell className="text-end gap-3 flex justify-end">
              <Button variant="outline" size="icon" asChild>
                <Link href={`/clients/${client.id}`}>
                  <EyeIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={`/clients/${client.id}`}>
                  <PencilIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="destructive" size="icon" onClick={() => {}}>
                <TrashIcon className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
