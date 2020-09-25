
const counterReducer=(state,action)=>{
    switch (action) {
        case 'INCREMENT':
            return state + 1
        default:
            return state;
    }
}
export default counterReducer;