# Hello from Node.js

A minimal Express application that displays a greeting in your browser.

## Run locally

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. In this folder, install the dependencies:

   ```sh
   npm install
   ```

3. Start the app:

   ```sh
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy on Render

1. Push this project to a GitHub repository.
2. In Render, choose **New +** → **Web Service** and connect the repository.
3. Set **Build Command** to `npm install` and **Start Command** to `npm start`.
4. Create the web service. Render will provide a public URL for the app.

The app listens on the port supplied by Render, so no port setting is needed in the dashboard.
