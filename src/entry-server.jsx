import { renderToString } from "react-dom/server";
import { SiteApp } from "./SiteApp";
import "./styles/index.css";

export function render() {
  return renderToString(<SiteApp />);
}
