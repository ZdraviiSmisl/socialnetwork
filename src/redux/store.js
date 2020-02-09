import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {

    getState() {

        return this._state;
    },


    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', likesCount: 15},
                {id: 2, message: 'Facebook sucks', likesCount: 20},
                {id: 3, message: 'Blabla', likesCount: 24},
                {id: 4, message: 'Face Palm', likesCount: 16}

            ],
            newPostText: 'I don"t care about that'
        },

        dialogsPage: {
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
            newMessageText: 'You will never see!'
        },
        sidebarPage: {
            friends:
                [
                    {id: 1, name: 'Vadim'},
                    {id: 2, name: 'Misha'},
                    {id: 3, name: 'Gregory'}

                ]


        }
    },

    _callSubscriber() {    // ранее  rerenderEntireTree
        console.log('nothing interesting');
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage,action);
        this._callSubscriber(this._state);
    },

}


    window.store = store;

    export default store;