# Modern MERN Stack E-Commerce Project

A full-featured, professional e-commerce platform built with the MERN (MongoDB, Express, React, Node.js) stack. This project includes a customer-facing frontend, a comprehensive admin dashboard, and a robust RESTful API backend.

## 🚀 Features

### Customer Frontend
- **User Authentication**: Secure login/signup with JWT and Refresh Tokens.
- **Product Exploration**: Advanced filtering, sorting, and pagination.
- **Wishlist & Cart**: Add to wishlist, manage cart items with real-time updates.
- **Reviews & Ratings**: Rate and review products with total rating calculation.
- **Checkout**: Seamless checkout process with Razorpay/Stripe integration.
- **Order Tracking**: View order history and status.
- **Profile Management**: Update personal info and delivery addresses.

### Admin Dashboard
- **Analytics**: Monthly income and order count reports with charts.
- **Product Management**: CRUD operations for products, categories, brands, and colors.
- **Order Management**: View and update status of all customer orders.
- **Customer Management**: View and manage registered users (block/unblock).
- **Blog Management**: Full CMS for managing marketing blogs and categories.
- **Coupon System**: Create and manage discount coupons.
- **Enquiry Handling**: Manage customer inquiries and contacts.

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux Toolkit, React Router, Axios, Ant Design, Bootstrap.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose).
- **Authentication**: JWT (JSON Web Tokens) with Refresh Token rotation.
- **File Uploads**: Cloudinary integration for image management.
- **Payments**: Razorpay / Stripe.
- **Email**: Nodemailer for password resets.

## 📁 Folder Structure

```text
├── Admin/                # Admin Dashboard (React)
├── Frontend/             # Customer Website (React)
├── Backend/              # RESTful API (Node/Express)
│   ├── config/           # DB & Token configurations
│   ├── controller/       # Business logic (Modularized)
│   ├── middlewares/      # Auth & Error handling
│   ├── models/           # Mongoose Schemas
│   ├── routes/           # Express Routes
│   └── utils/            # Utility functions (Cloudinary, etc.)
└── README.md
```

## ⚙️ Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed or MongoDB Atlas URI
- Cloudinary Account
- Razorpay / Stripe Account

### Backend Setup
1. Navigate to `Backend/`
2. Run `npm install`
3. Create a `.env` file and add:
   ```env
   PORT=5000
   MONGO_URL=your_mongodb_uri
   JWT_SECRET=your_secret
   CLOUD_NAME=your_cloud_name
   API_KEY=your_api_key
   SECRET_KEY=your_cloudinary_secret
   MAIL_USER=your_email
   MAIL_PASS=your_email_password
   FRONTEND_URL=http://localhost:3000
   ```
4. Run `npm start` or `npm run dev`

### Frontend & Admin Setup
1. Navigate to `Frontend/` or `Admin/`
2. Run `npm install`
3. Update `.env` with `REACT_APP_API_URL=http://localhost:5000/api`
4. Run `npm start`

## 📄 License
This project is licensed under the MIT License.
