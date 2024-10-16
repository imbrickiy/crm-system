
import prisma from '@/lib/prisma'
import { Client } from '@prisma/client'
import { notFound } from 'next/navigation' 



export async function fetchClients(): Promise<Client[]> {  // Function to fetch all posts from the database.
    return await prisma.client.findMany()
}

// export async function fetchClientById(id: string): Promise<Client | null> { // Function to fetch a single post by its ID.
//     const postById = await prisma.client.findMany({
//         where: {
//             id:Number(id)
//         }
//     })

//     if (!postById) {

//         notFound() // If the post is not found, a 404 error is thrown.
//     }

//     return postById[0]

// }   

// export async function newClient(title: string, description: string): Promise<Client> { // Function to create a new post in the database.
//     return await prisma.client.create({
//         data: {
//             title,
//             description
//         }
// })
// }

// export async function deleteClient(req:NextRequest): Promise<Client> { // Function to delete a post from the database.
//     try {
//         await prisma.client.delete({
//             where: {
//                 id:Number(req.id)
//             }
//         })
    
//     } catch (error) {
//         console.log(error)
//     }
// }
    
