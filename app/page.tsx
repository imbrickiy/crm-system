import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clients } from "./clients/page";

export default async function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex items-center justify-between my-4">
        <h1 className="font-bold text-4xl">Clients</h1>
        <Button variant="outline" size="icon" asChild>
          <Link href={"/new"}>
            <PlusIcon className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Clients />
    </main>
  );
}
