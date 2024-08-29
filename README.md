# React State Introduction

## Getting Started

- Run `npm install` to install dependencies
- Run `npm run dev` to start the dev server
- Open `http://localhost:5173` in a browser

### Dev Container

# test

There is a dev container preconfigured with Node 20 on linux. If you would like to use the dev container:

- Install the [Dev Containers Plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code
- Open the command pallet (Cntrl / Command + Shift + P) in VS Code
- Select "Dev Container: Reopen in Container"

For more information on using dev containers see this [tutorial](https://atlas-jswank.github.io/blog/dev-containers/) or the [official documentation](https://containers.dev/)

### Important Files/Folders

- `index.html`: This is the html file that appears when the dev server starts up.
- `src`: All javascript/jsx code goes in this directory
- `src/assets`: Any static assets such as images that are loaded through the javascript files goes here.
- `src/app.jsx`: The is the main app component for the entire app.

### Important Commands

- `npm run dev`: Starts dev server with Hot Module Reloading on port 5173. Anytime a file changes, the changes will automatocally be reflected in the browser
- `npm run lint`: Run the lint checker with eslint to check for known linting issues
- `npm run format`: Run prettier to automatically reformat files
