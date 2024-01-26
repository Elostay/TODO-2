"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import TodoList from "@components/TodoList";

const Profile = () => {
  const router = useRouter();

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await fetch(`/api/task`);

    const data = await response.json();

    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDone = async (task) => {
    if (!task._id) return alert("Task ID not found");

    try {
      await fetch(`/api/task/${task._id}/done`, {
        method: "PATCH",
        body: JSON.stringify({
          done: !task.done,
        }),
      });
      await fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (task) => {
    router.push(`/update-task/${task._id}`);
  };

  const handleDelete = async (task) => {
    const hasConfirmed = confirm("Are you sure you want to delete this task?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/task/${task._id.toString()}`, {
          method: "DELETE",
        });

        const filteredTasks = tasks.filter((t) => t._id !== task._id);
        setTasks(filteredTasks);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">My Profile</span>
      </h1>
      <p className="desc text-left">
        Welcome to your personalized profile page
      </p>
      <TodoList
        data={tasks}
        handleDone={handleDone}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        profile
      />
    </section>
  );
};

export default Profile;
