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
				{part ? `Part: ${data.parts[part].name}` : "Part List"}
			</h1>
			<div>
				<ul class={style.part_list}>
				{data.parts.map((part, i) => <li>
						<Link class={style.part_link} href={`/rat-parts-app/parts/${i}`}>{part.name}</Link>
					</li>)}
				</ul>
			</div>
		</div>
	);
}

export default Parts;
