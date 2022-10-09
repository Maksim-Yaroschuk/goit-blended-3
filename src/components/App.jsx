import { Button } from './Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { showUsers } from 'redux/user/userOperations';
import { UsersList } from './UsersList/UsersList';
import { selectUsers } from 'redux/user/userSelectors';
import { useState } from 'react';
import { AddUserForm } from './AddUserForm/AddUserForm';

export const App = () => {
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false)

  const clickHandler = () => {
    dispatch(showUsers());
  };



  const users = useSelector(selectUsers);

  return (
    <div>
      <UsersList />
      {users.length === 0 ? (
        <Button text={'Show users list'} clickHandler={clickHandler} />
      ) : (
        <Button text={'Add'} clickHandler={() => setOpenForm(true)} />
      )}

      {openForm && <AddUserForm/>}
    </div>
  );
};
