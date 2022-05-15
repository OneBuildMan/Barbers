import * as React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    backgroundColor: "#dde4f0"
  },
  input: {
  }
});

const CustomTextField = (p: { value: string, label: string }) => {
  const styles = useStyles();

  return (
    <TextField
      fullWidth
      className={styles.field}
      label={p.label}
      variant="filled"
      value={p.value}
      InputProps={{
        className: styles.input
      }}
    />
  );
};

export default CustomTextField;
