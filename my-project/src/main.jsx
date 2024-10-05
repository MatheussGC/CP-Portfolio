import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Projetos from './pages/Projetos/Projetos.jsx';
import MidiaSocial from './pages/MidiaSocial/MidiaSocial.jsx';
import Apresentacao from './pages/Apresentacao/Apresentacao.jsx';
import Contato from './pages/Contato/Contato.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path:'/midiasocial', element: <MidiaSocial/>},
      {path:'/contato', element: <Contato/>},
      {path:'/projetos', element: <Projetos/>},
      {path:'/apresentacao', element: <Apresentacao/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)