import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import style from './style.css';

// Note: `parts` comes from the URL, courtesy of our router
const Parts = ({ part }) => {
	
	return (
		<div class={style.parts}>
			<h1>
				{part ? `Part: ${part}` : "Part List"}
			</h1>
			{/* TODO: add specific part information and general part list. */}
		</div>
	);
}

export default Parts;
