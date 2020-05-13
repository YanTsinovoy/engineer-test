import React, {useState} from 'react';
import { Container, Input, Button, ButtonGroup } from '@material-ui/core';
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from '../../styles/mainInfo';

const MainInfo = ({pending, error, data, onRandom, onSubmit,onChange, classes }) => {
	const [value, setValue] = useState("")

	const onChangeHandler = e => {
		const {value: val } = e.target;
		setValue(val)
		onChange()
	}

	const onSubmitHandler = () => {
		onSubmit(value)
	}
	if(data) return <Redirect to="/asteroid-info" />

  return (
    <Container className={classes.main}>
			<div className={`${classes.form}`} >
				<Input placeholder="Enter Asteroid ID"
						value={value} 
						onChange={onChangeHandler}
						error={error}
						className={classes.input}/>
					<ButtonGroup>
						<Button disabled={!value} onClick={onSubmitHandler} variant="contained" color="primary">Submit</Button>
						<Button onClick={onRandom} variant="outlined" color="primary">Random Asteroid</Button>
					</ButtonGroup>
			</div>
    </Container>
  );
}

export default withStyles(styles)(MainInfo);
