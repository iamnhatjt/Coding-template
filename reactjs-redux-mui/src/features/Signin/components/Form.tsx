import { Button, Input, Stack, TextField } from "@mui/material";
import { memo, useState } from "react";
import * as Yup from "yup";
import { EMAIL_REGEX } from "../../../constant/regex";
import { useFormik } from "formik";
import { Icon } from "@iconify/react";
import Iconify from "../../../layouts/sharedComponents/Iconify";
import { current } from "@reduxjs/toolkit";

const Form = () => {
  const [isShowPassword, setShowPassword] = useState(false);

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
      <Stack justifyContent="center" flex={1} overflow="auto" spacing={3}>
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="Email Adress"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          variant="outlined"
        />

        <TextField
          id="pas sword"
          name="password"
          label="Password"
          type={isShowPassword ? "password" : "text"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <Iconify
                icon={
                  !isShowPassword
                    ? "weui:eyes-off-filled"
                    : "weui:eyes-on-outlined"
                }
                onClick={() => {
                  setShowPassword((current) => !current);
                }}
              />
            ),
          }}
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
        >
          Login
        </Button>
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
