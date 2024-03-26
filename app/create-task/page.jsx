"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Form from "@components/Form";
import { BASE_URL } from "@constants";

const CreateTask = () => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    task: "",
    done: false,
    rate: 1,
  });
  const createTaskApi = `${BASE_URL}/todos/`;

  const createTask = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(createTaskApi, {
        method: "POST",
        body: JSON.stringify({
          done: post.done,
          rate: post.rate,
          task: post.task,
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
      type="Create"
      task={post}
      setTask={setPost}
      submitting={submitting}
      handleSubmit={createTask}
    />
  );
};

export default CreateTask;
