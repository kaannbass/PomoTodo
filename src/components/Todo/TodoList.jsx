import TodoItem from "./TodoItem";


const TodoList = ({ todos, onDelete }) => {
    return (
        <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
            {todos.map((todo, index) => {
                return <TodoItem key={index} todo={todo} onDelete={onDelete} />;
            })}
        </ul>
    );
};
export default TodoList;