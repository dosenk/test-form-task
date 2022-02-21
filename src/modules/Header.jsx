import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      style={{
        width: "718px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontFamily: "Open Sans",
          fontWeight: 400,
          fontSize: "32px",
        }}
      >
        We are always looking for new faces, so feel free to fill out the form
        below!
      </Typography>
      <Typography
        sx={{
          width: "518px",
          color: "#fff",
          fontFamily: "Open Sans",
          fontWeight: 300,
          fontSize: "16px",
        }}
      >
        <span style={{ color: "#fb7641" }}>REQUIREMENTS:</span> HEIGHT OVER 170
        CM, AGE BETWEEN 12 - 22 YEARS. Please attach photos of your face and
        full height. They should be simple, natural, without makeup, so we can
        see how you look. Also be careful <br /> by filling in your contact
        information correctly..
      </Typography>
    </Box>
  );
};
