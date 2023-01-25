import logo from './logo.svg';
import './App.css';
import './styles.css';

import * as React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import jaswellsLogo from './images/jaswells-logo.png';
import homeImage1 from './images/jaswell-title-image.jpeg';
import homeImage2 from './images/jaswells1.jpeg';
import mapImage from './images/Jaswells map.png';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function validTimeDate(dateTime) {
  return (dateTime.day() != 2) && (dateTime.hour() >= 9) && (dateTime.hour() < 16);
}

function App() {
  const [dateTime, setDateTime] = React.useState(dayjs('2023-01-25T09:00:00'));
  const handleTimeChange = (newValue) => {
    setDateTime(newValue);
  };
  const [numPeople, setNumPeople] = React.useState(2);
  const handleNumPeople = (event) => {
    setNumPeople(event.target.value);
  }

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  //Confirm Reservation button logic
  const handleDialogOpen = () => {
    setOpen(true);
  };

  const openErr = () => {
    setOpenErrSnackbar(true);
  }

  const handleDialogClose = () => {
    setOpen(false);
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [openErrSnackbar, setOpenErrSnackbar] = React.useState(false);

  const handleConfirmClick = () => {
    setOpenSnackbar(true);
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleErrSnackbar = () => {
    setOpenErrSnackbar(true);
  };

  const handleErrClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenErrSnackbar(false);
  };

  return (
    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Jaswell's Farm</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="styles.css" />
  <nav
    className="navbar navbar-expand-lg sticky-top"
    style={{ backgroundColor: "#f5bc42" }}
  >
    <div className="container-fluid">
      <img src={jaswellsLogo} height="60px" />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="navbar-text"
              aria-current="page"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbar-text"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Us
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#" className="navbar-bold">
                  Picking Schedule
                </a>
              </li>
              <li>
                <a href="#" className="navbar-bold">
                  Farm Tours
                </a>
              </li>
              <li>
                <a href="#" className="navbar-bold">
                  Family Recipes
                </a>
              </li>
              <li>
                <a href="#" className="navbar-bold">
                  Candy Apples
                </a>
              </li>
              <li>
                <a href="#" className="navbar-bold">
                  Corporate Information
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              id="navbar-text"
              aria-current="page"
              href="#"
            >
              In Season
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              id="navbar-text"
              aria-current="page"
              href="#"
            >
              Farm Events
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              id="navbar-text"
              aria-current="page"
              href="#"
            >
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              id="navbar-text"
              aria-current="page"
              href="#"
            >
              Shop Store
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <h1>Welcome to Jaswell's Farm!</h1>
  <div className="page-wrapper">
    <div className="flex-container">
      <div className="farm-images">
        <img
          id="large-img"
          style={{ maxWidth: 400 }}
          src={homeImage1}
          alt="Kid with apples"
        />
        <img
          id="small-img"
          style={{ maxWidth: 400 }}
          src={homeImage2}
          alt="Farm image"
        />
      </div>
    </div>
    <div className="section">
      <h2>About the Farm</h2>
      <p>
        Welcome to Jaswell’s Farm located in the heart of “apple valley" in the
        beautiful and historic town of Smithfield, Rhode Island. Jaswell’s Farm
        is the oldest operating apple orchard in Smithfield and currently being
        run by the fourth generation of the Jaswell Family. We typically offer
        pick your own on a variety of products and host special events
        throughout the season. COVID-19 has changed some procedures and
        availability but we are working through guidance and will update info
        soon! Jaswell’s Farm continues to grow and evolve with the ever-changing
        environment.
      </p>
    </div>
    <h2>Apple Picking</h2>
    <p>
      Happy Apple Picking Season! We appreciate you choosing our farm for this
      family fall tradition! While walk-ins are most certainly welcome, we
      recommend making reservations to minimize crowding in the orchard.
    </p>
    <div id="like_button_container" />
    <h2>Make a Reservation</h2>
    <p>
      Before making a reservation below, please read our apple picking
      guidelines{" "}
      <a href="https://www.jaswellsfarm.com/picking-schedule.html">here</a>
    </p>
    

    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label"># of people</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="number"
        value={numPeople}
        onChange={handleNumPeople}
      >
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>
    </FormControl>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date"
          inputFormat="MM/DD/YYYY"
          value={dateTime}
          onChange={handleTimeChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          value={dateTime}
          onChange={handleTimeChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>

      <div>
      <Box textAlign='center'>
        <Button id="reservation-button" variant="outlined" onClick={validTimeDate(dateTime) ? handleDialogOpen : openErr}>
          Make Reservation
        </Button>
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Make Reservation?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to make this reservation?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant="outlined" onClick={handleConfirmClick}>
          Confirm Reservation
        </Button>
        </DialogActions>
      </Dialog>
    </div>

    <Snackbar open={openErrSnackbar} autoHideDuration={6000} onClose={handleErrClose}>
        <Alert onClose={handleErrClose} severity="error" sx={{ width: '100%' }}>
          Sorry, we are not open during the time/day selected!
        </Alert>
      </Snackbar>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Reservation confirmed!
        </Alert>
      </Snackbar>

    <h2>Hours of Operation</h2>
    <table>
      <tbody>
        <tr>
          <th>Monday</th>
          <td>9am to 4pm</td>
        </tr>
        <tr>
          <th>Tuesday</th>
          <td>Closed</td>
        </tr>
        <tr>
          <th>Wednesday to Sunday</th>
          <td>9am to 4pm</td>
        </tr>
      </tbody>
    </table>
  </div>
  <footer className="text-black text-center text-lg-start">
    {/* Grid container */}
    <div className="container p-4">
      {/*Grid row*/}
      <div className="row">
        {/*Grid column*/}
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h3>Have Questions?</h3>
          <p className="social-media">Call us at 401-231-9043</p>
          <h3>Connect with Us!</h3>
          <div className="social-media">
            <a href="#" className="fa fa-facebook" />
            <a href="#" className="fa fa-instagram" />
          </div>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0 social-media">
          <h3>Visit Us!</h3>
          <p id="text-center">
            50 Swan Road
            <br />
            Smithfield, RI 02917
          </p>
          <div className="social-media">
            <img
              id="map-img"
              src={mapImage}
              alt="Jaswell's Farm on map"
            />
          </div>
        </div>
        {/*Grid column*/}
      </div>
      {/*Grid row*/}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      Fake Copyright © 2019 Jaswell's Farm
    </div>
    {/* Copyright */}
  </footer>
  {/* Load React. */}
  {/* Note: when deploying, replace "development.js" with "production.min.js". */}
  {/* Load our React component. */}
</>

  );
}

export default App;
