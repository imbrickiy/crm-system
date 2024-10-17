import { TableClients } from "@/components/TableClients";
import prisma from "@/lib/prisma";
import { Client } from "@prisma/client";
import React, { Suspense } from "react";
import Loading from "./loading";
import { revalidatePath } from "next/cache";

async function fetchClients(): Promise<Client[]> {
  revalidatePath("/");
  return await prisma.client.findMany();
}

export const Clients = async () => {
  const clients = await fetchClients();
  const clientsWithStringIds = clients.map((client) => ({
    ...client,
    id: client.id.toString(),
  }));
  return (
    <Suspense fallback={<Loading />}>
      <TableClients clients={clientsWithStringIds} />
    </Suspense>
  );
};
