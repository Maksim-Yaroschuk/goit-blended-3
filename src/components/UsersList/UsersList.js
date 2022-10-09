import { selectUsers } from 'redux/user/userSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from 'redux/user/userOperations';

export const UsersList = () => {
  const userItem = useSelector(selectUsers);
  const dispatch = useDispatch();
  return (
    <ul>
      {userItem.map(({ email, name, id }) => {
        return (
          <li key={id}>
            <p>Email: {email}</p>
            <p>Name: {name}</p>
            <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
