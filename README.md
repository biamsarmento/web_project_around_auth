# 🔐 Project Around Auth

## 📖 About the Project

**Around Auth** is an interactive photo-sharing platform with **user authentication**. Users can **create accounts, log in, and manage their profiles**, including posting and interacting with photos.

### Features:
- **User Authentication**: Users can **register, log in, and log out** securely.  
- **Protected Routes**: Only authenticated users can access the main application.  
- **LocalStorage Token Storage**: Ensures users stay logged in even after refreshing the page.  
- **Profile Management**: Users can edit their **name and description**.  
- **Photo Gallery**: Users can **add, delete, and like** posts. Likes are highlighted when activated.  
- **Pop-ups**: Can be closed by clicking outside or pressing the **Esc key**.  
- **Form Validation**: The "Save" button is enabled only when all fields are valid.  
- **React & State Management**: Components are structured using **React**, with **Context API** for shared data and **Refs** for handling user input.  
- **API Integration**: The project communicates with a **database-backed API**, handling authentication and user data securely.  

## 🎯 Objective

The goal of this project was to integrate **authentication** into a **React-based** photo-sharing platform, reinforcing knowledge of **protected routes, token storage, and API communication**. The focus was on improving security and enhancing the user experience.

## 🚀 Outcome

The application now supports **user registration, authentication, and protected content access**. Users can log in once and remain authenticated through **LocalStorage token storage**.

Check out the final result:  
- 🌎 **Live Website**: [Around Auth](https://biamsarmento.github.io/web_project_around_auth/)  

## 🛠️ Technologies and Tools Used

- React.js  
- Node.js  
- Express.js  
- MongoDB & Mongoose  
- JWT (JSON Web Token) for authentication  
- LocalStorage for token management  

## 📚 What I Learned

This project reinforced key concepts in **full-stack development**, including:
- **User authentication & protected routes**  
- **Handling tokens and secure API requests**  
- **Using React’s Context API for state management**  
- **Implementing LocalStorage for persistent login sessions**  
- **Validating forms and managing user input with Refs**  

## 🔧 How to Run the Project

### 📦 Cloning the Repository
```bash
git clone https://github.com/biamsarmento/web_project_around_auth.git
cd web_project_around_auth
