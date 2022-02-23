
export const filterNonEeaters = (guests) => {
	if (guests){
		return guests.filter((guest) => guest.eatsPizza === false)
	}
}

export const filtyTest = (guests) => {
	const guestObj =  {eaters: [], noneEaters: []}
	guests.forEach(guest => {
		if(guest.eatsPizza){
			guestObj.eaters.push(guest)
		}else{
			guestObj.noneEaters.push(guest)
		}
	})
	return guestObj
}


//generate request link to dietBook API
export const generateLink = (splited) => {
	let link = `https://gp-js-test.herokuapp.com/pizza/world-diets-book/`;
	for (let i = 0; i < splited.length; i++) {
		if(i === splited.length - 1){
			link = link + `${splited[i][0]}%20${splited[i][1]}`;
		} else {
			link = link + `${splited[i][0]}%20${splited[i][1]},`;
		}
	}
	return link;
};