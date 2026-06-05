import { FiCalendar } from "react-icons/fi";
const Tickets = ({ ticket, handleSelectTask }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;
  const isOpen = status === "Open";

  return (
    <button
      onClick={() => handleSelectTask(ticket)}
      className="cursor-pointer "
    >
      <div className="w-full max-w-2xl bg-white rounded-xl border border-gray-100 p-5 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] flex flex-col gap-3">
        {/* --- TOP ROW: Title & Status Badge --- */}
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-[#130B2D] text-lg font-bold leading-snug text-start">
            {title}
          </h3>
          {/* DaisyUI Badge with a green dot indicator */}
          <div
            className={`badge badge-success border-none font-semibold gap-1.5 py-3 px-3.5 shrink-0
            ${isOpen ? "bg-emerald-100  text-emerald-700 " : "bg-[#feb90c59] text-[#9C7700]"}`}
          >
            <span
              className={`h-2 w-2 rounded-full  inline-block ${isOpen ? "bg-emerald-600" : "bg-[#FEBB0C] "}`}
            ></span>
            {status}
          </div>
        </div>

        {/* --- MIDDLE ROW: Description Body Text --- */}
        <p className="text-gray-500 text-sm leading-relaxed max-w-xl text-start">
          {description}
        </p>

        {/* --- BOTTOM ROW: Metadata, Priority & Author Details --- */}
        <div className="flex flex-wrap items-center justify-between mt-2 pt-3 border-t border-gray-50 text-xs text-gray-400">
          {/* Left Side Metadata */}
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-400">#{id}</span>
            <span
              className={`font-bold tracking-wider ${priority === "HIGH PRIORITY" ? "text-red-500" : priority === "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}
            >
              {priority}
            </span>
          </div>

          {/* Right Side Metadata */}
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-600">{customer}</span>

            <div className="">
              {/* SVG Calendar Icon */}
              <p className="text-gray-400 text-sm inline-flex items-center gap-1">
                <FiCalendar />
                {createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Tickets;
