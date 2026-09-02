import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
