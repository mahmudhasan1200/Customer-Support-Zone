import { useEffect, useState } from "react";
import "./App.css";
import headerImg1 from "./assets/vector1.png";
import Tickets from "./assets/Components/Tickets";
import TaskStatus from "./assets/Components/TaskStatus";
import ResolveTasks from "./assets/Components/ResolveTasks";
function App() {
  // Fetching Tickets json data and Store it
  const [ticketsData, setTicketData] = useState([]);
  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => {
        setTicketData(data);
      })
      .catch((error) => console.error("failed to load the data", error));
  }, []);

  // Handle Select Task
  const [selectedTasks, setSelectedTask] = useState([]);
  const handleSelectTask = (ticket) => {
    const currentTasks = Array.isArray(selectedTasks) ? selectedTasks : [];
    const newSelectedTasks = [...currentTasks, ticket];
    setSelectedTask(newSelectedTasks);

    const updatedTickets = ticketsData.filter(
      (ticketsData) => ticketsData.id !== ticket.id,
    );
    setTicketData(updatedTickets);
  };

  // Handle Resolve Task
  const [clickedTask, setclicked] = useState([]);
  const handleResolveTask = (task) => {
    const currentClikedTask = Array.isArray(clickedTask) ? clickedTask : [];
    const newClikedTask = [...currentClikedTask, task];
    setclicked(newClikedTask);

    // Update Task Status by removing the selected task
    const updatedSelectedTasks = selectedTasks.filter(
      (selectedTask) => selectedTask.id !== task.id,
    );
    setSelectedTask(updatedSelectedTasks);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-inter">
      <header className="">
        {/* Navbar */}
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="flex items-center container mx-auto p-4 justify-between">
            {/* --- BRAND / LOGO AREA --- */}
            <div>
              <a className="btn btn-ghost text-2xl font-bold text-[#130B2D] px-0 hover:bg-transparent">
                CS — Ticket System
              </a>
            </div>

            {/* --- MOBILE HAMBURGER MENU (DaisyUI Dropdown) --- */}
            <div className="dropdown dropdown-end lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden cursor-pointer"
              >
                <svg
                  xmlns="http://w3.org"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-white rounded-2xl w-56 border border-gray-100 flex flex-col gap-2"
              >
                <li>
                  <a className="text-[16px] font-medium text-[#131313b3] py-2">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-[16px] font-medium text-[#131313b3] py-2">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="text-[16px] font-medium text-[#131313b3] py-2">
                    Changelog
                  </a>
                </li>
                <li>
                  <a className="text-[16px] font-medium text-[#131313b3] py-2">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-[16px] font-medium text-[#131313b3] py-2">
                    Download
                  </a>
                </li>
                <li>
                  <a className="text-[16px] font-medium text-[#131313b3] py-2">
                    Contact
                  </a>
                </li>
                <hr className="border-gray-100 my-1" />
                <li>
                  <button className="flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white text-base font-semibold rounded-lg shadow-sm hover:opacity-95 transition-opacity cursor-pointer">
                    <span>+</span>
                    <span>New Ticket</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* --- DESKTOP NAVIGATION LINKS (Hidden on Mobile) --- */}
            <div className="hidden lg:flex items-center font-semibold text-[#131313b3] gap-1">
              <button className="btn btn-ghost text-[16px] cursor-pointer">
                Home
              </button>
              <button className="btn btn-ghost text-[16px] cursor-pointer">
                FAQ
              </button>
              <button className="btn btn-ghost text-[16px] cursor-pointer">
                Changelog
              </button>
              <button className="btn btn-ghost text-[16px] cursor-pointer">
                Blog
              </button>
              <button className="btn btn-ghost text-[16px] cursor-pointer">
                Download
              </button>
              <button className="btn btn-ghost text-[16px] cursor-pointer">
                Contact
              </button>
              <button className="inline-flex items-center gap-2 ml-4 px-5 py-2.5 bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white text-base font-semibold rounded-lg shadow-sm hover:opacity-95 transition-opacity cursor-pointer">
                <span>+</span>
                <span>New Ticket</span>
              </button>
            </div>
          </div>
        </nav>
        {/* Banner section: Progress and Resolved display  */}
        <div className="flex flex-col xl:flex-row gap-6 p-4 w-full  mx-auto mt-13 container ">
          {/* Card 1: In-Progress */}
          <div
            className=" h-62.5 flex-1 min-w-75 rounded-2xl flex flex-col justify-center items-center text-white relative overflow-hidden shadow-lg"
            style={{
              backgroundImage: `linear-gradient(125deg, #632ee3 0%, #9f62f2 100%)`,
            }}
          >
            {/* Line Pattern Layer */}
            {headerImg1 && (
              <div
                className="absolute inset-0 bg-cover bg-center invert opacity-100 pointer-events-none"
                style={{ backgroundImage: `url(${headerImg1})` }}
              />
            )}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <p className="text-xl font-medium tracking-wide mb-2 opacity-90">
                In-Progress
              </p>
              <h1 className="text-6xl font-bold">{selectedTasks.length}</h1>
            </div>
          </div>

          {/* Card 2: */}
          <div
            className="h-62.5 flex-1 min-w-75 rounded-2xl flex flex-col justify-center items-center text-white relative overflow-hidden shadow-lg"
            style={{
              backgroundImage: `linear-gradient(90deg, #54cf68 0.01%, #00827a 100%)`,
            }}
          >
            {/* Line Pattern Layer */}
            {headerImg1 && (
              <div
                className="absolute inset-0 bg-cover bg-center invert opacity-100 pointer-events-none"
                style={{ backgroundImage: `url(${headerImg1})` }}
              />
            )}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <p className="text-xl font-medium tracking-wide mb-2 opacity-90">
                Resolved
              </p>
              <h1 className="text-6xl font-bold">{clickedTask.length}</h1>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-20">
        <div>
          <h1 className="mb-3 text-2xl font-semibold text-[#34485A]">
            Customer Tickets
          </h1>
        </div>

        <div className="  flex flex-col-reverse md:flex-row  gap-8 ">
          {/* Customer Ticket Area  */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ticketsData.map((ticket) => (
              <Tickets
                ticket={ticket}
                key={ticket.id}
                handleSelectTask={handleSelectTask}
              ></Tickets>
            ))}
          </section>

          {/* Task Status and Resolved Task Container  */}
          <section className="w-89.5">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-[#34485A]">
                Task Status
              </h1>

              {/* Display selected tasks */}
              {selectedTasks.length === 0 ? (
                <p className="text-sm text-[#34485A] mb-4">
                  Select a ticket to add to task status
                </p>
              ) : (
                <div className="mt-4 mb-4">
                  <ul className="list-disc list-inside flex flex-col gap-4">
                    {selectedTasks.map((task) => (
                      <TaskStatus
                        task={task}
                        key={task.id}
                        handleResolveTask={handleResolveTask}
                      ></TaskStatus>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Resolved Task Area  */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-[#34485A] mb-3">
                Resolved Task
              </h1>
              <div className="flex flex-col gap-4">
                {clickedTask.map((task) => (
                  <ResolveTasks task={task} key={task.id}></ResolveTasks>
                ))}
              </div>
              {clickedTask.length === 0 && (
                <p className="text-sm text-[#34485A]">No resolved task found</p>
              )}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 w-full font-sans mt-20">
        <div className="max-w-7xl mx-auto">
          {/* --- TOP GRID SECTION --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 xl:gap-12 pb-10 justify-center items-center">
            {/* Column 1: Brand & Description (Spans wider on desktop panels) */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h2 className="text-xl font-bold tracking-tight text-white">
                CS — Ticket System
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-white/90">
                Company
              </h3>
              <ul className="flex flex-col gap-2.5 text-zinc-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-white/90">
                Services
              </h3>
              <ul className="flex flex-col gap-2.5 text-zinc-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Products & Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Download Apps
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Information */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-white/90">
                Information
              </h3>
              <ul className="flex flex-col gap-2.5 text-zinc-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
            {/* --- MIDDLE SOCIAL RECTANGLE LIST --- */}
            {/* Placed flexibly on bottom row area to preserve exact balance match */}
            <div className="flex flex-col md:flex-row md:justify-end pt-6 gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-white/90 ">
                  Social Links
                </h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-3 text-zinc-400 text-sm">
                  <li className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">
                      X
                    </span>
                    <span>@CS - Ticket System</span>
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">
                      in
                    </span>
                    <span>@CS - Ticket System</span>
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">
                      f
                    </span>
                    <span>@CS - Ticket System</span>
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <span className="w-5 h-5 text-zinc-400 flex items-center justify-center">
                      ✉
                    </span>
                    <span>support@cst.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* --- BOTTOM RIGHTS ROW --- */}
          <div className="mt-8 border-t border-zinc-800 pt-6 flex justify-center text-xs text-zinc-500">
            <p>© 2026 CS — Ticket System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
