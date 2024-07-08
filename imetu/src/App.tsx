
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import StoriesPage from './pages/StoriesPage'
import { useEffect, useState } from 'react'
import { Story } from './components/Stories'

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [stories, setStories] = useState<Story[] | null[]>([]);

  const fetchStories = () => {
    fetch(`${API_URL}/api/stories`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(stories => {
        setStories(stories);
      })
  }
  useEffect(() => {
    document.title = "Home | Imetu";
    setStories([null, null, null, null]);
    fetchStories();
    const interval = setInterval(fetchStories, 5000);
    return () => clearInterval(interval);

  }, []);

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage stories={stories} />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/stories" element={<StoriesPage stories={stories} />} />
        <Route path='*' element={<Navigate to="/" />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
