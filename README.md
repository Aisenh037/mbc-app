<h1 align="center">
    MBC Portal - NIT Bhopal (Department of MBC)
</h1>

<h3 align="center">
Unified portal for department administration, classes, students and faculty.<br>
Attendance, assessment, notices and complaints management in one place.
</h3>

<br>

# Tech Stack

- Frontend: React.js, Material UI, Redux
- Backend: Node.js, Express.js
- Database: MongoDB

# Local Development (Single App)

1. Create `/backend/.env` with:

```
MONGO_URL=mongodb://127.0.0.1/mbc_portal
PORT=5000
```

2. Install deps and run in two terminals:

```
cd /workspace/backend
npm install
npm run dev
```

```
cd /workspace/frontend
npm install
npm start
```

Frontend runs at `http://localhost:3000`, API at `http://localhost:5000/api` (dev proxy is configured).

# Production Build and Run (Single Server)

- Build frontend and start server:

```
cd /workspace/backend
npm install
npm run build
npm start
```

- The server will serve the React build and expose APIs under `/api`.

# Deployment

- You can deploy the single app using Docker or on services like Render/Fly/Heroku. See `Dockerfile` at repo root.

# Notes

- Roles: Admin, Teacher, Student
- To re-enable deletion features, see notes inside the relevant Redux handle files.

