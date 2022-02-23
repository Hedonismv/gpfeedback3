import React from 'react';
import './main.css';
import DietItem from "../../Components/dietItem/dietItem";

const Main = ({diet, noneEaters, clear, isLoaded}) => {

	const clearHandler = () => {
		clear(false)
		localStorage.clear()
	}

	return (
		<div className={'main_container'}>
			<input type={"submit"} className={'clear_btn'} value={'Clear LocalStorage'} onClick={() => clearHandler()}/>
			{isLoaded
				?
				<table>
					<thead>
					<tr>
						<td>Guest Name</td>
					</tr>
					</thead>
					<tbody>
					{noneEaters.map(nEater =>
						<tr key={nEater.name} className={'none-eater_tr'}>
							<td>{nEater.name}</td>
						</tr>
					)}
					{diet.map(dietGuest =>
						<DietItem key={dietGuest.name} personalData={dietGuest}/>
					)}
					</tbody>
					<tfoot>
					</tfoot>
				</table>
				:
				<h1>Loading...</h1>
			}

		</div>
	);
};

export default Main;