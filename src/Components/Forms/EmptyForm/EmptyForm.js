import React, {useState} from 'react';
import RatingSys from "../../RatingSys/RatingSys";
import {useDispatch} from "react-redux";
import {setAnswer} from "../../../store/action-creators/guests";
import {useNavigate} from "react-router";
import '../forms.css';
import {useForm} from "react-hook-form";


const EmptyForm = ({guest}) => {
	const [rating, setRating] = useState(3)

	const {resetField, register, handleSubmit, formState: { errors, isValid } } = useForm({
		mode: 'onChange'
	});

	const onSubmit = data => {
		const feedBackData = {
			...guest,
			isAnswer: true,
			phone: data.phone,
			comment: data.comment,
			rating: rating
		}
		dispatch(setAnswer(feedBackData))
		navigate('/')
	}


	const dispatch = useDispatch()
	const navigate = useNavigate()


	const handleCancel = () => {
		resetField('phone')
		resetField('comment')
		setRating(3)
		navigate('/')
	}
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className={'empty_form'}>
				<div className={'form_block'}>
					<span className={'label'}>Name:</span>
					<p>{guest.name}</p>
				</div>

				<RatingSys rating={rating} setRating={setRating}/>

				<div className={'form_block'}>
					<span className={'label'}>Phone:</span>
					<input type={'text'} className={'form_input'} placeholder={'enter phone'} {...register("phone", {pattern: /^[0-9\s+()]*$/, required: true, maxLength: 10, minLength: 3})} />
					{errors.phone && errors.phone.type === "required" && <span className={'error'}>This is required</span>}
					{errors.phone && errors.phone.type === "pattern" && <span className={'error'}>Nums, +,space, () only</span>}
					{errors.phone && errors.phone.type === "maxLength" && <span className={'error'}>10 chars max length</span>}
					{errors.phone && errors.phone.type === "minLength" && <span className={'error'}>3 chars min length</span>}
				</div>

				<div className={'form_block'}>
					<span className={'label'}>Comment:</span>
					<textarea placeholder={'Enter your comment'} {...register("comment", { required: true, maxLength: 256})} />
					{errors.comment && errors.comment.type === "required" && <span className={'error'}>This is required</span>}
					{errors.comment && errors.comment.type === "maxLength" && <span className={'error'}>256 chars max length</span>}
				</div>


				{isValid && <input className={'btn_input save'} value={'SAVE'} type="submit" />}
				<input className={'btn_input cancel'} type={"submit"} value={'CANCEL'} onClick={() => handleCancel()}/>
			</form>
		</div>
	);
};

export default EmptyForm;