import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContact } from "../../interfaces/contacts";

export const contactsCreateSchema: SchemaOf<IContact> = yup.object().shape({
  email: yup.string().email("Invalid format").required("Email Required"),
  full_name: yup.string().required("Full Name Required"),
  phone: yup
    .string()
    .required("Phone Required")
    .matches(
      /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/,
      "Invalid format, must be like : 00 12345 6789"
    ),
  description: yup.string(),
});
