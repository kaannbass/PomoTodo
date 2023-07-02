const TodoForm = ({ state, dispatch, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="grid">
            <input
                name="todo"
                type="text"
                placeholder="What is the task today?"
                value={state.todo}
                onChange={onChange}
                className="block w-full rounded-md p-2 text-gray-900 shadow-sm focus:outline-none placeholder-gray-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-pink-400"
            />

            <button
                disabled={!state.todo}
                name="Submit"
                type="submit"
                className={
                    !state.todo
                        ? 'cursor-not-allowed text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br mt-3 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                        : 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br mt-3 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                }
            >
                Add Todo
            </button>
        </form>
    );
};
export default TodoForm;  