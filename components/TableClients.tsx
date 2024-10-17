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
import { Button } from "./ui/button";
import { PencilIcon, TrashIcon, EyeIcon } from "lucide-react";
import ModalClients from "./ModalClients";

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
              <ModalClients client={client} view>
                <Button variant="outline" size="icon">
                  <EyeIcon className="h-4 w-4" />
                </Button>
              </ModalClients>
              <ModalClients client={client}>
                <Button variant="outline" size="icon">
                  <PencilIcon className="h-4 w-4" />
                </Button>
              </ModalClients>
              <Button variant="destructive" size="icon">
                <TrashIcon className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
