import Detail from './admin/Detail';
import BottomControl from './admin/BottomControl';
import TopDisplay from './admin/TopDisplay';
import CreateUser from './admin/CreateUser';
import UpdateUser from './admin/UpdateUser';
import { useState } from 'react';

function App() {
  let [page, setPage] = useState(0);
  let [edit, setEdit] = useState(0);
  let [userid, setUserid] = useState(0);

  let changePageValue = ( value ) => {
    setPage(value);
  }

  let changeToEdit = (value) => {
    setEdit(value);
  }

  let changeId = (value) => {
    setUserid(value);
  }

  return (
    <div className = "container-fluid vh-100 overflow-auto" style = {{backgroundColor:"#dfdfdf"}}>
      <TopDisplay />
      <div className = "container">
        {page === 0 && <Detail edit = {edit} updateUser = {changePageValue} changeId = {changeId}/>}
        {page === 1 && <CreateUser />}
        {page === 2 && <UpdateUser back = {changePageValue} id = {userid}/>}
      </div>
      <BottomControl page = {page} edit = {edit} EnableEdit = {changeToEdit} createUser = {changePageValue}/>
    </div>
  );
}

export default App;
