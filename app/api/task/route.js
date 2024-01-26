import { connectToDB } from "@utils/database";
import Task from "@models/task";

export const GET = async (req) => {
  try {
    await connectToDB();

    const tasks = await Task.find({});

    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all tasks", { status: 500 });
  }
};
