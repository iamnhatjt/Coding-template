import { forwardRef } from "react";

// ** MUI Imports
import { styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  alignItems: "flex-start",
  "& .MuiInputLabel-root": {
    transform: "none",
    lineHeight: 1.154,
    position: "relative",
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.primary,
  },
}));

const Input = forwardRef((props: TextFieldProps, ref) => {
  // ** Props
  const {
    size = "small",
    label,
    placeholder,
    InputLabelProps,
    ...rest
  } = props;
  return (
    <TextFieldStyled
      size={size}
      inputRef={ref}
      {...rest}
      variant="filled"
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
      label={typeof label === "string" && label}
      placeholder={placeholder}
    />
  );
});

export default Input;
