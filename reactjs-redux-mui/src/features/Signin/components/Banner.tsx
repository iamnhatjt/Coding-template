import { Stack } from "@mui/material";
import { memo } from "react";

const Banner = () => {
  return (
    <Stack
      flex={1}
      sx={{
        background:
          "url('/images/img-auth-banner.webp') no-repeat center center",
        backgroundSize: "cover",
      }}
      display={{ xs: "none", sm: "flex" }}
      alignItems="center"
    >
      Image replace
    </Stack>
  );
};

export default memo(Banner);
