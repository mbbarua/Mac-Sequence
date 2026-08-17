import React, { useState } from 'react';


export default function AuthForm({ onRegister }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [createPassword, setcreatePassword] = useState('');
  const [Confirmpassword , setConfirmpassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); 
    
    if (username === '' || email === '' || createPassword === '' || Confirmpassword === '') {
      alert('Please fill in all fields');
      return;
    }
    if (username.length < 3) {
      alert('Username must be at least 3 characters long');
      return;
    }if (createPassword.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }if (createPassword !== Confirmpassword) {
      alert('Passwords do not match');
      return;
    }if (!email.includes('@gmail.com')) {
      alert('Email must be a valid Gmail address'); 
      return;
    } if (email && username && createPassword && Confirmpassword) {
      alert('Registration successful!');
      onRegister(username);
    }

    }
}