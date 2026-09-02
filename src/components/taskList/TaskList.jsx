import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {/* {data.tasks.map((elem, idx) => {
                if (elem.active) { */}
      <AcceptTask />
      {/* }
                if (elem.newTask) { */}
      <NewTask />
      {/* }
                if (elem.completed) { */}
      <CompleteTask />
      {/* }
                if (elem.failed) { */}
      <FailedTask />
      {/* }

            })} */}
    </div>
  );
};

export default TaskList;
