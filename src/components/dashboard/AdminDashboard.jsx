import AllTasks from "../other/AllTasks";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full bg-black p-7">
      <Header />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
