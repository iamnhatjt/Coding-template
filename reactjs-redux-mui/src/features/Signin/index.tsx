import { Stack } from "@mui/material";
import React, { memo } from "react";
import Form from "./components/Form";

const Signin: React.FC = () => {
  return (
    <Stack>
      <Form />
    </Stack>
  );
};

export default memo(Signin);
