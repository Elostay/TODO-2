"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import { BASE_URL } from "@constants";

const EditTask = ({ params: { taskId } }) => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    task: "",
    rate: 1,
    done: false,
  });

  useEffect(() => {
    const getTaskDetails = async () => {
      const task = `${BASE_URL}/tasks/${taskId}`;
      const response = await fetch(task);
      const data = await response.json();
      setPost({
        task: data.task,
        rate: data.rate,
        done: data.done,
      });
    };

    if (taskId) getTaskDetails();
  }, [taskId]);

  const updateTask = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!taskId) return alert("Task ID not found");
    const patchTask = `${BASE_URL}/tasks/${taskId}`;

    try {
      const response = await fetch(patchTask, {
        method: "PATCH",
        body: JSON.stringify({
          task: post.task,
          rate: post.rate,
          done: post.done,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      task={post}
      setTask={setPost}
      submitting={submitting}
      handleSubmit={updateTask}
    />
  );
};

export default EditTask;
