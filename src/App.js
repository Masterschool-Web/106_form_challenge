import { useState } from "react";

const TASKS = [
  {
    task: "Clean bedroom",
    subtasks: ["Do laundry", "Organize desk", "Wipe floors"],
  },
  {
    task: "Study",
    subtasks: ["Review chemistry", "Do a React coding challenge"],
  },
  {
    task: "Build website",
    subtasks: ["Choose tech stack", "Design pages", "Develop", "Publish"],
  },
];

function App() {
  const [tasks, setTasks] = useState(TASKS);

  return (
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 30,
          }}
      >
        <TasksAndSubtasks taskArray={tasks} setTaskArray={setTasks} />
      </div>
  );
}

const TasksAndSubtasks = ({ taskArray, setTaskArray }) => {
  // YOUR CODE HERE
};

export default App;