# Health Information Management System

This is a Full-Stack Health Information Management System built with:

- 🐍 Django + Django REST Framework (Backend API)
- ⚛️ React.js (Frontend SPA)
- 🚀 PostgreSQL (Database)
- ☁️ Deployed with Render (Backend) and Vercel (Frontend)

The system allows administrators to:
- Manage Health Programs
- Register and Manage Clients
- Enroll Clients into Programs
- View Client Profiles
- Perform CRUD operations (Create, Read, Update, Delete)

---

## 📂 Project Structure

```bash
/ (root)
  ├── api/                # Django app for clients, programs, enrollments
  ├── healthinfo          # Django main app
  ├── healthinfo-frontend/            # React app (frontend)
  ├── manage.py
  ├── requirements.txt     # Backend dependencies
  ├── Procfile             # Gunicorn production server config
  ├── render.yaml          # Render deployment configuration
  ├── .env                 # Backend environment variables (local)
  └── README.md            # This documentation
```

---

## ⚙️ Technologies Used

| Stack          | Details                             |
|----------------|-------------------------------------|
| Backend        | Django 4.x, Django REST Framework    |
| Authentication | SimpleJWT (Access/Refresh Tokens)    |
| Frontend       | React 18, React Router               |
| Database       | PostgreSQL (Render-hosted)           |
| Deployment     | Render (Backend), Vercel (Frontend)  |
| Hosting        | Vercel (static frontend hosting)     |
| API Docs       | Swagger (drf-yasg)                   |

---

## 🚀 Live Demo

| Service         | Link |
|-----------------|------|
| Frontend (React) | https://health-info-bice.vercel.app/ |
| Backend (API)   | https://health-info.onrender.com/api |

---

## 🔑 Environment Variables

### Backend `.env` (local)

```bash
SECRET_KEY=your-secret-key
DEBUG=False
ALLOWED_HOSTS=your-backend-name.onrender.com
DATABASE_URL=postgresql://user:password@hostname:port/dbname
CORS_ALLOWED_ORIGINS=https://your-frontend-name.vercel.app
```

### Frontend `.env.production`

```bash
REACT_APP_API_URL=https://your-backend-name.onrender.com/api/
```

---

## 🛠️ Setup Instructions

### Backend (Django)

1. Clone the repository:
    ```bash
    git clone https://github.com/jeff-wamugi/Health_Info.git
    cd health-info-system
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate    # Mac/Linux
    venv\Scripts\activate       # Windows
    ```

3. Install backend dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run migrations:
    ```bash
    python manage.py migrate
    ```

5. Create a superuser:
    ```bash
    python manage.py createsuperuser
    ```

6. Run the server locally:
    ```bash
    python manage.py runserver
    ```

---

### Frontend (React)

1. Move into the frontend folder:
    ```bash
    cd healthinfo-frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` or `.env.production` file:
    ```bash
    REACT_APP_API_URL=http://127.0.0.1:8000/api/
    ```

4. Start the React app locally:
    ```bash
    npm start
    ```

---

## 📆 Production Deployment

### Backend (Render)

- Create a **Web Service** on [Render](https://render.com)
- Connect to GitHub Repo
- Set:
  - **Build Command:** `pip install -r requirements.txt`
  - **Start Command:** `gunicorn healthinfo.wsgi:application`
  - **Environment Variables**: (from `.env`)

- Attach PostgreSQL Database through Render.

✅ Render auto-builds and deploys backend from GitHub.

---

### Frontend (Vercel)

- Create a **Project** on [Vercel](https://vercel.com)
- Connect to GitHub Repo
- Set:
  - **Root Directory:** `/frontend`
  - **Build Command:** `npm run build`
  - **Output Directory:** `build`
  - **Framework Preset:** React
- Set Environment Variable `REACT_APP_API_URL` in Vercel dashboard.

✅ Vercel auto-builds and deploys frontend from GitHub.

---

## ✨ Features

- Secure Authentication (JWT)
- Program Management (CRUD)
- Client Management (CRUD, Search)
- Enrollments Management (CRUD)
- View Client Profiles with Enrollments
- Fully Responsive Frontend (React.js)
- Production-ready Deployment (Render + Vercel)
- Swagger API Documentation (`/swagger/`)

---

## 📜 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/clients/` | Create a new client |
| GET    | `/api/clients/` | List/search clients |
| GET    | `/api/clients/:id/profile/` | View client's profile |
| POST   | `/api/programs/` | Create a program |
| GET    | `/api/programs/` | List programs |
| POST   | `/api/enrollments/` | Enroll a client |
| DELETE | `/api/enrollments/:id/` | Remove an enrollment |

✅ Authentication required: `Bearer access_token`

---

## 🧪 Testing

Run Django unit tests:

```bash
python manage.py test
```

✅ Tests for:
- Client creation
- Program creation
- Enrollment creation
- Client profile retrieval

---

## 🛡️ Security Checklist for Production

- [x] `DEBUG=False`
- [x] `SECRET_KEY` secured in environment
- [x] CORS properly configured
- [x] SSL/TLS (automatic with Vercel and Render)
- [x] Gunicorn server for production
- [x] Static files served with WhiteNoise

---

## 📌 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributions

Pull requests and contributions are welcome!  
Please fork the repository and submit a PR.

---

## 📢 Contact

- Email: jefftumuti@gmail.com
- LinkedIn: https://www.linkedin.com/in/jefferson-wamugi-5b0781186
- GitHub: https://github.com/jeff-wamugi

---

# 🎯 Final Words

Thank you for checking out the **Health Information Management System**!  
Built with ❤️ using Django, React, Render, and Vercel.

