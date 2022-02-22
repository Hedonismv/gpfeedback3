import {SET_ANSWER, SET_CURRENT_FEEDBACK, SET_DIET, SET_GUESTS, SET_NONE_EATERS} from "../action-creators/guests";

const initialState = {
	diets: [],
	noneEaters: [],
	guests: [],
	selectedGuest: []
}


export const guestReducer = (state = initialState, action) => {
	switch (action.type){
		case SET_GUESTS:
			return {
				...state,
				guests: action.payload
			}
		case SET_NONE_EATERS:
			return {
				...state,
				noneEaters: action.payload
			}
		case SET_DIET:
			return {
				...state,
				diets: action.payload
			}
		case SET_CURRENT_FEEDBACK:
			return {
				...state,
				selectedGuest: action.payload
			}
		case SET_ANSWER:
			const allDiet = state.diets.filter(a => a.name !== action.payload.name)
			return {
				...state,
				diets: [...allDiet, action.payload]
			}
		default:
			return state
	}
}