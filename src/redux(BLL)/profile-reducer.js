import { profileApi, userApi} from "../api(DAL)/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'Hi,how are you?', likesCount: 15},
    {id: 2, message: 'Facebook sucks', likesCount: 20},
    {id: 3, message: 'Blabla', likesCount: 24},
    {id: 4, message: 'Face Palm', likesCount: 16}

  ],
  profile: null,
  status: ''

}
const profileReducer = (state = initialState, action) => {

  switch (action.type) {


    case ADD_POST:

      let newPost = {
        id: 5,
        message: action.NewPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      }



    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state;
  }
}


export const addPost = (NewPostText) => ({type: ADD_POST,NewPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUser_Profile = (userId) => {
  return (dispatch) => {
    userApi.getUserProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    })
  }
}
export const getUser_Status = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then(response => {
      dispatch(setUserStatus(response.data));
    })
  }
}
export const update_User_Status = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then(response => {
      if (response.data.resultCode === 0)
        dispatch(setUserStatus(status));
    })
  }
}

export default profileReducer;