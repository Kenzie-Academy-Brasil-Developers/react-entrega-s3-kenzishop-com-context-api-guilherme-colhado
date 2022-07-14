import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Providers } from './Providers'
import { RoutesComponent } from './Routes'
import { GlobalStyle } from './Styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyle/>
        <RoutesComponent/>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
)
