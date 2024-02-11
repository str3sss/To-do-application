"use client";

import { ITodo } from "@/types/todo";
import { useQuery } from "@tanstack/react-query";
import { List } from "antd";
import React from "react";
import { fetchTodos } from "src/api/requests";
import NewTaskPanel from "./NewTaskPanel";
import Task from "./Task";

interface TaskListProps {
  initialTasks: ITodo[];
}

const TaskList: React.FC<TaskListProps> = ({ initialTasks }) => {
  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTodos(),
    initialData: initialTasks,
  });

  return (
    <div className="min-w-80 h-96">
      <NewTaskPanel />
      <List bordered dataSource={tasks} size="large" renderItem={(task) => <Task task={task} />} />
    </div>
  );
};

export default TaskList;
