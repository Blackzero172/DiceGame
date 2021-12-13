import React from "react";
import Card from "./Card.components";
const imgs = [
	{
		src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		alt: "A Waterfall",
		title: "Multnomah Falls",
		desc: "A Beautiful Waterfall in Canada",
		links: ["#", "#"],
	},
	{
		src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		alt: "A Totemic Location In The UK",
		title: "A Firepit in the UK",
		desc: "A Beautiful Hill found in the UK",
		links: ["#", "#"],
	},
	{
		src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		alt: "National Park Image",
		title: "National Park in US",
		desc: "The Beautiful National Park",
		links: ["#", "#"],
	},
];
const getRandomImg = () => {
	return imgs[Math.floor(Math.random() * imgs.length)];
};
// const Exer4_2 = () => {
// 	return (
// 		<div style={{ display: "flex", width: "100%" }}>
// 			<Card randomImg={getRandomImg()}></Card>
// 			<Card randomImg={getRandomImg()}></Card>
// 			<Card randomImg={getRandomImg()}></Card>
// 		</div>
// 	);
// };
class Exer4_2 extends React.Component {
	render() {
		return (
			<div style={{ display: "flex", width: "100%" }}>
				<Card randomImg={getRandomImg()}></Card>
				<Card randomImg={getRandomImg()}></Card>
				<Card randomImg={getRandomImg()}></Card>
			</div>
		);
	}
}
export default Exer4_2;
