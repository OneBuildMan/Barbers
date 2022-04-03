import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles({
  menu: {
    width: '100%'
  }
});

const FullScreenMenu = (p: { open: boolean, closeDrawer: () => void }) => {

  const styles = useStyles()

  return <Drawer className={styles.menu} open={p.open}>
     <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={p.closeDrawer}
          >
            <CancelIcon />
          </IconButton>
  </Drawer>
};

export default FullScreenMenu;
