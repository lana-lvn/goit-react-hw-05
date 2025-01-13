import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';








function App() {
  
  return (
    <>
      <Navigation /> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />}/>
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
           <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews/>} />
        </Route>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
