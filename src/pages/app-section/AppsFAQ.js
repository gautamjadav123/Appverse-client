import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "How can I create an account on Zomato?",
    answer:
      "To create an account on Zomato, go to the sign-up page, enter your details, and follow the instructions to verify your email or phone number.",
  },
  {
    question: "How do I make a reservation through the app?",
    answer:
      "You can make a reservation through the Zomato app by selecting the restaurant and clicking on the 'Book a Table' option.",
  },
  {
    question: "Can I order food for delivery from any restaurant?",
    answer:
      "You can order food for delivery from any restaurant that offers delivery services through Zomato.",
  },
  {
    question: "What is Zomato Gold?",
    answer:
      "Zomato Gold is a membership program that offers exclusive discounts and benefits at partner restaurants.",
  },
];

function AppsFAQ() {
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

      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default AppsFAQ;
