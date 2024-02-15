import React from 'react'
import { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'

import { MoviePreviewNote } from './pages/MoviePreview'
import { Profile } from './pages/Profile'
import { CreateMovie } from './pages/CreateMovie'
import { Home } from './pages/Home'
import {SignIn} from './pages/SignIn'
import {SignUp} from './pages/SignUp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <GlobalStyles/>
    
        <MoviePreviewNote></MoviePreviewNote>

    </ThemeProvider>
  </React.StrictMode>,
)
