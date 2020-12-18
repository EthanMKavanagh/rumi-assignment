import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: 20
  },
  btn: {
    margin: 5,
    marginLeft: 110
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

    console.log('object to send is:', obj);

    dispatch({
      type: 'SUBMIT_FORM',
      payload: obj
    });
  }

  return (
    <div className="App">
      <h1>Rumi Contact Form</h1>

      <form className="form" onSubmit={handleSubmit}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
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

            <br />

            <TextField 
              id="outlined-basic" 
              label="Phone" 
              variant="outlined"
              type="text"
              value={phone}
              className={classes.input}
              onChange={e => setPhone(e.target.value)}
            />

            <br />

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

            <br />

            <TextField 
              id="outlined-basic" 
              label="Subject" 
              variant="outlined"
              type="text"
              value={subject}
              className={classes.input}
              onChange={e => setSubject(e.target.value)}
            />

            <br />

            <TextField 
              id="outlined-basic" 
              label="Message" 
              variant="outlined"
              type="text"
              value={message}
              className={classes.input}
              onChange={e => setMessage(e.target.value)}
            />

            <br />

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
      </form>
    </div>
  );
}

export default App;
