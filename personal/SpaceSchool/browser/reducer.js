

const initialState = {
	selectedSchool: {},
	selectedStudent: {},
	schools: [],
	students: []}

export default function rootReducer (state = initialState, action) {

	switch(action.type){
		case "SELECT_STUDENT":
			return Object.assign({}, state, {selectedStudent: action.student})

		case "RECEIVE_SCHOOLS":
			return Object.assign({}, state, {schools: action.schools})

		case 'RECEIVE_STUDENTS':
			return Object.assign({}, state, {students: action.students})

		case 'SELECT_SCHOOL':
			return Object.assign({}, state, {selectedSchool: action.school})
		
		default:
		return state
	}
}