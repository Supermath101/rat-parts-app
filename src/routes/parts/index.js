import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import style from './style.css';
import data from "../../data/data"
import { Link } from 'preact-router/match';

// Note: `parts` comes from the URL, courtesy of our router
const Parts = ({ part }) => {
	
	return (
        <div class={style.parts}>
			<h1>
				{/* Display current part if a part is selected, otherwise display `part list`. */}
				{part ? `Part: ${data.parts[part].name}` : "Part List"}
			</h1>
			<div>
				<ul class={style.part_list}>
					{// The data object is simply an imported js file from another GitHub repo. It contains the raw data for each part.
					 // Here we "map" each part from the `parts` object within the dataset into a <li> element with a preact-router <Link> inside of it.
					data.parts.map((part, i) => <li>
						<Link class={style.part_link} href={`/parts/${i}`}>{part.name}</Link>
					</li>)}
				</ul>
			</div>
		</div>
	);
}

export default Parts;
