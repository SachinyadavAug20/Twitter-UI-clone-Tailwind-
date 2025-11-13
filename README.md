# Tailwind CSS Twitter Clone

This project is a Twitter-like social media feed layout created as a learning .The primary focus of this project is to practice skills in using Tailwind CSS for modern web design. The backend is powered by Express.js and uses EJS as a templating engine.

## Demo

<p align="center">
  <img src="css/Assets/demo.gif" alt="Project Demo GIF" width="80%">
</p>

## Features

-   **Responsive Layout:** A three-column layout that adapts to different screen sizes.
-   **Modular Design:** The UI is broken down into reusable components using EJS partials.
-   **Express Backend:** A simple Express.js server to render the main page.
-   **Tailwind CSS Styling:** The entire UI is styled using the Tailwind CSS utility-first framework.

## Technologies Used

-   **Frontend:**
    -   HTML
    -   Tailwind CSS
    -   EJS (Embedded JavaScript templates)
-   **Backend:**
    -   Node.js
    -   Express.js
-   **Development:**
    -   `@tailwindcss/cli`

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

1.  **Compile Tailwind CSS:**
    To watch for changes in the CSS and automatically recompile, run:
    ```bash
    npm run tailwind
    ```

2.  **Start the server:**
    In a separate terminal, start the Express server:
    ```bash
    node main.js
    ```
    Or for development using Vite:
    ```bash
    npm run dev
    ```

3.  **Open in your browser:**
    Navigate to `http://localhost:3000`.

## Project Structure

```
.
├── css/
│   ├── input.css       # Main Tailwind CSS file
│   └── output.css      # Compiled CSS
├── ejs_modules/
│   ├── index.ejs       # Main EJS template
│   ├── left.html       # Left sidebar partial
│   ├── center.html     # Center content partial
│   └── right.html      # Right sidebar partial
├── main.js             # Express server entry point
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

