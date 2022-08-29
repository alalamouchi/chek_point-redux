export const editTitle = (payload) => {
    return {
        type: "EDIT-TITLE",
        payload,
    };
};
export const addTask = (payload) => {
    return {
        type: "ADD-TASK",
        payload,
    };
};
export const markAsDone = (payload) => {
    console.log(payload);
    return {
        type: "DONE-TASK",
        payload,
    };
};
export const deleteTask = (payload) => {
    console.log(payload);
    return {
        type: "DELETE-TASK",
        payload,
    };
};
export const filterDoneTasks = (payload) => {
    return {
        type: "FILTER-DONE-TASKS",
        payload,
    };
};
export const filterIsGoingTasks = (payload) => {
    return {
        type: "FILTER-IS-GOING-TASKS",
        payload,
    };
};
export const showAllTasks = (payload) => {
    return {
        type: "SHOW-ALL-TASKS",
        payload,
    };
};
