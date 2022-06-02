import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Pagination from '../Pagination'
import HomeComp from '../HomeComp'
import LifeCycleComp from '../LifeCycleComp'
import ContactUs from '../ContactUs'
import Counter from '../Hooks/Counter'
import FuncPagination from '../Hooks/FuncPagination'

function RouteComp() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomeComp />} />
             <Route path='/pagination' element={<Pagination />} />
             <Route path='/lifecycle' element={<LifeCycleComp />} />
             <Route path='/contactus' element={<ContactUs />} />
             <Route path='/counterfunc' element={<Counter />} />
             <Route path='/funcpagination' element={<FuncPagination />} />
        </Routes>
    </div>
  )
}

export default RouteComp