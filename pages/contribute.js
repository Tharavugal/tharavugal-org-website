import Layout from '@/components/layouts/DefaultLayout';
import { Paper, Typography, Card, CardContent, Chip, Box } from '@mui/material';
import Link from 'next/link';
import InfoIcon from '@mui/icons-material/Info';

export default function Contribute() {
  return (
    <Layout title="Contribute">
      <Typography variant="h5" textAlign="center">
        Contribute
      </Typography>
      <Paper sx={{ mt: 2, p: { xs: 1, sm: 1, md: 2 } }}>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">Share</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              If you really found this useful, please share it with the world
              through any medium.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Create Real-Time events</Typography>
              <Chip
                color="info"
                size="small"
                icon={<InfoIcon />}
                label="Members Only"
              ></Chip>
            </Box>

            <Typography variant="body1" sx={{ mt: 2 }}>
              You can create real-time events based on your knowledge. The more
              data we have, the more reliable results we get.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">
                Report, update or verify Real-Time events
              </Typography>
              <Chip
                color="info"
                size="small"
                icon={<InfoIcon />}
                label="Members Only"
              ></Chip>
            </Box>

            <Typography variant="body1" sx={{ mt: 2 }}>
              We want our data to be reliable, so if you find any event data
              that needs to be reported or corrected, please help us. Every
              event in the system needs to be cross-verified by multiple
              members, so you can verify it according to your knowledge.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Help translate</Typography>
              <Chip
                color="info"
                size="small"
                icon={<InfoIcon />}
                label="Members Only"
              ></Chip>
            </Box>

            <Typography variant="body1" sx={{ mt: 2 }}>
              We want our data to be accessible to anyone around the world, so
              if you are good at any language, please help us translate.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">
                Participate in open-discussions
              </Typography>
              <Chip
                color="info"
                size="small"
                icon={<InfoIcon />}
                label="Members Only"
              ></Chip>
            </Box>

            <Typography variant="body1" sx={{ mt: 2 }}>
              There are many things in society that conflict with each other, so
              please participate if you are experienced in particular fields.
              <br />
              <br />
              <Link href="/open-discussions">
                Click here for open discussions
              </Link>
              .
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">File Issues</Typography>
              <Chip
                color="info"
                size="small"
                icon={<InfoIcon />}
                label="Members Only"
              ></Chip>
            </Box>

            <Typography variant="body1" sx={{ mt: 2 }}>
              Members can file issues of any kind, track updates, etc.
              <br />
              <br />
              <Link href="/open-issues">Please file your issues here.</Link>.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">PRs are welcome</Typography>
            </Box>

            <Typography variant="body1" sx={{ mt: 2 }}>
              If you are a developer or technical person, please report any bugs
              or issues you encounter while using the app.
              <br />
              <br />
              Try to code or fix any issues reported on{' '}
              <Link href="https://github.com/Tharavugal/web">GitHub</Link>.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Support Accessibility</Typography>
            </Box>

            <Typography variant="body1" sx={{ mt: 2 }}>
              Help people with disabilities use the app.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Infrastructure upgrade</Typography>
            </Box>

            <Typography variant="body1" sx={{ mt: 2 }}>
              Currently, our system runs on low resources, and due to this, we
              are limiting user access to these web app features.
              <br />
              <br />
              Our web app is currently running on the free tier of{' '}
              <Link href="https://vercel.com/">Vercel.com</Link>
              <br />
              <br />
              Thanks to <Link href="https://vercel.com/">Vercel.com</Link> for
              the free web hosting.
              <br />
              <br />
              Please <Link href="/contact-us">contact us</Link> for more
              details.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Health Care</Typography>
              <Chip
                color="info"
                size="small"
                icon={<InfoIcon />}
                label="Members Only"
              />
            </Box>

            <Typography variant="body1" sx={{ mt: 2 }}>
              If you are a health professional, please help us review or make
              corrections to the health-related data here.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Your feedback matters</Typography>
            </Box>

            <Typography variant="body1" sx={{ mt: 2 }}>
              Your suggestions are always welcome, which will help us improve.
              <br />
              <br />
              Feel free to send us your feedback via email.
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Layout>
  );
}
