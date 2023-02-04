import React from 'react';
import './User.css'

const User = ({user}) =>{
    const { avatar, email, first_name, last_name} =user;
    console.log(user);

    return (
<div className='user'>
    <img className='image' src={avatar} alt="" />
    <section className='name'>
        <p className='firstName'> <span className='bold'>Name : </span>{first_name}</p>
        <p>{last_name}</p>
    </section>
    <p className='email'><span className='bold'>Email : </span>{email}</p>
</div>
    )
}

export default User;