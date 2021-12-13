import "./Card.styles.css";
const Card = ({ randomImg }) => {
	console.log(randomImg);
	return (
		<div className="card">
			<img src={randomImg.src} alt={randomImg.alt} />
			<h3>{randomImg.title}</h3>
			<p>{randomImg.desc}</p>
			<a href={randomImg.links[0]}>Share</a>
			<a href={randomImg.links[1]}>Explore</a>
		</div>
	);
};
export default Card;
