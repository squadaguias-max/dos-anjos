import { build } from "vite";
import { readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const temporaryDirectory = resolve(".ssr-temp");

await build({
  logLevel: "error",
  build: {
    ssr: "src/entry-server.jsx",
    outDir: temporaryDirectory,
    emptyOutDir: true,
    minify: false,
  },
});

const serverEntry = pathToFileURL(resolve(temporaryDirectory, "entry-server.js")).href;
const { render } = await import(`${serverEntry}?version=${Date.now()}`);
const applicationHtml = render();
const outputFile = resolve("dist/index.html");
const template = await readFile(outputFile, "utf8");
const rendered = template.replace('<div id="root"></div>', `<div id="root">${applicationHtml}</div>`);

await writeFile(outputFile, rendered, "utf8");
await rm(temporaryDirectory, { recursive: true, force: true });
