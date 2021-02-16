
type InitialStateType = {

}

let initialState: InitialStateType = {

}

export type DispatchActionTypeRegistration =
    | ReturnType <typeof someActionCreator>


export const registrationReducer = (state: InitialStateType = initialState, action: DispatchActionTypeRegistration ): InitialStateType => {

    switch (action.type){

        case "SOME-TYPE": {
            return {...state}
        }
        default:
            return state
    }

}

export const someActionCreator = () =>{
    return {
        type: "SOME-TYPE"
    } as const
}


