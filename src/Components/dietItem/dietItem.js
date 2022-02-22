import React from 'react';
import './dietItem.css';
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {setCurrentFeedback} from "../../store/action-creators/guests";

const DietItem = ({personalData}) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleFeedBack = () => {
		dispatch(setCurrentFeedback(personalData))
		navigate(`${personalData.name}`)
	}


	return (
		<tr className={'main_tr'} onClick={() => handleFeedBack()}>
			<td className={personalData.isVegan ? 'vegan' : ''}>
				{personalData.isAnswer ? '✅' : ''} {personalData.name}
			</td>
		</tr>
	);
};

export default DietItem;