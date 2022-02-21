import { Box, Button, FormControlLabel, Radio } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { FormInput } from "./FormInput";
import { INPUTS } from "./constatnts";
import validator from "validator";
import axios from "axios";
import { getNotificStyle } from "./../utils";

const styles = makeStyles((theme) => {
  return {
    disabledButton: {
      backgroundColor: "#737373 !important",
      color: `${theme.palette.primary.main} !important`,
    },
  };
});

export const Form = ({ senderEmail, setLoading }) => {
  const classes = styles();
  const { enqueueSnackbar } = useSnackbar();
  const [agree, setAgree] = useState(false);
  const [state, setState] = useState({});
  const [errorState, setErrorState] = useState({});

  useEffect(() => {
    setState({ ...state, senderEmail });
  }, [senderEmail]);

  const handleClickBtn = () => {
    setLoading(true);
    const url = "http://localhost";
    const form = new FormData();
    for (const key in state) {
      form.append(key, state[key]);
    }
    axios
      .post(url, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data === "ok")
          enqueueSnackbar("Data sent successfully", getNotificStyle("success"));
        setLoading(false);
        console.log(state);
      });
  };

  const handleSetState = (key, value) => {
    if (key === "email") {
      if (!validator.isEmail(value) && value.length)
        setErrorState({ ...errorState, [`${key}`]: "invalid email" });
      else {
        delete errorState[key];
        setErrorState(errorState);
      }
    }
    setState({ ...state, [`${key}`]: value });
  };

  const handleClickInput = (id) => {
    const input = document.querySelector(`#${id}`);
    input.click();
  };

  return (
    <Box>
      <Box
        type="form"
        sx={{
          width: "845px",
          display: "flex",
          marginTop: "100px",
          justifyContent: "space-between",
          flexWrap: "wrap",
          zIndex: "10",
        }}
      >
        {INPUTS.map((input, idx) => {
          return (
            <FormInput
              key={input.value + idx}
              state={state}
              input={input}
              error={errorState}
              handleSetState={handleSetState}
              handleClickInput={handleClickInput}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <FormControlLabel
          control={
            <Radio
              checked={agree}
              onClick={(e) => {
                setAgree(!agree);
              }}
            />
          }
          label={
            <div style={{ color: "#fff", fontSize: "14px" }}>
              I agree with <span style={{ color: "#fb7541" }}>rules</span>
            </div>
          }
        />
        <Button
          sx={{
            borderRadius: "0px",
            width: "253px",
            height: "41px",
          }}
          variant="contained"
          disabled={!agree || !!Object.keys(errorState).length}
          classes={{ disabled: classes.disabledButton }}
          onClick={handleClickBtn}
        >
          SEND
        </Button>
      </Box>
    </Box>
  );
};
