"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteClient(
  id: string
): Promise<{ errors?: { _form: string[] } }> {
  try {
    await prisma.client.delete({
      where: { id: Number(id) },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }
  revalidatePath("/");
  redirect("/");
}

export async function addClient(
  title: string,
  description: string
): Promise<{ errors?: { _form: string[] } }> {
  try {
    await prisma.client.create({
      data: {
        title,
        description,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }
  revalidatePath("/");
  redirect("/");
}
