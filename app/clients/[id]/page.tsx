import prisma from "@/lib/prisma";
import React from "react";

/**
 * Fetches a client by ID from the database.
 * @param id - The ID of the client to fetch.
 * @returns The client object if found, otherwise null.
 */
async function fetchClientById(id: string) {
  // Query the database to find a unique client by ID
  const client = await prisma.client.findUnique({
    where: {
      id: Number(id),
    },
  }) || null;
  
  return client;
}

/**
 * The page component for a client with a given ID.
 * @param params - The route parameters. The ID is used to fetch the client.
 * @returns The client's description if the client is found, otherwise a loading message.
 */
const page = async ({ params }: { params: { id: string } }) => {
  // Fetch the client by ID
  const client = await fetchClientById(params.id);

  // If the client is not found, display a loading message
  if (!client) return <div>Loading...</div>;

  // Return the client's description
  return <div>{client.description}</div>;
};

export default page;
