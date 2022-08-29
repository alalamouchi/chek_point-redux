import { v4 as uuidv4 } from "uuid";
const initialState = {
    tasks: [
        {
            id: uuidv4(),
            taskTitel: "Going To Gym",
            isDone: false,
        },
        {
            id: uuidv4(),
            taskTitel: "Learn Redux",
            isDone: false,
        },
        {
            id: uuidv4(),
            taskTitel: "Learn React",
            isDone: false,
        },
    ],
    doneTasks: [],
    onGoingTasks: [],
};

const toDoReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case "EDIT-TITLE":
            return state.tasks.map((elt) =>
                elt.id === payload.id
                    ? {
                          ...elt,
                          taskTitel: payload.newTitleTask,
                      }
                    : elt
            );
            break;
        case "ADD-TASK":
            return { ...state, tasks: [...state.tasks, payload] };
            break;
        case "DONE-TASK":
            return {
                ...state,
                tasks: state.tasks.map((elt) =>
                    elt.id === payload
                        ? {
                              ...elt,
                              isDone: true,
                          }
                        : elt
                ),
            };
            break;
        case "DELETE-TASK":
            return {
                ...state,
                tasks: state.tasks.filter((elt) => elt.id !== payload),
                doneTasks: state.doneTasks.filter((elt) => elt.id !== payload),
                onGoingTasks: state.onGoingTasks.filter(
                    (elt) => elt.id !== payload
                ),
            };
            break;
        case "FILTER-DONE-TASKS":
            return {
                ...state,
                onGoingTasks: [],
                doneTasks: state.tasks.filter((elt) => elt.isDone),
            };
            break;
        case "FILTER-IS-GOING-TASKS":
            return {
                ...state,
                doneTasks: [],
                onGoingTasks: state.tasks.filter((elt) => !elt.isDone),
            };
            break;
        case "SHOW-ALL-TASKS":
            return {
                ...state,
                doneTasks: [],
                onGoingTasks: [],
            };
            break;
        default:
            return state;
            break;
    }
};

export default toDoReducer;
