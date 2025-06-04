# devhub-hello-world-starter Documentation

This is a basic Hello World application using Node.js and TypeScript for devhub-hello-world-starter. It serves a static HTML file and provides an API endpoint to retrieve different "Hello World" messages in various languages.

## Prerequisites

Ensure you have Node.js installed on your system. You can download and install it from [Node.js official website](https://nodejs.org/).

## Installation

Clone the repository to your local machine and navigate into the project directory:

```
git clone https://gitlab.cee.redhat.com/skosina-test/devhub-hello-world-starter.git
cd hello-world
```

Once you are in the project directory, install the required npm packages:

```
npm install
```

## Building the Project
The project uses TypeScript, which needs to be compiled to JavaScript before running. To build the project, run:

```bash
npm run build
```

This command compiles the TypeScript files in the src directory and outputs the JavaScript files to the dist directory.

## Starting the Server
To start the server, use:

```bash
npm start
```

This will launch the Node.js server on port 8000. You can access the web application by navigating to http://localhost:8000 in your web browser.


## API Usage


The application includes an API endpoint to retrieve a random "Hello World" message. Access this endpoint at:

```bash
GET http://localhost:8000/api/message
```

This will return a JSON object with a greeting in a randomly selected language.