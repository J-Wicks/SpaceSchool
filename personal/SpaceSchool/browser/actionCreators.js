import axios from 'axios';

export const receiveSchools = schools => ({
    type: 'RECEIVE_SCHOOLS',
    schools
});

export const receiveStudents = students => ({
    type: 'RECEIVE_STUDENTS',
    students
});

export const selectStudent = student =>({
	type: 'SELECT_STUDENT',
	student
})

export const selectSchool = school =>({
	type: 'SELECT_SCHOOL',
	school
})

export const updateSchool = school =>({
	type: 'UPDATE_SCHOOL',
	school
})

export const getStudentById = studentId => {
	return dispatch => {
		axios.get(`/api/students/${studentId}`)
			.then(response => {
				dispatch(selectStudent(response.data))
			})
	}
}

export const getSchoolById = schoolId => {
	return dispatch => {
		axios.get(`/api/schools/${schoolId}`)
			.then(response => {
				dispatch(selectSchool(response.data))
			})
	}
}

export const changeSchool = (student, school)=> {
	return dispatch => {
		axios({
			method: 'post',
			url: `/api/students/${this.props.student.id}`,
			data: {id: event.target.value}
		})
	}
}

// export const getAlbumById = albumId => {
//   return dispatch => {
//     axios.get(`/api/albums/${albumId}`)
//       .then(response => {
//         dispatch(receiveAlbum(response.data));
//       });
//   };
