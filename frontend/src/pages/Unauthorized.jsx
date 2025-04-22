import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e8e8e8",
        padding: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
          p: 5,
          borderRadius: "30px",
          boxShadow:
            "8px 8px 15px rgba(0,0,0,0.1), -8px -8px 15px rgba(255,255,255,0.7)",
          backgroundColor: "#e0e5ec",
        }}
      >
        <Typography variant="h3" sx={{ color: "#222", fontWeight: 600, mb: 2 }}>
          403 - Unauthorized
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", mb: 4 }}>
          You don’t have permission to access this page.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#e0e5ec",
            color: "#333",
            boxShadow: "inset 4px 4px 8px #c5c5c5, inset -4px -4px 8px #ffffff",
            borderRadius: "12px",
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#d6dbe0",
            },
          }}
        >
          Go Home
        </Button>
      </Box>
    </Box>
  );
};

export default Unauthorized;
