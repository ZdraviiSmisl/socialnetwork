const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';  /*переключи значение из свойства isFetching*/
const TOGGLE_IS_FOLLOWING_STATUS = 'TOGGLE_IS_FOLLOWING_STATUS';  /*переключи значение из свойства  buttonFollowingStatus*/


let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    buttonFollowingStatus: [] /*когда идёт подписка id пользователя закидывается в массив,отписка-убирается из массива*/
};

const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            let copyState = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
            return copyState;


        case UNFOLLOW:
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;

                })
            };
            return stateCopy;

        case SET_USERS:

            return {
                ...state, users: action.users

            };

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage

            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count

            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_STATUS:
            return {
                ...state,  buttonFollowingStatus: action.isFetching?
                    [...state.buttonFollowingStatus,action.userId]:/*если подписка(isFetching=true),мы добавляем в копию массива пользователя*/
                    [state.buttonFollowingStatus.filter(id=>id!=action.userId)] /*если отписка(isFetching=false  ) фильтруем  копию массива от него*/

            };
        default:
            return state;
    }

};

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingStatus=(isFetching,userId)=>({type: TOGGLE_IS_FOLLOWING_STATUS, isFetching,userId})
export default usersReducer;