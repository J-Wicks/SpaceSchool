

const initialState = {
	selectedPlanet: 'Earth',
	schools: [],
	students: []}

export default function rootReducer (state = initialState, action) {

	switch(action.type){
		case "RECEIVE_SCHOOLS":
			return Object.assign({}, state, {schools: action.schools})

		case 'RECEIVE_STUDENTS':
			return Object.assign({}, state, {students: action.students})

		default:
		return state
	}
}