import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    width: "98%",
    border: `1px solid #707070`,
    button: {
      backgroundColor: "orange",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    textTransform: "capitalize",
  },
  iconButton: {
    padding: 10,
    background: "#e1540f",
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function PromoCode() {
  const classes = useStyles();

  // React form handle methods
  const { handleSubmit, register, errors } = useForm();
  const isPromoCodeAvailable = false;
  const onSubmit = (values) => {
    if (!values) return;
    // dispatch(subscribeAction.subscriptionRequested(values));
    // history.push("/signUp");
  };

  return isPromoCodeAvailable ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="enter promo code"
          type="text"
          name="promocode"
          id="promocode"
          inputRef={register({
            pattern: {
              value: /^[A-Z0-9._%+-]$/i,
              message: "enter a valid promocode",
            },
          })}
          disabled={!isPromoCodeAvailable ? true : false}
        />
        {errors.email && (
          <p style={{ color: "red", fontSize: "10px" }}>
            {errors.promocode.message}
          </p>
        )}
        <Button
          variant="outlined"
          type="submit"
          disabled={!isPromoCodeAvailable ? true : false}
          autoComplete="off"
        >
          <span
            className={!isPromoCodeAvailable ? "apply-disabled" : "color-sub"}
          >APPLY
          </span>
        </Button>
      </Paper>
    </form>
  ) : null;
}
