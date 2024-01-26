import Image from "next/image";
import handleColor from "@helpers/handleColor";

const TodoItem = ({ task, handleEdit, handleDelete, handleDone, profile }) => {
  return (
    <div className="task_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 ">
          <Image
            src="/assets/images/user-default-photo.png"
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              Here will be your name
            </h3>
            <p className="font-inter text-sm text-gray-500">
              Here will be your email
            </p>
          </div>
        </div>

        {profile && (
          <input
            className="w-8 h-8 p-2"
            type="checkbox"
            checked={task.done}
            onChange={handleDone}
          />
        )}
      </div>
      <p className="my-4 font-satoshi test-sm text-gray-700">{task.task}</p>

      <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
        {profile && (
          <>
            <p
              className="font-inter text-sm blue_gradient cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
          </>
        )}
        <p
          className={`my-4 font-satoshi test-sm text-gray-700 w-10 h-10
		   text-white rounded-full flex items-center justify-center ${handleColor(
         task.rate
       )}`}
        >
          {task.rate}
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
