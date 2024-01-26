"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateTask = () => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    task: "",
    done: false,
    rate: 1,
  });
  const createTask = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({
          task: post.task,

          done: post.done,
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
      type="Create"
      task={post}
      setTask={setPost}
      submitting={submitting}
      handleSubmit={createTask}
    />
  );
};

export default CreateTask;
