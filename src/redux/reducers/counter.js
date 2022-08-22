let initialState = {
    count: 0,
    total: 0,
    users: [],
};

const counterReducer = (state = initialState, action) => {
    let { type } = action;
    let { count } = state;
    switch (type) {
        case "INCREMENT":
            return { ...state, count: count + 1 };
            break;
        case "DECREMENT":
            return { ...state, count: count - 1 };
            break;
        default:
            return state;
            break;
    }
};
export default counterReducer;
