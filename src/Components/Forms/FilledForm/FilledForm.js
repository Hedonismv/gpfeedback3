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
		console.log(feedBackData)
		dispatch(setAnswer(feedBackData))
		dispatch(setCurrentFeedback(feedBackData))
	}

	return (
		<div>
			<div>
				<span>Name:</span>
				<p>{selectedGuest.name}</p>
			</div>
			<RatingSys rating={selectedGuest.rating} isFilled={true}/>
			<div>
				<span>Phone:</span>
				<p>{selectedGuest.phone}</p>
			</div>
			<div>
				<span>Comment:</span>
				<p>{selectedGuest.comment}</p>
			</div>
			<input className={'btn_input delete'} type={"submit"} value={'DELETE'} onClick={() => handleDelete()}/>
			<input className={'btn_input save'} type={"submit"} value={'BACK'} onClick={() => navigate('/')}/>

		</div>
	);
};

export default FilledForm;