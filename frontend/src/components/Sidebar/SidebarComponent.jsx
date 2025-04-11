import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaProjectDiagram,
  FaUsers,
  FaBoxOpen,
  FaUserTie,
} from "react-icons/fa";

export const SidebarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRefs = useRef({});

  const menus = [
    {
      key: "project",
      name: "Project Management",
      icon: <FaProjectDiagram size={22} />,
      sub: [
        { name: "Add Project", path: "/projectcreate" },
        { name: "Add Task", path: "/task" },
        { name: "Add Milestone", path: "/milestone" },
        { name: "Summary", path: "/summary" },
      ],
    },
    {
      key: "inventory",
      name: "Inventory & Stock",
      icon: <FaBoxOpen size={22} />,
      sub: [
        { name: "View Inventory", path: "/inventory" },
        { name: "Add Stock", path: "/add-stock" },
      ],
    },
    {
      key: "master",
      name: "Master",
      icon: <FaUserTie size={22} />,
      sub: [
        { name: "Engineer", path: "/engineer" },
        { name: "Contractor", path: "/contractor" },
        { name: "Manager", path: "/manager" },
      ],
    },
    {
      key: "hr",
      name: "HR",
      icon: <FaUsers size={22} />,
      sub: [
        { name: "Employees", path: "/employees" },
        { name: "Attendance", path: "/attendance" },
        { name: "Payroll", path: "/payroll" },
      ],
    },
  ];

  // Outside click listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      const refs = Object.values(menuRefs.current);
      const clickedInside = refs.some((ref) => ref?.contains(event.target));
      if (!clickedInside) setActiveMenu(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (key) => {
    setActiveMenu((prev) => (prev === key ? null : key));
  };

  return (
    <aside className="w-16 bg-white h-screen shadow-md flex flex-col items-center pt-4 relative z-20">
      {/* Logo */}
      <div
        className="mb-6 cursor-pointer"
        onClick={() => {
          navigate("/dashboard");
          setActiveMenu(null);
        }}
      >
        <img
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Logo"
          className="w-9 h-9 rounded-3xl"
        />
      </div>

      {/* Menu Icons */}
      {/* Menu Icons */}
      <nav className="flex flex-col gap-6">
        {menus.map((menu) => (
          <div
            key={menu.key}
            ref={(el) => (menuRefs.current[menu.key] = el)}
            className="relative group"
          >
            {/* Icon with Tooltip */}
            <div
              onClick={() => toggleMenu(menu.key)}
              className={`text-gray-600 cursor-pointer hover:text-purple-600 p-2 rounded transition-colors relative group-hover:bg-gray-100 ${
                activeMenu === menu.key ? "bg-gray-200" : ""
              }`}
            >
              {menu.icon}

              {/* Tooltip */}
              <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
                {menu.name}
              </div>
            </div>

            {/* Submenu */}
            {activeMenu === menu.key && (
              <div className="absolute left-16 top-0 z-30 w-48 bg-white shadow-lg rounded-md p-2 border">
                <div className="font-semibold text-sm mb-1 text-gray-700">
                  {menu.name}
                </div>
                <ul className="space-y-1">
                  {menu.sub.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.path}
                        onClick={() => setActiveMenu(null)}
                        className={`block px-2 py-1 rounded hover:bg-gray-100 ${
                          location.pathname === item.path
                            ? "bg-purple-100 font-medium text-purple-500"
                            : "text-gray-700"
                        }`}
                        style={{ textDecoration: "none" }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto mb-4 text-xs text-gray-400">v1.0</div>
    </aside>
  );
};
