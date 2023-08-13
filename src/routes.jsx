import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/loginUser'
import { RegisterUser } from './pages/register/registerUser'
import { Main } from './pages/mainFolder/main'
import { MyTracks } from './pages/myTracks/myTracks'
import { PlaylistOfTheDay } from './pages/compilations/playlistOfTheDay'
import { DanceHits } from './pages/compilations/DanceHits'
import { IndieCharge } from './pages/compilations/indieCharge'
import { ProtectedRoute } from './pages/protected/protected'
import { NotFound } from './pages/404/NotFound'

export const AppRoutes = () => {
  let isLoggedIn = Boolean(localStorage.getItem('Token'));
  if (isLoggedIn === true) {
    <Main />
  } else {
    <Login />
  }

  rreturn(
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login">
            <Main />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/favorites"
        element={
          <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login">
            <MyTracks />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/category/1"
        element={
          <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login">
            <PlaylistOfTheDay />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/category/2"
        element={
          <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login">
            <DanceHits />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/category/3"
        element={
          <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login">
            <IndieCharge />
          </ProtectedRoute>
        }
      ></Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
