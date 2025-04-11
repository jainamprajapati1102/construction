import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { Layout } from "./Layout";
import { ProjectCreateComponent } from "./components/Project_management/ProjectCreateComponent";
import { TaskComponent } from "./components/Project_management/TaskComponent";
import { MilestonesComponent } from "./components/Project_management/MilestonesComponent";
import { SignUpComponent } from "./components/Login/SignUpComponent";
import { SignInComponent } from "./components/Login/SignInComponent";
import { EngineerComponent } from "./components/Engineer/EngineerComponent";
import "bootstrap/dist/css/bootstrap.css";
import { DashboardComponent } from "./components/DashboardComponent/DashboardComponent";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/signup",
//         element: <SignUpComponent />,
//       },
//       {
//         path: "/signin",
//         element: <SignInComponent />,
//       },
//       {
//         path: "/engineer",
//         element: <EngineerComponent />,
//       },
//       {
//         path: "/projectcreate",
//         element: <ProjectCreateComponent />,
//       },
//       {
//         path: "/projectcreate",
//         element: <ProjectCreateComponent />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignUpComponent />} />
        <Route path="signin" element={<SignInComponent />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<DashboardComponent />} />
          <Route path="engineer" element={<EngineerComponent />} />
          <Route path="projectcreate" element={<ProjectCreateComponent />} />
          <Route path="task" element={<TaskComponent />} />
          <Route path="milestone" element={<MilestonesComponent />} />
        </Route>
      </Routes>
      <App />
    </BrowserRouter>
  </StrictMode>
);
