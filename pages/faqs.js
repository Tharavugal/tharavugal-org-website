import Layout from '@/components/layouts/DefaultLayout';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

function QA({ q, a }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{q}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{a}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default function FAQs() {
  return (
    <Layout>
      <Box textAlign="center">
        <Typography variant="h4">FAQs</Typography>
      </Box>
      <Box sx={{ p: 5, mt: 2 }}>
        <QA
          q="What is the meaning of `Tharavugal`?"
          a="`Tharavugal` is a Thamizhl language word, which means `Data`"
        />
      </Box>
    </Layout>
  );
}
