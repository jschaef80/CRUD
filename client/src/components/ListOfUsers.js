import React from 'react'
// import './components.css'


const ListOfUsers = (props) => {
    console.log('props', props)
    return (
        <div className='card'>                
            <p>List of users</p>
            {
                props.users.map(user => {
                    return <p>{user.firstName}</p>
                })
            }
        </div>
    )
}


export default ListOfUsers;