import React from 'react'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'
import DangerCard  from '../components/DangerCard'

function HomePage() {
  return (
    <div className='flex'>
      <Sidebar userName="Enzo Macedo" job="Pesquisador" />
    </div>
  )
}

export default HomePage