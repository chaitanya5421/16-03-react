import React from 'react'
import {UserContext} from '../../../App'

function AppC() {
  return (
    <div>
        <UserContext.Consumer>
            {value => <div>My name is {value}</div>}
        </UserContext.Consumer>
    </div>
  )
}

export default AppC