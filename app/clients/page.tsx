import { TableClients } from "@/components/ui/TableClients";
import prisma from "@/lib/prisma";
import { Client } from "@prisma/client";
import React from "react";
// import { fetchClients } from "../api/client";

async function fetchClients(): Promise<Client[]> {
  return await prisma.client.findMany();
}

export const Clients = async () => {
  const clients = await fetchClients();
  const clientsWithStringIds = clients.map((client) => ({
    ...client,
    id: client.id.toString(),
  }));
  return <TableClients clients={clientsWithStringIds} />;
};
