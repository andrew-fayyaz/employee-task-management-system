# 👨‍💼 Employee Task Management Dashboard

A modern **Employee Task Management Dashboard** built with **React.js** that allows administrators to create and assign tasks to employees while employees can monitor and manage their assigned tasks through an intuitive dashboard.

This project focuses on implementing **React Context API for global state management** and **Browser Local Storage for data persistence**, without relying on an external backend or database.

---

## ✨ Features

### 🔐 Authentication

* Admin and Employee login
* Role-based dashboard access
* Persistent login using Local Storage
* Logout functionality
* Separate Admin and Employee experiences

### 👨‍💼 Admin Dashboard

* View employee information
* Create and assign tasks to employees
* Assign tasks by employee
* Track task statistics
* Manage employee tasks

### 👨‍💻 Employee Dashboard

* View logged-in employee information
* View assigned tasks
* Track task statistics
* View active, new, completed, and failed tasks
* Manage assigned tasks

### 📊 Task Management

Tasks are categorized into different states:

* 🆕 New Tasks
* ⚡ Active Tasks
* ✅ Completed Tasks
* ❌ Failed Tasks

Task counters are automatically updated when tasks are created or their status changes.

### 💾 Local Data Persistence

The application uses **Local Storage** to persist:

* Employee data
* Admin data
* Tasks
* Task statistics
* Logged-in user information

This means data remains available even after refreshing the browser.

### 🌐 Context API

The project uses **React Context API** to provide shared application state across components.

This helps avoid unnecessary prop drilling and allows components such as:

* Admin Dashboard
* Employee Dashboard
* Task List
* Task Counters
* Header
* Create Task

to access and react to shared data changes.

---

## 🛠️ Tech Stack

| Technology       | Purpose                      |
| ---------------- | ---------------------------- |
| ⚛️ React.js      | Frontend UI                  |
| 🟨 JavaScript    | Application logic            |
| 🎨 Tailwind CSS  | Styling and responsive UI    |
| 🔄 Context API   | Global state management      |
| 💾 Local Storage | Client-side data persistence |
| ⚡ Vite           | Development & build tooling  |
| 🧩 HTML5         | Application structure        |
| 🎯 CSS3          | Additional styling           |

---

## 🏗️ Application Architecture

The application follows a simple and maintainable React architecture.

```text
                    ┌─────────────────────┐
                    │      React App      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    AuthProvider     │
                    │    Context API      │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
                ▼                             ▼
       ┌─────────────────┐          ┌─────────────────┐
       │ Admin Dashboard │          │Employee Dashboard│
       └────────┬────────┘          └────────┬────────┘
                │                            │
                ▼                            ▼
       ┌─────────────────┐          ┌─────────────────┐
       │  Create Tasks   │          │   Task Lists    │
       └────────┬────────┘          └────────┬────────┘
                │                            │
                └─────────────┬──────────────┘
                              ▼
                    ┌─────────────────────┐
                    │    Local Storage    │
                    │ employees / admin   │
                    │ loggedInUser        │
                    └─────────────────────┘
```

---

## 🧠 State Management

One of the main goals of this project was to understand how **Context API** can be used to manage shared application state.

The `AuthProvider` maintains the employee and admin data and exposes it through `AuthContext`.

```jsx
<AuthContext.Provider
  value={{
    ...userData,
    updateEmployees,
  }}
>
  {children}
</AuthContext.Provider>
```

Components can then consume the shared state using:

```jsx
const { employees, updateEmployees } = useContext(AuthContext);
```

This allows changes made in one part of the application to be reflected throughout the application without manually passing data through multiple component levels.

---

## 💾 Local Storage

Local Storage is used as the application's lightweight persistence layer.

Employee and admin data are stored as JSON:

```js
localStorage.setItem(
  "employees",
  JSON.stringify(employees)
);
```

Data can then be retrieved with:

```js
const employees = JSON.parse(
  localStorage.getItem("employees")
);
```

The project follows the principle:

