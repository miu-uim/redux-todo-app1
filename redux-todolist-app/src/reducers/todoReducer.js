import {ADDTODO,DELETETODO,DONETODO} from '../actions';

const initialState = {
    todos:[
        {title:'やること1',flg:false},
        {title:'やること2',flg:false},
        {title:'やること3',flg:false},
    ]
}

const reducers = (state = initialState,action)=>{
    switch(action.type){
        case ADDTODO:
            return {
                todos:[...state.todos,action.todo]
            }
        case DELETETODO:
            const newList1 = [...state.todos]
            newList1.splice(action.index,1)
            return {
                todos:newList1
            }
        case DONETODO:
            const newList2 = [...state.todos]
            newList2[action.index].flg = !newList2[action.index].flg
            return {
               todos:newList2
            }
        default:
            return state    
        }

        
    }
export default reducers