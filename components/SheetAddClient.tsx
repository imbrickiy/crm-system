"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addClient } from "@/app/actions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function SheetAddClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const router = useRouter();

  useEffect(() => {
    router.refresh();
    router.replace("/", {});
    router.push("/");
  }, [router]);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="space-y-4">
        <Form {...form}>
          <form
            onSubmit={async () => (
              await addClient(
                form.getValues("title"),
                form.getValues("description")
              ),
              form.reset()
            )}
            className="space-y-8"
          >
            <SheetHeader>
              <SheetTitle>Добавить компанию</SheetTitle>
              <SheetDescription>
                Здесь вы можете добавить данные о компании
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Наименование" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Дополнительная информация"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <SheetFooter className="flex items-center justify-between space-x-2">
              <SheetClose asChild>
                <Button className="w-full" variant="outline">
                  Отменить
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button className="w-full" variant="default" type="submit">
                  Сохранить
                </Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
