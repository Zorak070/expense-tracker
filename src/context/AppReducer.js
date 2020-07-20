export default (state, action) => {
    switch (action.type) {
        case "DELETE_ITEM": return {
            ...state,
            transactionList: state.transactionList.filter(item => item.id !== action.payload)
        };
        case "ADD_ITEM": return {
            ...state,
            transactionList: [...state.transactionList, action.payload]
        };

        default: return state;
    }
}