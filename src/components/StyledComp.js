import React from 'react'
import './stylesComp.css'
import stylesComp from './styles.module.css'

function StyledComp() {
    let headstyle = {
        color:"blue",
        fontSize:"30px"
    }
  return (
    <div>
        <h2 style={{color:"red",backgroundColor:"blue"}}>StyledComp</h2>
        <h3 style={headstyle}>This is Heading Styles</h3>
        <h3 className="primary">This is External Styles</h3>
        <h3 className={stylesComp.primary}>This is Module Styles</h3>
        <section className='container bg-primary'>
            This is section
        </section>
    </div>
  )
}

export default StyledComp