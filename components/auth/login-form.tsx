"use client";

import * as Z from "zod";
import { CardWrapper } from "@/components/auth/card-wrapper";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
  useForm,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/index";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ReactElement, JSXElementConstructor } from "react";
import { Button } from "@/components/ui/button";
export const LoginForm = () => {
  const form = useForm<Z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: Z.infer<typeof LoginSchema>) => {
    console.log(values);
  };
  return (
    <div>
      <CardWrapper
        headerLabel={"Bem Vindo de Volta!"}
        backButtonLabel={"Ainda não tem uma conta? Crie agora!"}
        backButtonhref={"/auth/register"}
        showSocial
      >
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name={"email"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="exemplo@exemplo.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"password"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="********"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" size={"lg"} className="w-full">
              Entrar
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};
