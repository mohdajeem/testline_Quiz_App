# Testline MERN Quiz App

Welcome to the Testline MERN Quiz App! This is a web-based quiz application developed as part of our innovative learning platform. The app is built with the MERN stack (MongoDB, Express, React, and Node.js) and includes engaging gamification elements to make the quiz experience both fun and educational.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Screenshots & Walkthrough](#screenshots--walkthrough)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Testline MERN Quiz App is designed to test users on their knowledge of genetics and evolution, among other topics. It features an interactive quiz flow where users answer multiple-choice questions. Each correct answer earns points, and a final results summary provides feedback on performance. In case the backend API is unavailable, the app falls back to temporary quiz data to ensure a seamless user experience.

## Features

- **Interactive Quiz Flow:** Start the quiz, answer multiple-choice questions, and receive real-time feedback.
- **Gamification:** Earn points for correct answers with visual cues such as colored circles and borders.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Robust Data Integration:** Fetches quiz data from an Express API backed by MongoDB, with a fallback to temporary data.
- **Modern UI:** Built using React with Vite for a fast, modern development experience.

## Project Structure

The project is divided into two main parts: the backend and the frontend.


## Setup Instructions

### Backend Setup

1. **Navigate to the backend folder:**

   ```bash
   cd backend
2. **Install dependencies:**
   
       cd backend
3. **Configure MongoDB:**
    Create a .env file in the backend directory and add your MongoDB connection string:

       MONGO_URI=mongodb://localhost:27017/quizDB
4.**Start the backend server:**


    npm start

### Frontend Setup
1. **Navigate to the frontend directory:**

        cd frontend

2. **Install dependencies:**

        npm install

3. **Start the development server:**

       npm run dev









