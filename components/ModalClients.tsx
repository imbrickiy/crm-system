import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface Client {
  id: string;
  title: string;
  description: string | null;
}

const ModalClients = ({
  children,
  view,
  client,
}: Readonly<{
  children: React.ReactNode;
  client: Client;
  view?: boolean;
}>) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{view ? "Просмотр" : "Редактирование"}</DialogTitle>
          <DialogDescription>{view && ""}</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            {view ? (
              <>
                <DialogDescription className="text-center">
                  {client.title}
                </DialogDescription>
                <DialogDescription className="text-center">
                  {client.description}
                </DialogDescription>
              </>
            ) : (
              <>
                <Label htmlFor="text" className="sr-only">
                  Наименование
                </Label>
                <Input id="text" defaultValue={client.title ?? ""} />
                <Label htmlFor="description" className="sr-only">
                  Описание
                </Label>
                <Input
                  id="description"
                  defaultValue={client.description ?? ""}
                />
              </>
            )}
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          {view ? (
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Закрыть
              </Button>
            </DialogClose>
          ) : (
            <>
              <Button type="button">Сохранить</Button>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Закрыть
                </Button>
              </DialogClose>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalClients;
