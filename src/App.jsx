import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";

function App() {
  return (
    <main className="bg-zinc-900 h-screen overflow-y-scroll">
      <div className="container mx-auto p-10">
        {/* UI COMPONENT TREE */}
        <TaskForm></TaskForm>
        <TaskList></TaskList> {/*RECIBIR PROP*/}
      </div>
    </main>
  );
}

export default App;
