import './App.css';
import DisplayHeader from './components/atm-header';
import DisplayScreen from './components/atm-screen';
import { Grid2 } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  container: {
    background: "red",
    maxHeight: "100%",
  },
  item: {
    backgroundColor: "red",
    height: "100%",
    width: "100%"
  },
  // button: {
  //   backgroundColor: theme.palette.primary.main,
  //   color: theme.palette.primary.contrastText,
  //   '&:hover': {
  //     backgroundColor: theme.palette.primary.dark,
  //   },
  // },
}));

function App() {
  const { classes } = useStyles();

  return (
    <Grid2 style={{justifyItems: "center", height: "100%"}}>
      <Grid2 style={{backgroundColor: "green",  padding: 0, alignContent: "center", justifyItems: "center"}}>
          <DisplayHeader />
          <DisplayScreen />
      </Grid2>
    </Grid2>
  );
}

export default App;
