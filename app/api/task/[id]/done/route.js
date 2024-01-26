import { connectToDB } from "@utils/database";
import Task from "@models/task";

export const PATCH = async (req, { params }) => {
  const { done } = await req.json();

  try {
    await connectToDB();

    const existingTask = await Task.findById(params.id);

    if (!existingTask) {
      return new Response("Task not found", { status: 404 });
    }

    existingTask.done = done;

    await existingTask.save();

    return new Response("Successfully updated the Done", { status: 200 });
  } catch (error) {
    return new Response("Failed to update done", {
      status: 500,
    });
  }
};
