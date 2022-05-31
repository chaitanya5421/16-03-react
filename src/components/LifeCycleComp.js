import React, { Component } from 'react'

export class LifeCycleComp extends Component {
    //Intilization phase
    constructor(props){
        super(props);
        console.log("Constructor Method Called");

        this.state = {
            users : [{}]
        }
    }

    //life Cycle Methods
    // Components goes through several life cycle methods
    // 1) Mounting 
    // 2) Updating 
    // 3) Unmounting

    // Mounting 
    //  When an instane is created and inserted into the DOM.


    static getDerivedStateFromProps(){
        console.log("static GetDerievedStateFromProps");
        return null;
    }

    async getUserData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        this.setState({users:data}) 
    }

    componentDidMount(){
        console.log("componentDidMount Executed");

        // fetch is a browser method
        this.getUserData();
        // the componentDidMount method run after the component output has been rendered to the DOM. 
    }

  render() {
      console.log("render method executed");
    return (
      <div>
          <h2>LifeCycleComp</h2>

            <table>
                <thead>
                    <th>
                        <td>id</td>
                    </th>
                    <th>
                        <td>Name</td>
                    </th>
                    <th>
                        <td>Email</td>
                    </th>
                    <th>
                        <td>city</td>
                    </th>
                </thead>
                <tbody>
                {
                 this.state.users.map((user)=>(
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address?.city}</td>
                    </tr>
                    ))
          }
                </tbody>

            </table>

      </div>
    )
  }
}

export default LifeCycleComp