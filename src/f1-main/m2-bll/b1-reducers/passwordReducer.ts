
type InitialStateType = {

}

let initialState: InitialStateType = {

}

export type DispatchActionTypePassword =
    | ReturnType <typeof someActionCreator>


export const passwordReducer = (state: InitialStateType = initialState, action: DispatchActionTypePassword ): InitialStateType => {

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


