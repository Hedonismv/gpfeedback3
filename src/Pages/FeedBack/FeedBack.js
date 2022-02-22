import React from 'react';
import {useSelector} from "react-redux";
import './feedBack.css';
import EmptyForm from "../../Components/Forms/EmptyForm/EmptyForm";
import FilledForm from "../../Components/Forms/FilledForm/FilledForm";

const FeedBack = () => {

	const {selectedGuest} = useSelector(state => state.guest)

	return (
		<div className={"feedback_container"}>
			{selectedGuest.isAnswer ?
				<FilledForm/>
				:
				<EmptyForm guest={selectedGuest}/>
			}
		</div>
	);
};

export default FeedBack;