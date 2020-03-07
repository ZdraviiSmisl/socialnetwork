
let initialState={
    friends:
        [
            {id: 1, name: 'Vadim'},
            {id: 2, name: 'Misha'},
            {id: 3, name: 'Gregory'}

        ]
}
const sidebarReducer=(state=initialState,action)=> {
    return state;
}

export default sidebarReducer;