# 🎬 Netflix GPT

An AI-powered Netflix-like web app built with **React, Firebase, TMDB API, and OpenAI GPT**.  
It allows users to **login, browse trending movies, watch trailers, and get GPT-powered movie suggestions** with a modern Netflix-inspired UI.

---

## 🚀 Live Demo

🔗 [Netflix GPT on Vercel](https://netflix-gpt-snowy-beta.vercel.app/browse)

---

## ✨ Features

### 🔐 Authentication

- Login / Sign Up using Firebase Authentication
- Form Validation (email, password, etc.)
- Profile updates (name, profile picture)
- Redirects based on auth state
- Sign Out functionality

### 🎥 Browse Page (After Authentication)

- Header with navigation
- Main Movie (autoplaying trailer in background 🎬)
- Title & Description
- Movie Lists (Now Playing, Popular, etc.)
- TMDB Image CDN support
- Fully responsive with Tailwind CSS

### 🤖 NetflixGPT (AI Search)

- GPT-powered search bar
- AI movie recommendations
- Suggestions fetched from TMDB
- Multi-language support 🌍
- Memoized performance optimization

### 🛠️ Developer Notes

- Redux store with `userSlice`, `movieSlice`, `gptSlice`
- Custom React hooks (`useNowPlayingMovies`, `usePopularMovies`, etc.)
- Environment variables for API keys
- Firebase deployment & Vercel hosting

---

## 🛠️ Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)  
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend & APIs

![Firebase](https://img.shields.io/badge/Firebase-0396DE?style=for-the-badge&logo=firebase&logoColor=yellow)  
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)  
![TMDB](https://img.shields.io/badge/TMDB-01d277?style=for-the-badge&logo=tmdb&logoColor=white)

### Deployment

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📌 Improvements / Next Steps

Here are a few ideas to make my project even better:

- ⭐ **Dark/Light Theme Toggle**
- ⭐ **Pagination / Infinite Scrolling** for movies
- ⭐ **Add Watchlist / Favorites feature**
- ⭐ **Unit Testing** with Jest + React Testing Library
- ⭐ **Better Error Handling** (invalid API keys, network errors, etc.)
- ⭐ **SEO Optimization** (meta tags, better descriptions)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repo and open a PR 🚀
