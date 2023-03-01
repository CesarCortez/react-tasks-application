import { createContext, useState ,useEffect} from "react";
import { tasks as data } from "../data/tasks"; //imp

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(id) {
    console.log(id);
    console.log(tasks);
    setTasks(tasks.filter((el) => el.id != id));
  }

  useEffect(() => {
    setTasks(data);
  }, []); //set data la primera vez al cargar

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
