import React, {useState} from 'react';
import RatingSys from "../../RatingSys/RatingSys";
import {useDispatch} from "react-redux";
import {setAnswer} from "../../../store/action-creators/guests";
import {useNavigate} from "react-router";
import '../forms.css';


const EmptyForm = ({guest}) => {
	const [phone, setPhone] = useState('')
	const [comment, setComment] = useState('')
	const [rating, setRating] = useState(3)
	const [error, setError] = useState(false)
	const [isFilled, setIsFilled] = useState(false)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const validateForm = () => {
		// const reg = new RegExp('^[0-9]{3,10}$')
		// console.log(reg.test(phone))
		if(phone.length < 3 || phone.length > 10 || comment.length < 1){
			setError(true)
			setIsFilled(false)
		}else{
			setError(false)
			setIsFilled(true)
		}
	}

	const validatePhone = (e) =>{
		setPhone(e.target.value)
		console.log(e.target.value)
		validateForm()
	}

	const validateComment = (e) =>{
		setComment(e.target.value)
		console.log(e.target.value)
		validateForm()
	}


	const handleSave = () => {
		if(!error){
			const feedBackData = {
				...guest,
				isAnswer: true,
				phone: phone,
				comment: comment,
				rating: rating
			}
			console.log(feedBackData)
			dispatch(setAnswer(feedBackData))
			navigate('/')
		}
	}

	const handleCancel = () => {
		setPhone('')
		setComment('')
		setRating(3)
		navigate('/')
	}
	return (
		<div>
			<div>
				<span>Name:</span>
				<p>{guest.name}</p>
			</div>
			<RatingSys rating={rating} setRating={setRating}/>
			<div>
				<span>Phone:</span>
				<input type={"text"} value={phone} onChange={e => validatePhone(e)}/>
				{error ? <span>Fill the Form</span>: null}
			</div>
			<div>
				<span>Comment:</span>
				<textarea value={comment} onChange={e => validateComment(e)}/>
			</div>
			{isFilled ? <input className={'btn_input save'} type={"submit"} value={'SAVE'} onClick={() => handleSave()}/>:null}
			<input className={'btn_input delete'} type={"submit"} value={'CANCEL'} onClick={() => handleCancel()}/>
		</div>
	);
};

export default EmptyForm;