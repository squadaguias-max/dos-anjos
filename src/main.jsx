import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { SiteApp } from "./SiteApp";
import "./styles/index.css";

const root = document.getElementById("root");
const application = <StrictMode><SiteApp /></StrictMode>;

if (root.hasChildNodes()) hydrateRoot(root, application);
else createRoot(root).render(application);
