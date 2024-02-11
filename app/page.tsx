import { ITodo } from "@/types/todo";
import TaskList from "src/components/TaskList";

async function getTodos() {
  const res = await fetch("http://localhost:3004/todos");
  const data = (await res.json()) as ITodo[];
  return data;
}

export default async function Home() {
  const data = await getTodos();
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <TaskList initialTasks={data} />
    </main>
  );
}
