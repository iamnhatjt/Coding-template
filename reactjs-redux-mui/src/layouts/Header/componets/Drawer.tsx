import { memo, useEffect } from "react";
import useToggle from "../../../hooks/useToggle";
import useBreakpoint from "../../../hooks/useBreakpoint";
import { IconButton, Drawer as MuiDrawer } from "@mui/material";
import BarsIcon from "../../../icons/BarsIcon";

const Drawer = () => {
  const [isShow, onShow, onHide] = useToggle(false);

  const { isSmSmaller } = useBreakpoint();

  useEffect(() => {
    onHide();
  }, [isSmSmaller, onHide]);

  return (
    <>
      <IconButton onClick={onShow} className="only-mobile" sx={{ height: 40 }}>
        <BarsIcon color="primary" />
        <MuiDrawer anchor="left" open={isShow} onClose={onHide}>
          hello world
        </MuiDrawer>
      </IconButton>
    </>
  );
};

export default memo(Drawer);
