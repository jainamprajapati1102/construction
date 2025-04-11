import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "react-modal";

// Set the app element for accessibility (required by react-modal)
Modal.setAppElement("#root"); // Ensure this matches your root element ID

export const ProjectCreateComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectCode, setProjectCode] = useState("");
  const [managerName, SetmanagerName] = useState("");
  const [setstartDate, setSetstartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [CountryName, setCountryName] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [areaName, setAreaName] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [estimatedBudget, setEstimatedBudget] = useState("");

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    handleModalToggle();
  };

  return (
    <div className="min-h-screen bg-gray-50 px-3 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className=" font-semibold text-gray-900">Project Management</h3>
        <button
          onClick={handleModalToggle}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-1 px-2 rounded shadow-sm transition"
        >
          + New Project
        </button>
      </div>

      {/* Project List Card */}
      <div
        className={`bg-white rounded-lg shadow-md p-3 transition-all duration-300 ${
          showModal ? "blur-sm" : ""
        }`}
      >
        {/* <h4 className="text-base font-medium text-gray-800 mb-1">
          Active Projects
        </h4> */}

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-separate border-spacing-y-0.5">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-[10px] uppercase">
                <th className="px-1.5 py-1">Sr. No.</th>
                <th className="px-1.5 py-1">Project Name</th>
                <th className="px-1.5 py-1">Start Date</th>
                <th className="px-1.5 py-1">End Date</th>
                <th className="px-1.5 py-1">Engineer</th>
                <th className="px-1.5 py-1">Contractor</th>
                <th className="px-1.5 py-1">Actions</th>
              </tr>
            </thead>
            <tbody className="projectlist">
              <tr className="bg-white hover:bg-gray-50 rounded">
                <td className="px-1.5 py-1">1</td>
                <td className="px-1.5 py-1">CRM for Construction</td>
                <td className="px-1.5 py-1">2025-04-01</td>
                <td className="px-1.5 py-1">2025-06-30</td>
                <td className="px-1.5 py-1">John Doe</td>
                <td className="px-1.5 py-1">John Doe</td>
                <td className="px-1.5 py-1 flex space-x-2">
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </span>
                  <span className="text-red-600 hover:text-red-800 cursor-pointer">
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal using react-modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleModalToggle}
        className="relative bg-white rounded-lg shadow-xl p-4 w-full max-w-2xl max-h-[85vh] overflow-y-auto mx-auto my-4"
        overlayClassName="fixed inset-0 bg-black-100 bg-opacity-40 flex items-center justify-center px-3"
        contentLabel="Create New Task"
        shouldCloseOnOverlayClick={true} // Ensures clicking overlay closes modal
        shouldCloseOnEsc={true} // Ensures pressing Esc closes modal
      >
        <button
          onClick={handleModalToggle}
          className="absolute top-1 right-1 text-gray-500 hover:text-gray-700 text-base"
        >
          ×
        </button>

        <h3 className="text-base font-medium text-gray-900 mb-3">
          Create New Task
        </h3>

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-medium text-gray-700">
                Project Name
              </label>
              <input
                type="text"
                required
                className="mt-0.5 w-full px-1.5 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700">
                Project Code
              </label>
              <input
                type="text"
                required
                readOnly
                value={projectCode}
                onChange={(e) => setProjectCode(e.target.value)}
                className="mt-0.5 w-full px-1.5 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700">
                Project Manager
              </label>
              <input
                type="text"
                required
                className="mt-0.5 w-full px-1.5 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                required
                className="mt-0.5 w-full px-1.5 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                required
                className="mt-0.5 w-full px-1.5 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
              />
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["Country", "State", "City", "Area"].map((field) => (
              <div key={field}>
                <label className="block text-[10px] font-medium text-gray-700">
                  {field}
                </label>
                <input
                  type="text"
                  required
                  className="mt-0.5 w-full px-1.5 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
                />
              </div>
            ))}
          </div>

          {/* Client Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-medium text-gray-700">
                Client Name
              </label>
              <input
                type="text"
                required
                className="mt-0.5 w-full px-1.5 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700">
                Client Email
              </label>
              <input
                type="email"
                required
                className="mt-0.5 w-full px-1.5 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700">
                Client Contact
              </label>
              <input
                type="tel"
                required
                className="mt-0.5 w-full px-1.5 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700">
                Estimated Budget
              </label>
              <input
                type="number"
                required
                className="mt-0.5 w-full px-1.5 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-1 mt-3">
            <button
              type="button"
              onClick={handleModalToggle}
              className="px-2 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 text-xs transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
