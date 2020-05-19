const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [{id: 1, name: 'Evgen'},
        {id: 2, name: 'Jora'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Ulia'},
        {id: 5, name: 'Katia'},
        {id: 6, name: 'Vasia'}
    ],
    messages: [
        {id: 1, message: 'It is so terrible'},
        {id: 2, message: 'Where am i?'},
        {id: 3, message: 'What happens here?'},
        {id: 4, message: 'Where is my clothes?'},
        {id: 5, message: 'I kill this bastard'},
        {id: 6, message: 'O no...my car'},
    ],

};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageText;


            return {
                ...state,
                messages: [...state.messages, {id: 7, message: newMessage}]
            };


        default:
            return state;
    }

}

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE,newMessageText})

export default dialogsReducer;