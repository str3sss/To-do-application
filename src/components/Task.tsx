"use client";

import { ITodo } from "@/types/todo";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Checkbox, List, Button } from "antd";
import React from "react";
import { deleteTodo, toggleTodoStatus } from "src/api/requests";

interface TaskProps {
  task: ITodo;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const { completed, id, title } = task;
  
  const queryClient = useQueryClient();

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: toggleMutation } = useMutation({
    mutationFn: toggleTodoStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const toggleStatusHandler = (todoId: string, completed: boolean) => {
    toggleMutation({ todoId, completed });
  };

  const deleteHandler = (id: string) => {
    deleteMutation(id);
  };

  return (
    <List.Item className="!flex justify-between">
      <div>
        <Checkbox className="!mr-4" checked={completed} onChange={() => toggleStatusHandler(id, !completed)} />
        {title}
      </div>
      <Button type="default" onClick={() => deleteHandler(id)}>
        delete
      </Button>
    </List.Item>
  );
};

export default Task;
