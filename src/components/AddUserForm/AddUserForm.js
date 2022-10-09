import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/user/userOperations';

export const AddUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);
    const obj = {
      name,
      email,
    };
    dispatch(addUser(obj));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label name="name">
        User name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <label name="email">
        User email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};
