import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ContactForm = () => {
  return (
    <Box sx={{ background: "#191919", py: 10 }}>
      <Box sx={{ width: "80%", margin: "0 auto", color: "white" }}>
        <Typography sx={{ fontWeight: "700", fontSize: "44px" }}>
          Send Us a Message
        </Typography>
        <Typography sx={{maxWidth:'400px'}} >
          For comments or questions regarding something you have read or heard
          on The Athletic Perspective or to express interest in being a guest on
          the show, please complete the form below and we will get back to you
          soon. Thank you.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: "column",
            maxWidth: "300px",
            py: 4,
          }}
        >
         
          <TextField
            variant="outlined"
            placeholder="enter name"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                border: "2px solid grey",
                color: "white",
                "&:hover fieldset": {
                  borderColor: "grey",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "red",
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="enter email"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                border: "2px solid grey",
                color: "white",
                "&:hover fieldset": {
                  borderColor: "grey",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "red",
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="subject"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                border: "2px solid grey",
                color: "white",
                "&:hover fieldset": {
                  borderColor: "grey",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "red",
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="message"
            multiline
            rows={4}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                border: "2px solid grey",
                color: "white",
                "&:hover fieldset": {
                  borderColor: "grey",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "red",
                },
              },
            }}
          />
           <Button
            sx={{
              background: "#FF4742",
              border: "1px solid #FF4742",
              borderRadius: "25px",
              boxShadow: "rgba(0, 0, 0, 0.1) 1px 2px 4px",
              boxSizing: "border-box",
              color: "#FFFFFF",
              cursor: "pointer",
              display: "inline-block",
              fontFamily:
                'nunito, roboto, proxima-nova, "proxima nova", sans-serif',
              fontSize: "16px",
              fontWeight: 800,
              lineHeight: "16px",
              minHeight: "40px",
              outline: 0,
              padding: "12px 14px",
              textAlign: "center",
              textRendering: "geometricprecision",
              textTransform: "none",
              userSelect: "none",
              WebkitUserSelect: "none",
              touchAction: "manipulation",
              verticalAlign: "middle",
              width:'200px',
              "&:hover, &:active": {
                backgroundColor: "initial",
                backgroundPosition: "0 0",
                color: "#FF4742",
              },
              "&:active": {
                opacity: 0.5,
              },
            }}
          >
            Submit Form
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
