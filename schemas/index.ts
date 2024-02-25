import * as Z from "zod";
export const LoginSchema = Z.object({
  email: Z.string().email({ message : "Por favor insira um endereço de e-mail válido." }),
  password: Z.string().min(1,{message: "Senha Invalida"}),
});
