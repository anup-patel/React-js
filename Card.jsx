import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#0275d8',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    // minWidth: 700,
   
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});
const useStyles = makeStyles({
  root: {
    minWidth: 450,
  },
  table: {
    minWidth: 650,
  },
  bullet: {
    display: 'inline-block',
    margin: '20px',
    padding: '10px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
let id1=0
function createData(type, account, currency, balance) {
  id1+=1
  return {type, account, currency, balance };
}

const rows = [
  createData('Saving', 67498674, 'EU', 1200),
  createData('Salary', 4656567, 'EU', 1200),
  createData('Fixed', 9886875, 'EU', 3400),
  createData('Current', 3424325, 'EU', 5400),
];
let id2=0
function createDataother(total_balance, debit, credit, today,current) {
  id2+=1
  return {total_balance, debit, credit, today,current};
}

const other = [
  createDataother('11,200', '5%', '10%', '200','800'),

];

export default function SimpleCard(group_name) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };
  
  
  return (
   

    <Card className={classes.root}>
      <CardContent>
      <h5 style={{fontSize:'20px',margin:'5px' }}>{group_name.title}</h5>
        <hr/>
        <p>Group Created on: {group_name.created_on}</p>
        <p>Number of Accounts: {group_name.number}</p>
        <p class="card-text">Click View to go on Group Details</p>
        
      </CardContent>
      <CardActions>
       
      
      <Button variant="contained" color="secondary" style={{backgroundColor:'#0275d8',color:'white' }}
	onClick={handleOpen}>
		View
	</Button>
  <Button variant="contained" style={{backgroundColor:'#1b5e2d',color:'white' }}
	onClick={handleOpen}>
		Report
	</Button>
  
  

      <Modal
		onClose={handleClose}
		open={open}
		style={{
		
	
		width: '70%',
   
		margin: 'auto',
  
		}}
	>
		<div class="card">
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
  <Button>Services</Button>
  <Button>Contact</Button>
  <Button>Help</Button>
  <Button>Download Report</Button>
</ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
<div>
<div style={{
		backgroundColor:"#cde7fe",
    alignItems: 'center',
    padding: '15px',
    justifyContent: 'center',
    fontSize:'18px',
    borderRadius:'0',
    alignItems: 'center',
    textAlign: 'center',
		}}>
<strong>{group_name.title} Accounts</strong>
</div>
  
</div>

<TableContainer component={Paper}  style={{
		
    alignItems: 'center',
    justifyContent: 'center',

borderRadius:'0',
  
		}}>
         <Table className={classes.table} aria-label="simple table" style={{
		
    alignItems: 'center',
    justifyContent: 'center',
  
borderRadius:'0',

  
		}} >
     
        <TableHead>
          <TableRow>
            <CustomTableCell align="center">Account Type</CustomTableCell>
            <CustomTableCell align="center">Account Number</CustomTableCell>
            <CustomTableCell align="center">Currency</CustomTableCell>
            <CustomTableCell align="center">Account Balance</CustomTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id1}>
              <TableCell component="th" align="center" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="center">{row.account}</TableCell>
              <TableCell align="center">{group_name.currency_type}</TableCell>
              <TableCell align="center">{row.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
   
    <div style={{
		backgroundColor:"#cde7fe",
    alignItems: 'center',
    padding: '15px',
    justifyContent: 'center',
    fontSize:'18px',
    borderRadius:'0',
    alignItems: 'center',
    textAlign: 'center',
		}}>
        <strong>Other Information</strong>
      </div>
    


<TableContainer component={Paper}  style={{
		
    alignItems: 'center',
    justifyContent: 'center',
  
borderRadius:'0',
  
		}}>
      <Table className={classes.table} aria-label="simple table" style={{
		
    alignItems: 'center',
    justifyContent: 'center',
  
borderRadius:'0',

  
		}} >
    
        <TableHead>
          <TableRow>
          <CustomTableCell align="center">Total Balance</CustomTableCell>
            <CustomTableCell align="center">Debit Interest Rate</CustomTableCell>
            <CustomTableCell align="center">Credit Interest Rate</CustomTableCell>
            <CustomTableCell align="center">Today's Settlement</CustomTableCell>
            <CustomTableCell align="center">Current Settlement</CustomTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {other.map((other) => (
            <TableRow key={other.id2}>
              <TableCell component="th" scope="other" align="center">
              {other.total_balance}
              </TableCell>
              
              <TableCell align="center">{other.debit}</TableCell>
              <TableCell align="center">{other.credit}</TableCell>
              <TableCell align="center">{other.today}</TableCell>
              <TableCell align="center">{other.current}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    
    
	</Modal>
    
      </CardActions>
    </Card>
    
    
  );
}

