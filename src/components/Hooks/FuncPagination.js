import React, {useState,useEffect} from 'react'

function FuncPagination() {
    const [users,setUsers] = useState([]);
    const [pageNumber,setPageNumber] = useState(1);

    const getUserDAta = async()=>{
        const response =  await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,{
        method : 'GET', 
        headers : {
            'app-id':'61d95798e44ff743bbf317c8'
        }
    }
        )
        const {data} = await response.json();
        // console.log(data);
        setUsers(data);
    }


    // useEffect(()=>{
    //     console.log("component Did Mount");
    // },[])

    // useEffect(()=>{
    //     console.log("component Did Update");
    //     getUserDAta();
    //     return () =>{
    //         console.log("component will Unmount");
    //     }
    // },[pageNumber])
    


    // componentDidMount
    useEffect(()=>{
        // console.log("component Mounted");
        getUserDAta();
    },[pageNumber])

  return (
    <div>
        <h2>FuncPagination</h2>
        <div className='container'>
            <div className='row'>
                {users && users.length>0 && users.map((user)=>(
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
                [1,2,3,4,5,6,7,8,9].map((num)=> <button className='btn btn-primary me-4' onClick={(e)=>setPageNumber(num)}>{num}</button>)
            }
          </div>
    </div>
  )
}

export default FuncPagination