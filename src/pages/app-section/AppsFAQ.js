import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AppsFAQ({ data }) {
  return (
    <Box
      sx={{
        m: 2,
        width: "100%",
        maxWidth: 600,
        backgroundColor: "#f5f5f5",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        FAQ'S
      </Typography>

      {data?.faqs?.length > 0 ? (
        data.faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography>No FAQs available.</Typography>
      )}
    </Box>
  );
}

export default AppsFAQ;
