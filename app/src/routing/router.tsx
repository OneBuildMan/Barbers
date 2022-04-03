import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'

const useStyles = makeStyles({
  container: {
    height: '100vh',
  },
  fullHeight: {
    height: '100%',
  },
})

const Router = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.fullHeight}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Router