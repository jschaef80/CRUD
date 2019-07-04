import React from 'react'
// import './components.css'


const ListOfUsers = (props) => {
    return (
        <div className='card'>
            <p>List of users</p>
            {props.users.map(user => {
                return <div>{user.firstName} {user.lastname} from {user.location} <button id='deleteBtn' >Delete</button></div>})}
        </div>
    )
}


export default ListOfUsers;