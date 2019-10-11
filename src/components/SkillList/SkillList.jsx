import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	skillTag: {
		display: 'inline-block',
		margin: '2px',
		padding: '5px 10px',
		color: 'white',
		backgroundColor: '#505d68'
	}
}));

function SkillList(props) {
	const classes = useStyles();
	return (
		<>
			{props.skillList && props.skillList.map((skill) => (
				<Typography key={skill.id} variant='body2' className={classes.skillTag}>
					{skill.tag}
				</Typography>
			))}
		</>
	);
}

export default SkillList;
