export const FILTERS_MAP = {
    All: () => true,
    Active: todo => !todo.done,
    Completed: todo => todo.done
};

export const FILTERS_NAMES = Object.keys(FILTERS_MAP);

export const initialState = {
    todos: [{
        id: 1,
        title: 't1',
        done: false
    }, {
        id: 2,
        title: 't2',
        done: true
    }, {
        id: 3,
        title: 't3',
        done: false
    }],
    filter: FILTERS_NAMES[0]
};

export const ACTIONS = {
    AddTodo: 'ADD',
    CompleteTodo: 'COMPLETE',
    EditTodo: 'EDIT',
    DeleteTodo: 'DELETE',
    FilterTodos: 'FILTER'
}

export const reducer = (state, { type, title, id, filter }) => {
    switch (type) {
        case ACTIONS.AddTodo:
            const newTodo = { id: state.todos.length + 1, title };
            return { ...state, todos: [newTodo, ...state.todos] };
        case ACTIONS.CompleteTodo:
            const updatedTodos = state.todos.map(todo => {
                if (id === todo.id) {
                    return { ...todo, done: !todo.done };
                }
                return todo;
            });
            return { ...state, todos: updatedTodos };
        case ACTIONS.EditTodo:
            const editedTodos = state.todos.map(todo => {
                if (id === todo.id) {
                    return { ...todo, title: title };
                }
                return todo;
            });
            return { ...state, todos: editedTodos };
        case ACTIONS.DeleteTodo:
            return { ...state, todos: state.todos.filter(todo => id !== todo.id) };
        case ACTIONS.FilterTodos:
            return { ...state, filter };
        default:
            return state;
    }
}