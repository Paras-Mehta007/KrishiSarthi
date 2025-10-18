# KrishiSarthi - AI/ML-based Smart Agriculture Platform

![React](https://img.shields.io/badge/React-17-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-16-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4-yellow?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-green)
![AI/ML](https://img.shields.io/badge/AI-Enabled-lightgrey)

**KrishiSarthi** is a **full-stack, AI/ML-powered agriculture platform** designed to help farmers make data-driven decisions. Using **machine learning models**, it provides crop recommendations, pest and disease alerts, and yield predictions.  

The system includes a **React frontend**, **Node.js + Express backend**, and **MongoDB** database for storing farm data.

---

## 🚀 Key Features

| Feature | Icon | Description |
|---------|------|-------------|
| Crop Recommendations | 🌱 | Suggests best crops based on soil and climate data |
| Pest & Disease Detection | 🐛 | Uses ML to alert farmers about crop risks |
| Yield Prediction | 📈 | Estimates expected crop yield based on input data |
| Real-time Dashboard | 📊 | Interactive React.js frontend for monitoring farm stats |
| Data Storage | 🗄️ | MongoDB database for farm and user data |
| Scalable Backend | ⚡ | Node.js + Express handles API requests efficiently |

---

## 🏗️ Architecture

![KrishiSarthi Architecture](assets/architecture.png)

**Flow:**
- **Frontend (React.js)** → User input, displays dashboard, sends API requests  
- **Backend (Node.js + Express)** → Handles requests, runs ML model predictions, interacts with MongoDB  
- **Database (MongoDB)** → Stores farmer profiles, crop data, historical inputs  
- **ML Model** → Predicts crop suitability, pest risks, and yield  

---

## 🛠️ Technologies Used

- **Frontend:** React.js  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  
- **Machine Learning:** Python ML model (TensorFlow/PyTorch)  
- **API Communication:** RESTful API  
- **Styling & UX:** CSS, HTML  

---

## 💻 Installation & Usage

### **Frontend**
```bash
cd client
npm install
npm start
