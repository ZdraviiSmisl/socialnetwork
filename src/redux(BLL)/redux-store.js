import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./authentications-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    authentication: authReducer
})

let store = createStore(reducers);
window.store = store;//привязали наш store к объекту window,что бы  в любой момент посмотреть наш стэйт с помощью коммнды getState()
export default store;