import { ITodo } from "@/types/todo";

const BASE_URL = "http://localhost:3004/todos";

export async function fetchTodos(): Promise<ITodo[]> {
  const res = await fetch(`${BASE_URL}`);

  if (!res.ok) throw new Error("Failed to fetch todos!");

  return res.json();
}

export async function toggleTodoStatus({ todoId, completed }: { todoId: string; completed: boolean }) {
  const res = await fetch(`${BASE_URL}/${todoId}`, {
    method: "PATCH",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export async function createTodo(title: string) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({ title, completed: false }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export async function deleteTodo(todoId: string) {
  const res = await fetch(`${BASE_URL}/${todoId}`, {
    method: "DELETE",
  });

  return res.json();
}
