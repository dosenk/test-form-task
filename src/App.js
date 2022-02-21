import "./App.css";
import { Form } from "./modules/Form";
import { Header } from "./modules/Header";
import { useState } from "react";
import FormDialog from "./modules/FormDialog";
import { Box, CircularProgress } from "@mui/material";

function App() {
  const [senderEmail, setSenderEmail] = useState("");
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="App">
      {isLoading ? (
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            background: "rgba(51, 51, 51, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "100",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        ""
      )}
      <Box
        sx={{
          color: "#fff",
          position: "absolute",
          top: "5px",
          left: "25px",
        }}
      >
        Email: {senderEmail}
      </Box>
      <Header />
      <Form senderEmail={senderEmail} setLoading={setLoading} />
      <FormDialog senderEmail={senderEmail} setSenderEmail={setSenderEmail} />
    </div>
  );
}

export default App;
