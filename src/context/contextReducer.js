const contextReducer = (state, action) => {
    let transaction;
    switch (action.type) {
        case "ADD_TRANSACTION":
            transaction = [action.payload, ...state];
            localStorage.setItem("transaction", JSON.stringify(transaction));
            return transaction;
        case "DELETE_TRANSACTION":
            transaction = state.filter((t) => t.id !== action.payload);
            localStorage.setItem("transaction", JSON.stringify(transaction));
            return transaction;
        default:
            return state;
    }
};

export default contextReducer;
