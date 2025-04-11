import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";

export const ProjectModal = ({ show, onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Project Data:", data);
    // TODO: Send to backend
    onClose(); // Close modal after submit
    reset();
  };

  return (
    <Dialog open={show} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <Dialog.Panel className="bg-white rounded-xl p-6 w-full max-w-3xl shadow-lg">
        <Dialog.Title className="text-xl font-semibold mb-4">Create New Project</Dialog.Title>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Project Name</label>
            <input
              {...register("projectName", { required: "Project name is required" })}
              className="w-full border p-2 rounded"
            />
            {errors.projectName && <span className="text-red-500 text-xs">{errors.projectName.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium">Start Date</label>
            <input
              type="date"
              {...register("startDate", { required: "Start date is required" })}
              className="w-full border p-2 rounded"
            />
            {errors.startDate && <span className="text-red-500 text-xs">{errors.startDate.message}</span>}
          </div>

          {/* Add more fields like End Date, Project Manager, Location, Client, Budget, etc. */}

          <div className="col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save Project
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};