```text
React State
     │
     │ Live UI updates
     ▼
Components
     │
     │ Persist changes
     ▼
Local Storage
```

React state handles the **live application state**, while Local Storage keeps the data available after a page refresh.

---

## 🔑 Demo Credentials

The project currently uses seeded credentials for demonstration purposes.

### 👨‍💼 Admin

```text
Email: admin@example.com
Password: 123
```

### 👨‍💻 Employee

```text
Email: employee1@example.com
Password: 123
```

Additional employee accounts are available in the seeded application data.

> ⚠️ These credentials are intended only for demonstration purposes. This project does not implement production-grade authentication or password security.

---

## 🔄 How Task Creation Works

When an administrator creates a task, the application:

1. Collects the task information from the form.
2. Creates a new task object.
3. Finds the assigned employee.
4. Adds the task to the employee's task list.
5. Updates the employee's task counters.
6. Updates React Context state.
7. Saves the updated employees to Local Storage.
8. React automatically re-renders the affected components.

Conceptually:

```text
Create Task
     │
     ▼
Create Task Object
     │
     ▼
Find Employee
     │
     ▼
Add Task
     │
     ▼
Update Task Counts
     │
     ├───────────────┐
     ▼               ▼
Context API     Local Storage
     │               │
     ▼               ▼
Live UI          Persistence
```

---

## 📊 Task Status System

Each task contains status properties:

```js
{
  active: true,
  newTask: true,
  completed: false,
  failed: false
}
```

Based on these values, the appropriate task component is rendered:

```text
active      → AcceptTask
newTask     → NewTask
completed   → CompleteTask
failed      → FailedTask
```

This provides a simple way to control task state and render the appropriate UI.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### 2. Navigate to the project

```bash
cd YOUR_REPOSITORY
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 📦 Build for Production

Create a production build using:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 🎯 Learning Objectives

This project was built to practice and demonstrate several important React concepts:

* React component architecture
* Functional components
* Props
* State management with `useState`
* React Context API
* `useContext`
* Controlled forms
* Event handling
* Conditional rendering
* Array methods such as `map()` and `find()`
* Immutable state updates
* Local Storage
* Data persistence
* Role-based rendering
* Reusable components
* Task management patterns
* React application structure

---

## 🔮 Future Improvements

Although the application currently uses Local Storage, the architecture can be extended to a real backend in the future.

Potential improvements include:

* 🔐 JWT-based authentication
* 🗄️ Database integration
* 🌐 REST API integration
* 👤 User registration
* 🔑 Password hashing and secure authentication
* 📧 Email notifications
* 🔔 Real-time notifications
* 📱 Improved mobile responsiveness
* 🔎 Task search and filtering
* 📅 Task deadlines and reminders
* 📈 Advanced analytics and charts
* 🌙 Dark/Light theme support
* 🧪 Unit and integration testing

---

## 💡 Why Context API + Local Storage?

This project intentionally avoids a backend to keep the application simple while demonstrating how a React application can manage and persist shared data.

**Context API** provides:

* Centralized application state
* Reduced prop drilling
* Shared data between components
* Simple state management for a small-to-medium application

**Local Storage** provides:

* Persistent browser-side data
* Data retention after page refresh
* A simple alternative to a database for a frontend-only project

Together, they provide a lightweight architecture suitable for a demonstration or learning project.

---

## ⚠️ Important Note

This project is intended for **educational and portfolio purposes**.

Because employee information and authentication data are stored in browser Local Storage, it should **not be considered secure for production use**.

For a production application, authentication, authorization, passwords, and business data should be handled by a secure backend and database.

---

## 👨‍💻 Author

**Andrew Fayyaz**

Senior Front-End Developer specializing in modern web technologies and React-based applications.

### Technologies & Interests

* React.js
* Next.js
* JavaScript
* TypeScript
* Tailwind CSS
* Redux
* Context API
* REST APIs
* Modern Front-End Architecture

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

### 📄 License

This project is available for educational and portfolio purposes.
