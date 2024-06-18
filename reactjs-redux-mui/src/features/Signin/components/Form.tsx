import { Button, Input, Stack } from "@mui/material";
import { memo } from "react";
import * as Yup from "yup";
import { EMAIL_REGEX } from "../../../constant/regex";
import { useFormik } from "formik";

const Form = () => {
  const onSubmit = async (value: any) => {
    console.log(value);
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    enableReinitialize: true,
    onSubmit,
  });
  return (
    <Stack
      flex={1}
      component="form"
      width="100%"
      maxHeight="100%"
      mt={3}
      spacing={3}
      overflow="hidden"
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <Stack flex={1} overflow="auto" spacing={3}>
        <Input
          fullWidth
          title="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values?.email}
          onBlur={formik.handleBlur}
        />

        <Input
          type="password"
          sx={{
            mt: 3,
            height: 58,
          }}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.password}
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{
            mt: 3,
          }}
          size="medium"
          color="primary"
        ></Button>
      </Stack>
    </Stack>
  );
};

export default memo(Form);

const INITIAL_VALUES = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required("Email is required")
    .matches(EMAIL_REGEX, "Email in valid"),
  password: Yup.string()
    .trim()
    .required("mat khau requrie")
    .min(6, "mat khau")
    .max(30, "some thing"),
});

const sxConfig = {
  input: { height: 58 },
};
