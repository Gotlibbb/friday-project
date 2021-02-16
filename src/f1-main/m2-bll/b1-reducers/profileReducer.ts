
type InitialStateType = {

}

let initialState: InitialStateType = {

}

export type DispatchActionTypeProfile =
    | ReturnType <typeof someActionCreator>


export const profileReducer = (state: InitialStateType = initialState, action: DispatchActionTypeProfile ): InitialStateType => {

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


