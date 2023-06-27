import { memo, useReducer } from "react";
import todoReducer from '../../Reducer/TodoReducer';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        todo: ''
    });

    const submitHandle = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            value: state.todo
        });
    };

    const onChange = (e) => {
        dispatch({
            type: 'SET_TODO',
            value: e.target.value
        });
    };

    const onDelete = (e) => {
        dispatch({
            type: 'SET_DELETE',
            value: e
        });
    };

    return (
        <div className="">
            <TodoForm state={state} dispatch={dispatch} onChange={onChange} onSubmit={submitHandle} />
            <div className="mt-2">
                <TodoList todos={state.todos} onDelete={onDelete} />
            </div>
        </div>
    );
};

export default memo(Todo);
