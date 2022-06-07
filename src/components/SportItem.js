import { Link } from "react-router-dom";

function SportItem({ id, title }) { 
	return (
		<div className="call">
		<Link to={`/detail/${id}`}>
			<h5>{title}</h5>
			<p>{id}</p>
		</Link>
		</div>
	);
}


export default SportItem;
