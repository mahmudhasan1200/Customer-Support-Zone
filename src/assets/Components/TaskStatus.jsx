const TaskStatus = ({ task, handleResolveTask }) => {
  return (
    <div className="bg-white w-[80%] items-center md:w-89.5 rounded-xl border border-gray-100 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] flex flex-col gap-3 p-5">
      <h3 className="text-[#130B2D] text-lg font-bold leading-snug">
        {task.title}
      </h3>
      <button
        onClick={() => handleResolveTask(task)}
        className="w-auto md:w-81.5 bg-[#02A53B] rounded-sm p-2 text-white font-medium"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;
