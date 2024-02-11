"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input, Button } from "antd";
import React, { useState } from "react";
import { createTodo } from "src/api/requests";

function NewTaskPanel() {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const { mutate: createMutation } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const createHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title) {
      createMutation(title);
      setTitle("");
    }
  };

  return (
    <form name="new task" autoComplete="off" className="flex flex-row min-w-80 w-80 mb-10 gap-4" onSubmit={createHandler}>
      <Input type="text" placeholder="new todo..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button type="default">new task</Button>
    </form>
  );
}

export default NewTaskPanel;
