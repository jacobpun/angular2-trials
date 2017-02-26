import { ADD_ITEM, REMOVE_ITEM } from './actions'

export interface IAppState {
    items: string[];
    countOfItems: number;
    lastUpdatedDate: Date;
}


export const INITIAL_STORE = {
    items: [],
    countOfItems: 0,
    lastUpdatedDate: null
}

export function appReducer (state: IAppState, action: any) : IAppState {
    switch(action.type) {
        case ADD_ITEM:
            return Object.assign({}, state, 
            {
                countOfItems: state.countOfItems + 1, 
                items: [...state.items, action.payload], 
                lastUpdatedDate: new Date()
            });
        case REMOVE_ITEM:
            return Object.assign({}, state, 
            {
                countOfItems: state.countOfItems - 1,
                items: [
                    ...state.items.slice(0, state.items.indexOf(action.payload)),
                    ...state.items.slice(state.items.indexOf(action.payload) + 1)
                ], 
                lastUpdatedDate: new Date()
            })
        default:
            return state;
    }
}