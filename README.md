# Magoka Food Delivery App

Full-stack food delivery application with React frontend and Express.js backend.

## Project Structure

- `backend/` - Express.js API server
- `magoka.food/` - React frontend application

## Local Development

### Backend Setup
```bash
cd backend
npm install
npm start
```
Backend runs on http://localhost:3000

### Frontend Setup
The frontend is served by the backend server. Just start the backend and access http://localhost:3000

## Deployment

### Frontend (Vercel)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy frontend:
```bash
cd magoka.food
vercel
```

3. Update `vercel.json` with your backend URL:
```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://your-backend-url.com/api/:path*"
    }
  ]
}
```

### Backend Options

Deploy the backend to one of these platforms:

**Option 1: Vercel (Serverless)**
- Convert Express routes to Vercel serverless functions
- Deploy with `vercel` CLI from backend folder

**Option 2: Render/Railway (Easiest)**
- Push backend code to GitHub
- Connect repository to Render.com or Railway.app
- Auto-deploys on push

**Option 3: VPS/Dedicated Server**
- SSH into server
- Clone repo
- Install dependencies and run with PM2

## Environment Variables

Backend requires:
- `PORT` - Server port (default: 3000)
- `FRONTEND_PATH` - Path to frontend folder
- `JWT_SECRET` - Secret for JWT tokens

## Admin Access

Default admin credentials:
- Email: admin@magoka.food
- Password: magoka@admin123

Login at: http://localhost:3000/control/login
