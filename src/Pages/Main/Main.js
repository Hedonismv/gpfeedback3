import React from 'react';
import './main.css';
import DietItem from "../../Components/dietItem/dietItem";

const Main = ({diet, noneEaters}) => {
	return (
		<div className={'main_container'}>
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
					<tr>
						<td>Total guests: 42</td>
					</tr>
				</tfoot>
			</table>

		</div>
	);
};

export default Main;