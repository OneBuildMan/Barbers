import { Button } from '@material-ui/core'
import React from 'react'
import Navbar from '../components/NavBar'

function HomePage(){
  return <div>
    <Navbar />
    Hello
    <div>
      <Button variant='contained' color="primary"  >1</Button>
    </div>
    </div>
}

export default HomePage