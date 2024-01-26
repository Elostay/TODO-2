import { connectToDB } from "@utils/database";
import Task from "@models/task";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const task = await Task.findById(params.id);
    if (!task) return new Response("Task not found", { status: 404 });

    return new Response(JSON.stringify(task), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all tasks", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { task, rate } = await req.json();

  try {
    await connectToDB();

    const existingTask = await Task.findById(params.id);

    if (!existingTask) {
      return new Response("Task not found", { status: 404 });
    }

    existingTask.task = task;
    existingTask.rate = rate;

    await existingTask.save();

    return new Response("Successfully updated the Task", { status: 200 });
  } catch (error) {
    return new Response("Failed to update task", {
      status: 500,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Task.findByIdAndDelete(params.id);

    return new Response("Task deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete task", { status: 500 });
  }
};
