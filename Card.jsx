import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
      <h5 class="card-title">Group 1</h5>
        <hr/>
        <p>Group Created on:</p>
        <p>Number of Accounts:</p>
        <p class="card-text">Click View to go on Group Details</p>
        
      </CardContent>
      <CardActions>
      <a href="#" class="btn btn-primary">View Group Details</a>
      <a href="#" class="btn btn-success">Report</a>
      </CardActions>
    </Card>
  );
}
