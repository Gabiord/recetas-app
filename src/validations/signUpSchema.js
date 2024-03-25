import { object, string, ref, boolean } from "yup";

export const signUpSchema = object().shape({
  name: string().required("Es necesario completar todos los datos"),
  email: string().required("Es necesario completar todos los datos").email(),
  password: string()
    .required("Es necesario completar todos los datos")
    .min(6, "La contrasena debe tener al menos 6 caracteres"),
  passwordConfirm: string()
    .required("Es necesario completar todos los datos")
    .oneOf([ref("password"), null], "Las contrasenas deben coincidir"),
  toggleCheckBox: boolean().oneOf(
    [true],
    "Debes aceptar los terminos y Condiciones"
  ),
})
