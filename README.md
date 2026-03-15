# Portfolio V 2.0 🚀

A modern, high-performance personal portfolio website built with the **MERN stack** (React, Express, Node.js). This version features smooth animations, a responsive design, and an integrated contact system.

## 🌟 Features

- **Dynamic Hero Section**: Engaging introduction with a professional aesthetic.
- **Interactive Experience & Education**: Detailed timeline of professional growth and academic background.
- **Project Showcase**: A curated list of projects with descriptions and links.
- **Advanced Skills Visualization**: Categorized technical skills using modern UI components.
- **Contact System**: Fully functional contact form powered by **Nodemailer**.
- **Smooth Animations**: Powered by **Framer Motion** for a premium feel.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Modern UI/UX**: Built with **React 19**, **Vite**, and **Swiper** for carousels.

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern UI library for building components.
- **Vite**: Ultra-fast build tool and development server.
- **Framer Motion**: Production-ready motion library for animations.
- **Swiper**: For touch-enabled, responsive sliders/carousels.
- **Vanilla CSS**: Custom, high-performance styling.

### Backend
- **Node.js**: JavaScript runtime for the server.
- **Express 5**: Fast, unopinionated, minimalist web framework.
- **Nodemailer**: Email handling for the contact form.
- **Dotenv**: Environment variable management.
- **CORS**: Cross-Origin Resource Sharing for frontend-backend communication.

## 📂 Project Structure

```text
Portfolio-V-2.0/
├── frontend/             # React application (Vite)
│   ├── src/
│   │   ├── components/   # UI Sections (About, Experience, etc.)
│   │   └── index.css     # Global styles
│   └── package.json
├── backend/              # Node/Express server
│   ├── server.js         # API and Email configuration
│   └── package.json
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/yeswanthyes/Portfolio-V-2.0.git
cd Portfolio-V-2.0
```

### 2. Setup Backend
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend` folder and add your credentials:
```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

## 📧 Contact
For any queries, feel free to reach out via the contact form on the portfolio or email me at [your-email@example.com].

---
*Created with ❤️ by Yeswanth*
