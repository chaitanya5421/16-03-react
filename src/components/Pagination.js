import React, { Component } from 'react'

export class Pagination extends Component {

    state={
        pageNumber : 1,
        users:[]
    }

    getUserDAta = async()=>{
        const response =  await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,{
        method : 'GET', 
        headers : {
            'app-id':'61d95798e44ff743bbf317c8'
        }
    }
        )
        const {data} = await response.json();
        // console.log(data);
        this.setState({users:data})
    }

    

    handleButtonClick = (num) =>{
        // alert(num)
        // update the state type
        num = parseInt(num)
        this.setState({pageNumber:num})
        
    }
 

    componentDidMount(){
        this.getUserDAta();
    }

    componentDidUpdate(prevsProps,prevState){
        // console.log(prevsProps , prevState);
        if(prevState.pageNumber !== this.state.pageNumber){
            this.getUserDAta();
        }
        // this.getUserDAta();
    }


  render() {
    return (
      <div>
          <h2>Pagination</h2>
          <div className='container'>
            <div className='row'>
                {this.state.users && this.state.users.length>0 && this.state.users.map((user)=>(
                    <div className='col-md-6 mt-4'>
                        <div className='card p-5'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={user.picture} alt={user.firstName} />
                                </div>
                                <div className='col-md-8'>
                                    <p>id:{user.id}</p>
                                    <p>{user.title} {user.firstName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          <div className='container my-5'>
            {
                [1,2,3,4,5,6,7,8,9].map((num)=> <button className='btn btn-primary me-4' onClick={(e)=>this.handleButtonClick(num)}>{num}</button>)
            }
          </div>
      </div>
    )
  }
}

export default Pagination