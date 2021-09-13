import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClientModal from './ClientModal'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import './mv.css'
const useStyles = makeStyles({
  root: {
    minWidth: 450,
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
      <h5 class="card-title">{group_name.title}</h5>
        <hr/>
        <p>Group Created on: {group_name.created_on}</p>
        <p>Number of Accounts: {group_name.number}</p>
        <p class="card-text">Click View to go on Group Details</p>
        
      </CardContent>
      <CardActions>
       
      
      <button type="button" class="btn btn-primary"
	onClick={handleOpen}>
		View
	</button>
  <button type="button" class="btn btn-success"
	onClick={handleOpen}>
		Report
	</button>
  
  

      <Modal
		onClose={handleClose}
		open={open}
		style={{
		
	
		width: '80%',
   
		margin: 'auto',
   
		}}
	>
		<div class="card">
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">

  
 
  <ul className="navbar-nav">
    <li className=" active nav-item">
      <a className="nav-link" href="#"></a>
    </li>

    <li className=" active nav-item">
      <a className="nav-link" href="#"></a>
    </li>
   
    
   
   

  </ul>
  <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Services</button>
  <button type="button" class="btn btn-primary">Contact</button>
  <button type="button" class="btn btn-primary">Help</button>
  
</div>
<button type="button" class="btn btn-warning">Download Report</button>
</nav>
<div class="alert alert-primary" role="alert">

<center><h4>{group_name.title} Accounts</h4></center>  
</div>
    <table class="table" >
    <thead>
      <tr>
        <th>Account</th>
        <th>Account Number</th>
        <th>Currency</th>
        <th>Account Balance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Saving</td>
        <td>879867897</td>
        <td>{group_name.currency_type}</td>
        <td>1200</td>
      </tr>
      <tr>
        <td>Saving</td>
        <td>4878967</td>
        <td>{group_name.currency_type}</td>
        <td>1200</td>
      </tr>
      <tr>
        <td>Salary Account</td>
        <td>44097820</td>
        <td>{group_name.currency_type}</td>
        <td>3400</td>
      </tr>
      <tr>
        <td>Fixed Deposit</td>
        <td>385793857</td>
        <td>{group_name.currency_type}</td>
        <td>5400</td>
      </tr>
    </tbody>
  </table>
 
  <div class="alert alert-primary" role="alert">
  <center><strong>Other Information</strong></center>
</div>
    <table class="table" >
    <thead>
      <tr>
        <th>Total Balance</th>
        <th>Debit Interest Rate</th>
        <th>Credit Interest Rate</th>
        <th>Today's Settlement</th>
        <th>Current Settlement</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>11,200</td>
        <td>5%</td>
        <td>10%</td>
        <td>200</td>
        <td>800</td>
      </tr>
    
    </tbody>
  </table>
    </div>
    
    
	</Modal>
    
      </CardActions>
    </Card>
    
    
  );
}


