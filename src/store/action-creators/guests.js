import axios from "axios";

export const SET_GUESTS = "SET_GUESTS"
export const SET_NONE_EATERS = "SET_NONE_EATERS"
export const SET_DIET = "SET_DIET"
export const SET_CURRENT_FEEDBACK = "SET_CURRENT_FEEDBACK"
export const SET_ANSWER = "SET_ANSWER"


export function fetchTestGuest(){
	return async dispatch => {
		try{
			const response = await axios.get("https://gp-js-test.herokuapp.com/pizza/guests")
			dispatch(setGuests(response.data.party))
			console.log(response.data.party)
		}catch (e) {
			console.log(e)
		}
	}
}

export function fetchDiet(dietLink){
	return async dispatch => {
		try {
			const response = await axios.get(dietLink)
			const newObj = response.data.diet.map(obj => {
				return {...obj, isAnswer: false}
			})
			console.log(newObj)
			dispatch(setDiet(newObj))
		}catch (e) {
			console.log(e)
		}
	}
}

export const setAnswer = (name) => ({type: SET_ANSWER, payload: name})
export const setCurrentFeedback = (eater) => ({type: SET_CURRENT_FEEDBACK, payload: eater})
export const setNoneEaters = (noneEaters) => ({type: SET_NONE_EATERS, payload: noneEaters})
export const setDiet = (diet) => ({type: SET_DIET, payload: diet})
export const setGuests = (guests) => ({type: SET_GUESTS, payload: guests})

