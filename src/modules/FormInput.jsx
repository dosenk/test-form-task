import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import AttachmentTwoToneIcon from "@mui/icons-material/AttachmentTwoTone";
import { useSnackbar } from "notistack";
import { getNotificStyle } from "./../utils";

export const FormInput = ({
  state,
  input,
  error,
  handleSetState,
  handleClickInput,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const handleClick = ({ id, type }) => {
    if (type === "file") handleClickInput(id);
  };

  const handleChangeInput = (e) => {
    const { size } = e.target.files[0];
    if (size / 1024 > 32)
      enqueueSnackbar("File size is more than 32MB", getNotificStyle("error"));
    else handleSetState(input.id, e.target.files[0]);
  };

  return (
    <FormControl sx={{ width: "252px" }} variant="standard">
      {input.type === "file" ? (
        <input
          type="file"
          id={input.id}
          style={{ display: "none" }}
          onChange={handleChangeInput}
        />
      ) : (
        ""
      )}
      <InputLabel htmlFor="standard-adornment-password">
        {input.value}
      </InputLabel>
      <Input
        id={input.values}
        type={"text"}
        error={!!error[input.id]?.length}
        value={
          input.type === "text"
            ? state[input.id] || ""
            : state[input.id]?.name ?? ""
        }
        onClick={() => handleClick(input)}
        onChange={(e) => handleSetState(input.id, e.target.value)}
        endAdornment={
          input.type === "file" ? (
            <InputAdornment
              position="end"
              sx={{ position: "absolute", right: "0px" }}
            >
              <IconButton aria-label="file">
                <AttachmentTwoToneIcon
                  color="primary"
                  sx={{
                    transform: "rotate(135deg) scaleX(-1)",
                  }}
                />
              </IconButton>
            </InputAdornment>
          ) : (
            ""
          )
        }
      />
      <FormHelperText sx={{ color: "#fff", height: "20px" }} id={input.values}>
        {error[input.id] ?? ""}
      </FormHelperText>
    </FormControl>
  );
};
