import { makeStyles } from "@material-ui/core/styles";
import Background from "../../assets/hero-img.jpeg";

export default makeStyles((theme) => ({
	hero: {
		width: "100%",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundImage: `url(${Background})`,
		backgroundPosition: "50% 50%",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		margin: "0 !important",
		padding: "0 !important",
	},
	title: {
		fontSize: "10vw",
	},
}));
