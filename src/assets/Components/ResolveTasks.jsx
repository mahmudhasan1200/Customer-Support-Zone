const ResolveTasks = ({ task }) => {
  return (
    <div className="bg-[#E0E7FF] w-[80%] md:w-89.5 text-center p-4 rounded-xl border border-gray-100 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] ">
      <h1 className="text-[#001931] font-semibold text-lg">{task.title}</h1>
    </div>
  );
};

export default ResolveTasks;
