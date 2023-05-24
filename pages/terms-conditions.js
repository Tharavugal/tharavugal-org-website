import Layout from '@/components/layouts/DefaultLayout';
import { Alert, Box, Paper, Typography } from '@mui/material';
import Link from 'next/link';

export default function TermsConditions() {
  return (
    <Layout>
      <Box textAlign="center">
        <Typography variant="h4">Terms & Conditions</Typography>
      </Box>
      <Paper sx={{ p: 5, mt: 2 }}>
        <Alert severity="warning">
          Please read these terms and conditions carefully before using our
          service.
        </Alert>

        <Box mt={2}>
          <Typography variant="h5">About Us</Typography>
          Please <Link href="/about-us">click here to read.</Link>
        </Box>

        <Box mt={2}>
          <Typography variant="h5">Terms</Typography>
          <ul>
            <li>
              <strong>Web App/Web application</strong>
              &nbsp; It refers to Tharavugal.org (https://tharavugal.org).
            </li>
            <li>
              <strong>Organization</strong>
              &nbsp;It refers to this web application.
            </li>
            <li>
              <strong>Service</strong>
              &nbsp;It refers to this web applicaton and any actions within it.
            </li>
            <li>
              <strong>We/Our</strong>
              &nbsp;It refers to this organization, service or this web app.
            </li>
            <li>
              <strong>You</strong>
              &nbsp;It refers to anybody(Individual, Service, or Bot) who
              access, use or consume this service.
            </li>
          </ul>
        </Box>

        <Box mt={2}>
          <Typography variant="h5">Using Our Services</Typography>
          <ul>
            <li>
              The minimum age required to create an account in this web app is
              18 or older.
            </li>
            <li>
              Certain content will only be available to members of this
              organization.
            </li>
            <li>
              The guest user may have some restrictions on accessing the
              content.
            </li>
            <li>
              The content generated by the user may be publicly available or
              accessible.
            </li>
            <li>
              Based on the user roles and permissions, you can create, modify
              and remove contents here.
            </li>
            <li>
              You must agree with the&nbsp;
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </Box>

        <Box mt={2}>
          <Typography variant="h5">Our Rights</Typography>
          <Typography variant="subtitle1">
            We want to hold some rights to run our services, such as:
            <ul>
              <li>
                We use, modify, remove, delete, host, reproduce, communicate,
                save, publish, public display, translate your content you
                created in this service.
              </li>
              <li>
                We may suspend or terminate your account or access to this
                service if you voilate any of these terms and conditions.
              </li>
              <li>
                We may send you communications like service updates, important
                security related and other information.
              </li>
            </ul>
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="h5">Warranty</Typography>
          <Typography variant="subtitle1">
            We provide our services with atmost care and concern. You can
            contact us for any issues to be resolved and unless required by law,
            we do not provide any implied warranties.
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="h5">Disclaimers</Typography>
          <Typography variant="subtitle1">
            <ul>
              <li>
                We do not claim that the information provided in this service is
                accurate, 100%, or reliable source of real events.
              </li>
              <li>
                People creating content with their own knowledge and it may
                contain fault and defects information.
              </li>
              <li>
                We work towards development of our services with reliability and
                efficiency, But we do not make any other commitments about our
                services.
              </li>
            </ul>
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="h5">Limitation of Liability</Typography>
          <Typography variant="subtitle1">
            These terms and conditions of this organization do not liable
            for any losses, death, personal injury, fraud, misinterpretation,
            negligence, willful misconduct.
            <br />
            To the maximum extent permitted by applicable law, in no event shall
            the organization be liable for any special, incidental, indirect, or
            consequential damages whatsoever (including, but not limited to,
            damages for loss of profits, loss of data or other information, for
            business interruption, loss of privacy arising out of or in any way
            related to the use of or inability to use the Service, third-party
            software and/or third-party hardware used with the Service, or
            otherwise in connection with any provision of this Terms).
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="h5">Changes</Typography>
          <Typography variant="subtitle1">
            We reserve the right to modify or replace these Terms and Conditions
            at any time. If a revision is made, we will provide you reasonable
            time for notice prior to any new terms and conditions taking effect.
            <br />
            We will get appropriate consent from you before proceeding with the
            new terms and conditions.
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="h5">Contact Us</Typography>
          <Typography variant="subtitle1">
            If you have any queries about these Terms and Conditions, Click <Link href="/contact-us">here to contact us.</Link>
          </Typography>
        </Box>
        <Alert severity="info" sx={{ mt: 2 }}>
          If you find any of the content here is not correct or contradicting to
          one another, please feel free to contact us, we are open and ready to
          accept & make changes.
        </Alert>
      </Paper>
    </Layout>
  );
}
