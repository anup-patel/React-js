import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';

import {Grid} from '@material-ui/core/'
import Card from './Card'
import './App.css';


const useStyles = makeStyles({
 GridContainer:{
   paddingLeft:'50px',
   paddingRight:'50px'
 }
});


function Group() {
  const classes=useStyles();
  return (
    <>
  
<br/>
  <br/>
   <Grid container spacing={4} className={classes.GridContainer}>
  <Grid item><Card title='Group 1' number='4' created_on='2021-12-03' /></Grid>
  <Grid item><Card title='Group 2' number='4' created_on='2021-12-13' /></Grid>
  <Grid item><Card title='Group 3' number='4' created_on='2021-12-15' /></Grid>
  
</Grid>
 </>
  );
}

export default Group;
