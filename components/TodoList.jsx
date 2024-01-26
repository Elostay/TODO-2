import TodoItem from "@components/TodoItem";

const TodoList = ({ data, handleDone, handleEdit, handleDelete, profile }) => {
  return (
    <>
      <div className="mt-10 task_layout">
        {data.map((task) => (
          <TodoItem
            key={task._id}
            task={task}
            profile={profile}
            handleEdit={() => handleEdit && handleEdit(task)}
            handleDelete={() => handleDelete && handleDelete(task)}
            handleDone={() => handleDelete && handleDone(task)}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
