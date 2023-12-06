import { useForm, FormContext } from "vee-validate";
import * as yup from "yup";

interface IDemoFormValues {
  email?: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

export const DEFAULT_VALUES = {
  email: "",
  name: "",
  password: "",
  passwordConfirm: "",
};

export type FormContextType = FormContext<IDemoFormValues>;

export const initForm = () =>
  useForm<IDemoFormValues>({
    validationSchema: yup.object({
      email: yup.string().email(),
      name: yup.string().required(),
      password: yup.string().required().min(6),
      passwordConfirm: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref("password")]),
    }),
    initialValues: DEFAULT_VALUES,
  });
