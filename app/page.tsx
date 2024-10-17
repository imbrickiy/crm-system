import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Clients } from "./clients/page";
import SheetAddClient from "@/components/SheetAddClient";

export default async function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex items-center justify-between my-4">
        <h1 className="font-bold text-4xl">Clients</h1>
        <SheetAddClient>
          <Button variant="outline" size="icon">
            <PlusIcon className="h-4 w-4" />
          </Button>
        </SheetAddClient>
      </div>
      <Clients />
    </main>
  );
}
