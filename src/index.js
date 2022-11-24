
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

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App/>,
  },
  {
    path: "project/:projectId",
    element: <ProjectDetails />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);