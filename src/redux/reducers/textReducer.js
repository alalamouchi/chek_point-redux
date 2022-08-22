const initialState = {
    text: "HELLO WORLD",
};

const textReducer = (state = initialState, action) => {
    let { type } = action;
    let { text } = state;
    switch (type) {
        case "CHANGE_TEXT":
            return { ...state, text: "THIS IS THE NEW TEXT" };
            break;
        default:
            return state;
            break;
    }
};
export default textReducer;
