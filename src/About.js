import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import contactus from './contactus.jpg';
import donation from './donation.jpg';
import aim from './aim.jpg';
import aboutback from './aboutback.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const images = [
 aim,
 donation,
 contactus,
]

const comments = [
 "Aim of our community namely Pune Welfare community is to collect funds to improve standard of education,food and medical among underprivileged people especially children . The funds collected will be distributed to various NGOs working towards upliftment of such people",
 "Donation option is availbale on Homepage.Donations are accepted through RazorPay payment gateway and receipt will be sent on your email id once payment is done",
 "Contact us Section is for getting in touch with us.Any question/query/feedback that you have will reach us through this section"
]

const headings = [
 "Aim",
 "How to donate",
 "Contact"
]

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3]

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            About
          </Typography>
        </Toolbar>
      </AppBar>
      <main style={{backgroundImage:`url(${aboutback})`}}>
        {/* Hero unit */}
        <div className={classes.heroContent} style={{backgroundImage:`url(${aboutback})`,color:"white"}}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center"  gutterBottom style={{ color:"white"}}>
              About Us
            </Typography>
            <Typography variant="h5" align="center"  paragraph >
             About Us page is to  provide user with information such as Aim , Making Donation and how to get in touch with us if  query has to be raised  
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={images[card-1]}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h1" style={{fontSize:"xx-large"}}>
                     {headings[card-1]}
                    </Typography>
                    <Typography>
                    {comments[card-1]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Pune Welfare Community
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          For a better tommorow!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
            }

