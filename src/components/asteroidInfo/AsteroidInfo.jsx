import React from 'react';
import { Redirect } from "react-router-dom";
import { Container, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import styles from '../../styles/asteroidInfo';


const AsteroidInfo = ({data, classes, onReturn}) => {
  if(!data) return <Redirect to="/"/>
  return (
    <Container className={classes.main}>
			<div className={`${classes.info}`}>
			<h1 className={`${classes.name}`}>{data.name}</h1>
			<div className={`${classes.link}`}>
				<a href={data.nasa_jpl_url}>{data.nasa_jpl_url}</a>
			</div>
	<div className={`${classes.line}`} style={{color: data.is_potentially_hazardous_asteroid ? "red" : "green"}}> {data.is_potentially_hazardous_asteroid ? "is hazard" : "not hazard"}</div>

			<Button onClick={onReturn} variant="outlined" color="primary" className={classes.button}>Return</Button>
			</div>
    </Container>
  );
}

export default withStyles(styles)(AsteroidInfo);
