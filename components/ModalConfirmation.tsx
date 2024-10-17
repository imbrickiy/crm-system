"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { deleteClient } from "@/app/actions";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { LucideTrash } from "lucide-react";

const ModalConfirmation = ({
  children,
  clientId,
}: Readonly<{
  children: React.ReactNode;
  clientId: string;
}>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const someEvent = async () => {
    try {
      setIsLoading(true);
      await deleteClient(clientId);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Вы уверены?</DialogTitle>
          <DialogDescription>
            Восстановить данные будет не возможно.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            disabled={isLoading}
            onClick={async () => someEvent()}
          >
            {isLoading ? (
              <ReloadIcon className="h-4 w-4 animate-spin" />
            ) : (
              <LucideTrash className="h-4 w-4" />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalConfirmation;
