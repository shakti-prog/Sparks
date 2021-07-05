import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextArea from 'antd/lib/input/TextArea';
import  AppBar  from '@material-ui/core/AppBar';
import  Toolbar  from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/Camera';
import que from './Question.jpg'
import {useState} from 'react';
import validator from 'validator';
import {useHistory} from 'react-router-dom';


function Copyright(){
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
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:`url(${que})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const history = useHistory();
  const [initialState, FinalState] = useState({
    email:"",name:"",query:"",city:"",phone:""
  })
  const classes = useStyles();
  const handleInput = (event)=>{
  const name = event.target.name;
  const value = event.target.value;
  FinalState({...initialState,[name]:value})
   }
 
   const handleSubmit = (event)=>{
     //console.log("Your details",initialState.email,initialState.name,initialState.query,initialState.phone);
     //window.alert("Your details" + initialState.email + initialState.name + initialState.query+initialState.phone);
     if(!validator.isEmail(initialState.email)){
       window.alert("Pls enter a valid emailId");
       event.preventDefault();
     }
     else if(!validator.isMobilePhone(initialState.phone)){
       window.alert("Pls enter a valid phone number");
       event.preventDefault();
     }
     else if(initialState.name.length<3){
       window.alert("Name should have atleast 3 characters");
       event.preventDefault();
     }
     else if(initialState.name.length>20){
      window.alert("Name should not have more than 20 characters");
      event.preventDefault();
    }
     else if(initialState.query.length==0){
       window.alert("Feedbcak/query section should not be empty");
       event.preventDefault();
     }
     else{
      const res = fetch('http://localhost:5000/data',{          
        method:"POST",
        headers:{
         "Content-Type":"application/json"
        }, 
        body:JSON.stringify({
          "name":initialState.name,
          "email":initialState.email,
          "phone":initialState.phone,
          "query":initialState.query,
          "city":initialState.city
        })
      }).then(response => {
        if(response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
      .then(res2=>res2.json()
      ).then(window.alert("Your feedback/query has been submitted,You will be redirected to HomePage")).then(history.push("/")).catch(error=>window.alert("Erro"))
     }
   }
  return (
    <React.Fragment>
       <AppBar position="relative">
    <Toolbar>
      <CameraIcon className={classes.icon} />
      <Typography variant="h6" color="inherit" noWrap>
       Contact
      </Typography>
    </Toolbar>
   </AppBar>  
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
             Ask a Question/Submit Feedback
          </Typography>
          <form className={classes.form}  type="post" onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInput}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
              onChange={handleInput}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone Number"
              type="phone"
              id="phone"
              onChange={handleInput}
              
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="city"
              label="City of Residence"
              type="text"
              id="City"
              onChange={handleInput}
            />
            <TextArea
              style={{paddingTop:"100px",marginTop:"20px",borderRadius:"3px"}}
              variant="outlined"
              margin="large"
              required
              fullWidth
              name="query"
              label="Your Question"
              type="text"
              id="question"
              onChange={handleInput}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
            <footer className={classes.footer}>
             <Typography variant="h6" align="center" gutterBottom>
                    Pune Welfare Community
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    For a better tommorow!
              </Typography>
             </footer>
          </form>
        </div>
      </Grid>
    </Grid>
    </React.Fragment>
  );
}