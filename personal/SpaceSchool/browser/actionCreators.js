// import axios from 'axios';

export const receiveSchools = schools => ({
    type: 'RECEIVE_SCHOOLS',
    schools
});

export const receiveStudents = students => ({
    type: 'RECEIVE_STUDENTS',
    students
});

// export const getAlbumById = albumId => {
//   return dispatch => {
//     axios.get(`/api/albums/${albumId}`)
//       .then(response => {
//         dispatch(receiveAlbum(response.data));
//       });
//   };
