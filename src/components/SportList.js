import { useState, useEffect } from "react";
import SportItem from "./SportItem";
import { BASE_URL } from "../constants/api";

function SportList() {
	const [sports, setSports] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(BASE_URL);

				if (response.ok) {
					const json = await response.json();
					console.log(json);
					setSports(json);
				} else {
					setError("An error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
		<div className="sports">
			{sports.map(function (sport) {
				const { id, title, published } = sport;
				return <SportItem key={id} id={id} title={title.rendered} published={published} />;
			})}
		</div>
	);
}

export default SportList;