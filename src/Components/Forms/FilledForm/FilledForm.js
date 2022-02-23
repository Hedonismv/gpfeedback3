import React from 'react';
import RatingSys from "../../RatingSys/RatingSys";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import '../forms.css';
import {setAnswer, setCurrentFeedback} from "../../../store/action-creators/guests";

const FilledForm = () => {

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const {selectedGuest} = useSelector(state => state.guest)

	const handleDelete = () => {
		const feedBackData = {
			name: selectedGuest.name,
			isVegan: selectedGuest.isVegan,
			isAnswer: false,
		}
		dispatch(setAnswer(feedBackData))
		dispatch(setCurrentFeedback(feedBackData))
	}

	return (
		<div>
			<div className={'form_block'}>
				<span className={'label'}>Name:</span>
				<p>{selectedGuest.name}</p>
			</div>
			<RatingSys rating={selectedGuest.rating} isFilled={true}/>
			<div className={'form_block'}>
				<span className={'label'}>Phone:</span>
				<p>{selectedGuest.phone}</p>
			</div>
			<div className={'form_block'}>
				<span className={'label'}>Comment:</span>
				<textarea className={'filled_textarea'} value={selectedGuest.comment} readOnly={true}/>
			</div>
			<div className={'form_block_btns'}>
				<input className={'btn_input delete'} type={"submit"} value={'DELETE'} onClick={() => handleDelete()}/>
				<input className={'btn_input cancel'} type={"submit"} value={'BACK'} onClick={() => navigate('/')}/>
			</div>
		</div>
	);
};

export default FilledForm;