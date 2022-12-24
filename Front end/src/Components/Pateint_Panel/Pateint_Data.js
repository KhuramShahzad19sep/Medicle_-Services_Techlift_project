import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import Topbar from "../Elements/Topbar";


import Nav from 'react-bootstrap/Nav';


const Pateint_Data = () => {

  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);




  useEffect(() => {
    fetch("http://localhost:3008/Pateint")
      .then((resp) => resp.json())
      .then((info) => setUsersList(info));
    //  login()


  }, []);









  return (

    <>
      <Topbar user="Admin" />
      <div class="sidebar">
        <a onClick={() => navigate("/Home")} href="#">Dashboard</a>
        <a onClick={() => navigate("/Add_Doctor")} href="#">Add Doctor</a>
        <a class="active" onClick={() => navigate("/Patient")} href="#">Pateint List</a>
        <a href="#">Doctor List</a>
        <a onClick={() => navigate("/Main_Page")} href="">Log Out</a>
      </div>

      <div class="content" style={{ zIndex: '1' }}>
        <table className="table table-bordered" varriant="danger">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
            </tr>
          </thead>

          <tbody >
            {usersList.map((Patient) => (
              <tr>
                <td>{Patient.id}</td>
                <td>{Patient.name}</td>
                <td>{Patient.email}</td>
                {/* <td> <Link to={`/Home/Edit_Doctors/${user.id}`}><Button>Edit</Button></Link></td> 
             <Link onClick={()=>Delet_User(user.id)}><Button>Delet</Button></Link> */}

              </tr>
            ))}

          </tbody>
        </table>

      </div>



    </>



  )
}; export default Pateint_Data;