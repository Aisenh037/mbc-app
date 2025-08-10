# --- Build frontend ---
FROM node:18-bullseye as frontend
WORKDIR /app
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm ci
COPY frontend ./frontend
RUN cd frontend && npm run build

# --- Install backend ---
FROM node:18-bullseye as backend
WORKDIR /app
COPY backend/package*.json ./backend/
RUN cd backend && npm ci

# --- Final image ---
FROM node:18-bullseye
ENV NODE_ENV=production
WORKDIR /app

# Copy backend
COPY --from=backend /app/backend ./backend

# Copy frontend build into expected path
COPY --from=frontend /app/frontend/build ./frontend/build

# Copy source code (controllers, routes, models)
COPY backend ./backend

# Expose port
EXPOSE 5000

# Start server
WORKDIR /app/backend
CMD ["node", "index.js"]