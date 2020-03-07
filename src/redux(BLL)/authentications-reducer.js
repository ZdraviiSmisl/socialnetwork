const SET_USER_DATA = 'SET_USER_DATA' /*установить пользовательские данные */

/*ответ с сервера может прийти либо: тыне залогинен,либо данные ниже*/
let initialState = { /*стартовые значения*/
    userId: null,
    email: null,
    login: null,
    /*   isFetching: false */  /*//со старта загрузки нет,запрос загрузка есть.. доделать*/
    isAuth: false /*Изначально данных нет*/
};

const authReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action.data, /*деструктуризация 2х объектов,т.к 2й лежит ниже..лежащие в нём св-ва email,login,id перезатрут свойства в текущем стэйте*/
                isAuth: true
            }/*Пользовательскиеданные пришли*/

        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}}) /*userId,email,login===data в разобранном виде.Так сделано т.к у нас нет строгой типизации,мв не знаем что там в этой data,какого она типа */
export default authReducer;