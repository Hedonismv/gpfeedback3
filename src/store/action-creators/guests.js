import axios from "axios";

export const SET_GUESTS = "SET_GUESTS"
export const SET_NONE_EATERS = "SET_NONE_EATERS"
export const SET_DIET = "SET_DIET"
export const SET_CURRENT_FEEDBACK = "SET_CURRENT_FEEDBACK"
export const SET_ANSWER = "SET_ANSWER"
export const SET_LOCAL_DATA = "SET_LOCAL_DATA"


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

export const setLocalData = (allData) => ({type: SET_LOCAL_DATA, payload: allData})

export const setAnswer = (selectedUsrData) => {
	const localDiet = JSON.parse(localStorage.getItem('localDiets'))
	localStorage.removeItem('localDiets')
	const filteredDiet = localDiet.filter(a => a.name !== selectedUsrData.name)
	const newLocalDiet = [
		...filteredDiet,
		selectedUsrData
	]
	localStorage.setItem('localDiets', JSON.stringify(newLocalDiet))
	return 	{type: SET_ANSWER, payload: selectedUsrData}
}
export const setCurrentFeedback = (eater) => ({type: SET_CURRENT_FEEDBACK, payload: eater})


export const setNoneEaters = (noneEaters) => {
	localStorage.setItem('localNoneEaters', JSON.stringify(noneEaters))
	return {type: SET_NONE_EATERS, payload: noneEaters}
}


export const setDiet = (diet) => {
	localStorage.setItem('localDiets', JSON.stringify(diet))
	return {type: SET_DIET, payload: diet}
}

export const setGuests = (guests) => {
	localStorage.setItem('localGuests', JSON.stringify(guests))
	return {type: SET_GUESTS, payload: guests}
}

