import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser } from "../../interfaces/users";

export const usersCreateSchema: SchemaOf<IUser> = yup.object().shape({
  email: yup.string().email("Invalid format").required("Email Required"),
  full_name: yup.string().required("Full Name Required"),
  password: yup.string().required("Password Required"),
  phone: yup
    .string()
    .required("Phone Required")
    .matches(
      /\(?([0-9]{2})\)?([ .-]?)([0-9]{5})\2([0-9]{4})/,
      "Invalid format, must be like : (00) 12345-1234"
    ),
});
