import { connectToDB } from "@utils/database";
import Task from "@models/task";

export const POST = async (req) => {
  const { task, done, rate } = await req.json();

  try {
    await connectToDB();
    const newTask = new Task({
      task,
      done: done || false,
      rate,
    });

    await newTask.save();

    return new Response(JSON.stringify(newTask, { status: 201 }));
  } catch (error) {
    return new Response("Failed to create a new task", { status: 500 });
  }
};
