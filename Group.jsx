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
  <Grid item><Card title='Group 1' number='4' created_on='2021-12-03' currency_type='EUR'/></Grid>
  <Grid item><Card title='Group 2' number='4' created_on='2021-12-13'  currency_type='INR'/></Grid>
  <Grid item><Card title='Group 3' number='4' created_on='2021-12-15'  currency_type='AUS'/></Grid>
  
</Grid>
 </>
  );
}

export default Group;
