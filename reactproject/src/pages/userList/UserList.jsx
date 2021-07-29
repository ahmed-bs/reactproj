import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import {userRows} from "../../CData"
import { Link } from "react-router-dom"; 
import { useState } from "react";
export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'username',
          width: 200,
          editable: true,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.Avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        {
          field: 'Email',
          headerName: 'Email',
          width: 200 ,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'status',
          type: 'number',
          width: 120,
          editable: true,
        },
        {
          field: 'transaction',
          headerName: 'transaction',
          type: 'number',
          width: 160,
          editable: true,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>{
            return(
              <>
                <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
               </Link>
              <DeleteOutline className="userListDelete"  onClick={() => handleDelete(params.row.id)}/>
              </>
            )
          }
        },
      ];
      

    return (
        <div className="userList">
              <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick />
        </div>
    )
}
