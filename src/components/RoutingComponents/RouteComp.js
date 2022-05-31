import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Pagination from '../Pagination'
import HomeComp from '../HomeComp'
import LifeCycleComp from '../LifeCycleComp'

function RouteComp() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomeComp />} />
             <Route path='/pagination' element={<Pagination />} />
             <Route path='/lifecycle' element={<LifeCycleComp />} />
            
        </Routes>
    </div>
  )
}

export default RouteComp