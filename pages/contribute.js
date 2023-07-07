import Layout from '@/components/layouts/DefaultLayout';
import { Paper, Typography, Alert, AlertTitle } from '@mui/material';
import Link from 'next/link';

export default function Contribute() {
  return (
    <Layout title="Contribute">
      <Typography variant="h4" textAlign="center">
        Contribute
      </Typography>
      <Paper sx={{ mt: 2, p: 5 }}>
        <Typography variant="h6">
          Here are the number of ways you can contribute:
        </Typography>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
          <AlertTitle>Share</AlertTitle>
          If you really found this useful, please share it with the world
          through any medium.
        </Alert>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
          <AlertTitle>Create real-time events</AlertTitle>
          You can create real-time events based on your location. The more data
          we have, the more reliable results we get.
        </Alert>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
          <AlertTitle>Report, update & verify events</AlertTitle>
          We want our data to be reliable, so if you find any event data that
          needs to be reported or corrected, please help us.
          <br />
          <br />
          Every event in the system needs to be cross-verified by multiple
          members, so you can verify it according to your knowledge.
        </Alert>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
          <AlertTitle>Help translate</AlertTitle>
          We want our data to be accessible to anyone around the world, so if
          you are good at any language, please help us translate.
        </Alert>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
          <AlertTitle>Participate in open-discussions</AlertTitle>
          There are many things in society that conflict with each other, so if
          you are experienced in particular fields.
          <br />
          <br />
          Please participate in{' '}
          <Link href="/open-discussions"> open discussions</Link>.
        </Alert>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
          <AlertTitle>Vote Up</AlertTitle>
          Join hands with others to raise your voice against issues in society.
          <br />
          <br />
          <Link href="/social-issues">Please vote up here.</Link>.
        </Alert>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
          <AlertTitle>File Issues</AlertTitle>
          Members can file issues of any kind, track updates, etc.
          <br />
          <br />
          <Link href="/open-issues">Please file your issues here.</Link>.
        </Alert>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
          <AlertTitle>PRs are welcome</AlertTitle>
          If you are a developer or technical person, please report any bugs you
          encounter.
          <br />
          <br />
          Try to fix any issues reported on{' '}
          <Link href="https://github.com/Tharavugal/web">GitHub</Link>.
        </Alert>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
          <AlertTitle>Support Accessibility</AlertTitle>
          Help people with disabilities use the app.
        </Alert>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
          <AlertTitle>Infrastructure upgrade</AlertTitle>
          Currently, our system runs on low resources, and due to this, we are
          limiting user access to these web app features.
          <br />
          <br />
          Our web app is currently running on the free tier of <Link href="https://vercel.com/">Vercel.com</Link>
          <br />
          <br />
          Thanks to <Link href="https://vercel.com/">Vercel.com</Link> for the free web hosting.
          <br />
          <br />
          Please <Link href="/contact-us">contact us</Link> for more details.
        </Alert>

        <Alert variant="outlined" severity="info" sx={{ mt: 2 }}>
          <AlertTitle>Your feedback matters</AlertTitle>
          Your suggestions are always welcome, which will help us improve. Feel
          free to send us your feedback.
        </Alert>
      </Paper>
    </Layout>
  );
}
