import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo:() => ({
        description: 'ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        },{ 
            _id: 2,
            description: 'reunião',
            done: false
        },{ 
            _id: 3,
            description: 'alomoçar',
            done: false
        }]
    })
})

export default rootReducer