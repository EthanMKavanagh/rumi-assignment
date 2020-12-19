import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, TextField, Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#ffffff'
  },
  input: {
    marginTop: 20
  },
  btn: {
    marginTop: 5,
    backgroundColor: '#34B9B7'
  },
  paragraph: {
    color: '#606060'
  }
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const obj = {
      name: name,
      phone: phone,
      email: email,
      birthday: birthday,
      subject: subject,
      message: message
    }

    dispatch({
      type: 'SUBMIT_FORM',
      payload: obj
    });

    if (name === '' || phone === '' || email === '' || birthday === '' || subject === '' || message === '') {
      setFormStatus(false);
    } else {
      setFormStatus(true);
    }
  }

  const formStatusChecker = () => {
    if (formStatus === true) {
      return <Alert severity="success">Success</Alert>
    } else if (formStatus === false) {
      return <Alert severity="error">Error - Please fill out all fields</Alert>
    } else {
      return <></>
    }
  }

  return (
    <div className="App">
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <img src="/logo.png" alt="logo" width="200px"/>
          <span className="appbar-spacer"></span>
          <Typography variant="subtitle1" component="h4" className={classes.paragraph}>
            Transforming disability services, one match at a time.
          </Typography>
        </Toolbar>
      </AppBar>

      {formStatusChecker()}

      <div className="content">
        <h1>Contact Form</h1>

        <form className="form" onSubmit={handleSubmit}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined"
                    type="text"
                    value={name}
                    className={classes.input}
                    onChange={e => setName(e.target.value)}
                  />
                </Grid>

                <Grid item>
                  <TextField 
                    id="outlined-basic" 
                    label="Phone" 
                    variant="outlined"
                    type="tele"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value={phone}
                    className={classes.input}
                    onChange={e => setPhone(e.target.value)}
                  />
                </Grid>

                <Grid item>
                  <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined"
                    type="text"
                    value={email}
                    className={classes.input}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-end"
              >
                <Grid item>
                  <TextField 
                    id="outlined-basic" 
                    label="Birthday" 
                    variant="outlined"
                    type="text"
                    value={birthday}
                    className={classes.input}
                    onChange={e => setBirthday(e.target.value)}
                  />
                </Grid>

                <Grid item>
                  <TextField 
                    id="outlined-basic" 
                    label="Subject" 
                    variant="outlined"
                    type="text"
                    value={subject}
                    className={classes.input}
                    onChange={e => setSubject(e.target.value)}
                  />
                </Grid>

                <Grid item>
                  <TextField 
                    id="outlined-basic" 
                    label="Message" 
                    variant="outlined"
                    type="text"
                    value={message}
                    className={classes.input}
                    onChange={e => setMessage(e.target.value)}
                  />
                </Grid>

                <Grid item>
                  <Button 
                    className={classes.btn} 
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default App;
