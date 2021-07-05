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
import sp from './kp.jpg';
import img from './Img4.jpg';
import food from './food.jpg';
import education from './education.jpg';
import medical from './medical.jpg';



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

const cards = [1, 2, 3 ];

const images = [
 food,
 education,
 medical
]

const headings = [
 "Food",
 "Education",
  "Medical"

]

const comments = [
 "India Ranks 94th among 107 countries in Global Hunger Index.Nutrional value among children in India worsened over the past few years . India has the second highest number of stunted children in South Asia . Your Smallest Donation would help fund a child's one time meal and make sure that child doesn't go to bed empty stomach",
 "Less than half of India's children between the age of 6 and 14 go to school . Atleast 35 million children do not attend school . Its either because of lack of infrastructure or lack of facilities like books,uniform . A small donation would make someone's future",
 "In 2018,India reported the highest number of deaths of children aged below 5 years , The reason for it is lack of facilities present in government hospital and next to no ability to afford private medical facilities . Small donations will help in raising the standards of the facilities and save a life "
]

const urls = [
"http://localhost:5000/foodstats",
"http://localhost:5000/education",
"http://localhost:5000/medicalstats"
]


export default function Album() {
  const classes = useStyles();

  
  return (
    <React.Fragment  >
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
           Homepage
          </Typography>
        </Toolbar>
      </AppBar>
      <main  style={{ backgroundImage:`url(${img})`}}>
        {/* Hero unit */}
        <div className={classes.heroContent} style={{backgroundImage:`url(${img})`,color:"white"}}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center"  gutterBottom style={{color:"white"}}>
              Donation
              <br/>
              Drive
            </Typography>
            <Typography variant="h5" align="center"  paragraph>
               Every drop of water contibutes in making of a river.Similarly even a small donation from you can
               help these children to get up on their feet and make a name for themselves
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
               <Button variant="contained" color="primary"  onClick={event=>window.location.href="https://rzp.io/l/cLRwbtqpi"}>
                    Donate
                  </Button> 
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
                    <Typography gutterBottom variant="h5" component="h2">
                      {headings[card-1]}
                    </Typography>
                    <Typography>
                     {comments[card-1]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={event=>window.location.href=`${urls[card-1]}`}>
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
           ))}
          </Grid>
        </Container> 
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Pune Welfare Community 
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
       For a better tommorow!
        </Typography>
        <Copyright />
      </footer>
      {/* Footer */}
     
      {/* End footer */}
    </React.Fragment>
  );
}


