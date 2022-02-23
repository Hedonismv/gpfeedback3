import React from 'react';
import './ratingSys.css';

const RatingSys = ({rating, setRating=null, isFilled=false}) => {
	
	return (
		<div className={'rating_block'}>
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					!isFilled ?
						<button
							type="button"
							key={index}
							className={index <= rating ? "on" : "off"}
							onClick={() => setRating(index)}
						>
							<span className="star">&#9733;</span>
						</button>
						:
						<button
							type={"button"}
							key={index}
							className={index <= rating ? "on" : "off"}
						>
							<span className={"star"}>&#9733;</span>
						</button>
				);
			})}
		</div>
	);
};

export default RatingSys;