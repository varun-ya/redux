import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Contact Us
        </Typography>
        <Typography variant="body1" align="center">
          Have any questions? Feel free to reach out!
        </Typography>
        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="textSecondary">
             Email: jadutona@gmail.com
          </Typography>
          <Typography variant="body2" color="textSecondary">
           Phone: +91 balh b;ah!!!
          </Typography>
          <Typography variant="body2" color="textSecondary">
             Address: 123 Street, Ahemdabad, India
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
