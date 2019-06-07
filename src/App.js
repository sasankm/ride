import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {GoogleMaps} from './googleMaps';
import ReactDependentScript from 'react-dependent-script';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: '600px',
    height: '450px'
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
});


class App extends Component{

  render(){
     const key = process.env.REACT_APP_MAP_API_KEY;
    const { classes } = this.props;
    return(
      <div>
        <h3 style={{textAlign: 'center'}}>Nevada State Parks using GoogleMaps</h3>
        <Grid style={{paddingTop: '40px'}}container justify="center">
          <Paper className={classes.root} elevation={2}>
          <ReactDependentScript 
                  loadingComponent={<div>jQuery is loading...</div>}
                  scripts={[`http://maps.googleapis.com/maps/api/js?key=${key}&libraries=geometry,places,visualization`]}
                  >
              <GoogleMaps />
            </ReactDependentScript>
          </Paper>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(App);
