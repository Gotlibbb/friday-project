type InitialStateType = {

}

let initialState: InitialStateType = {

}

export type DispatchActionTypeLogin =
    | ReturnType<typeof someActionCreator>


export const loginReducer = (state: InitialStateType = initialState, action: DispatchActionTypeLogin): InitialStateType => {

    switch (action.type) {

        case "SOME-TYPE": {
            return {...state}
        }
        default:
            return state
    }

}

export const someActionCreator = () => {
    return {
        type: "SOME-TYPE"
    } as const
}


