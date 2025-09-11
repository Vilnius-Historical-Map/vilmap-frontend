import { Routes, Route, Navigate } from 'react-router-dom'
import { RoutesConfig } from './routerConfig'


export const AppRoutes = () => {
  return (
    <Routes>
      {
        RoutesConfig.map(
          ({ path, element, isPrivate }) =>
             <Route key={path} path={path} element={element} />
        )
      }
    </Routes>
  )
}