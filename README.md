# MovieNest
MovieNest is a movie discovery app built with React, Material-UI (MUI), and Redux for state management. It features movie search, favorites management, authentication, and route guards. The app is fully responsive and optimized for a seamless user experience.

## Table of Contents
1. [📸 Demo](#-demo)
2. [🚀 Getting Started](#-getting-started)
3. [🔐 Authentication](#-authentication)

## 📸 Demo
<div>
  <img src="https://github.com/e-khalifa/MovieNest/blob/main/public/screenshot.jpeg">
</div>
<div>
  <img src="https://github.com/e-khalifa/MovieNest/blob/main/public/demo.gif">
</div>

## 🚀 Getting Started
### Prerequisites
- Install **Node.js** and **npm**.
- Clone the repository:
  ```sh
  git clone https://github.com/e-khalifa/MovieNest.git
  cd movienest
  ```

### Install Dependencies
```sh
npm install
```

### Run the Development Server
```sh
npm run dev
```
This will run the app on [http://localhost:5173](http://localhost:5173).

### Start the JSON Server
For mock user data:
```sh
npx json-server --watch users.json --port 3000
```
This will serve the users' data at [http://localhost:3000](http://localhost:3000).

## 🔐 Authentication
MovieNest uses authentication and route guards to protect certain features. Use the following mock credentials to log in:

**Login Details:**
```
Email: user@yahoo.com
Password: PassTest76
```

