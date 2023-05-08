import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {

	const [pick, setPick] = useState("")

	const redClass = pick === "red" ? "redGlow" : "red";
	const yellowClass = pick === "yellow" ? "yellowGlow" : "yellow";
	const greenClass = pick === "green" ? "greenGlow" : "green";

	return (
		<div className="d-flex justify-content-center mt-5">
		<div className="traffic-light">
			<div onClick={x => setPick("red")} className={`light red ${redClass}`}></div>
			<div onClick={x => setPick("yellow")} className={`light yellow ${yellowClass}`}></div>
			<div onClick={x => setPick("green")} className={`light green ${greenClass}`}></div>
		</div>
	</div>
	);
};

export default Home;
