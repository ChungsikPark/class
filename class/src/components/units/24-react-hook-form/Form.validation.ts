import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일형식적합하지않아요")
    .required("이메일필수입력"),
  password: yup
    .string()
    .min(8, "비밀번호8자리이상")
    .max(15, "비밀번호15자리이하")
    .required("비밀번호필수입력"),
});
