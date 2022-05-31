import React from 'react'

function ListsandKeys() {
    let studentDetails = [
        {
            id:1,
            studentName : "Hari",
            CourseName : 'MEAN Stack',
            CourseDuration:'3 Duration'
        },
        {
            id:2,
            studentName : "krishna",
            CourseName : 'MERN Stack',
            CourseDuration:'3 Duration'
        },
        {
            id:3,
            studentName : "Tom",
            CourseName : 'MEAN Stack',
            CourseDuration:'3 Duration'
        },{
            id:4,
            studentName : "Jerry",
            CourseName : 'MEAN Stack',
            CourseDuration:'3 Duration'
        }

    ]
  return (
    <div>
        <h2>ListsandKeys</h2>
        {studentDetails.map((student)=>(
            <p key={student.id}>{student.studentName}</p>
        ))}
    </div>
  )
}

export default ListsandKeys