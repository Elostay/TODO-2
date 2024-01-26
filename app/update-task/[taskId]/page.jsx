"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const EditTask = ({ params: { taskId } }) => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    task: "",
    rate: 1,
  });

  useEffect(() => {
    const getTaskDetails = async () => {
      const response = await fetch(`/api/task/${taskId}`);
      const data = await response.json();
      setPost({
        task: data.task,
        rate: data.rate,
      });
    };

    if (taskId) getTaskDetails();
  }, [taskId]);

  const updateTask = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!taskId) return alert("Task ID not found");

    try {
      const response = await fetch(`/api/task/${taskId}`, {
        method: "PATCH",
        body: JSON.stringify({
          task: post.task,
          rate: post.rate,
        }),
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
