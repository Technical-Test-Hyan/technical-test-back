import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser } from "../../interfaces/users";

export const usersCreateSchema: SchemaOf<IUser> = yup.object().shape({
  email: yup.string().email("Invalid format").required("Email Required"),
  full_name: yup.string().required("Full Name Required"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*[a-z])/, "Must have one lower case")
    .matches(/(?=.*[A-Z])/, "Must have one upper case")
    .matches(/(?=.*[0-9])/, "Must have one number")
    .matches(/(?=.*[!$*&@#])/, "Must have one special character")
    .min(8, "Must contain at least 8 letters"),
  phone: yup
    .string()
    .required("Phone Required")
    .matches(
      /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/,
      "Invalid format, must be like : 00 12345 6789"
    ),
});
