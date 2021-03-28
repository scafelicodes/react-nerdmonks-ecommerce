import React from "react";
import useStyles from "./styles";

const HeroSection = () => {
	const classes = useStyles();

	return (
		<div className={classes.hero}>
			<div>
				<h1 className={classes.title}>NERDMONKS</h1>
			</div>
		</div>
	);
};

export default HeroSection;
