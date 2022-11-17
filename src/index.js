
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { App } from './components/App';
import './stylesheets/App.scss';
import ProjectDetails from './components/ProjectDetail';
import ErrorPage from "./components/Error-page";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "project/:projectId",
    element: <ProjectDetails />,
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);