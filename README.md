# Admin Panel (Backend)

This is the backend server for the **Admin Panel** project built using **Node.js**, **Express**, and **MongoDB**. It handles user authentication (with JWT) and task CRUD operations.

🔗 **Frontend Repo:** [Admin_Panel_Frontend](https://github.com/MadhavR97/Admin_Panel_Frontend)  
🌐 **Live Frontend:** [Live Demo](https://admin-panel-frontend-iota-nine.vercel.app/)

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- CORS

---

## 📦 API Endpoints

### 🧑‍💻 **Auth Routes**
- `POST /register` → Register a new admin
- `POST /login` → Admin login (returns JWT)

### ✅ **Task Routes**
- `POST /tasks/create` → Create a new task
- `GET /tasks` → Get all tasks for the logged-in user
- `DELETE /tasks/:id` → Delete a specific task

✅ All task routes are protected and require a valid JWT token.

---

## 🛠️ Setup Instructions

```bash
git clone https://github.com/MadhavR97/Admin_Panel_Backend
cd Admin_Panel_Backend
npm install
