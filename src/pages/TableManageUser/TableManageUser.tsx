import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios';
import FormAdd from './FormAdd';
import { log } from 'console';

function TableManageUser() {
    const [data, setData] = useState<any[]>([]);
    const [toggle, setToggle] = useState(false);
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const isShowForm = () => {
        setToggle(true);
    } 
    useEffect(() => {

        axios("http://localhost:3000/user").then((response) => {
            console.log("Kiem tra", response);
            setData(response.data);
        })
    }, [])
    const handleDelete = (id: number) => {
        axios.delete(`http://localhost:3000/user/${id}`).then((response) => {
            console.log("Sau delete", response);
            axios.get("http://localhost:3000/user").then((response) => {
                setData(response.data);
            });




        })
    }

    const handleEdit = (id: number) => {
        const data = {
            "name": "Luu Hong Thai",
        };
        axios.patch(`http://localhost:3000/user/${id}`,data).then((response) => {
           
            axios.get("http://localhost:3000/user").then((response) => {
                setData(response.data);
            });
        })
    }  
    
    const handlePost = () => {
        const data = {
            "name": "Luu Hong Thai POSTTTTTTTTTT",
            "dob": "1976-05-31T08:52:01.091Z",
            "email": "Kylie_Jacobs41@gmail.com",
            "work": "Chief Accountability Engineer",
            "imgAvatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/183.jpg",
            "address": "West Isai",
        };
        axios.post(`http://localhost:3000/user`, data).then((response) => {
            axios.get("http://localhost:3000/user").then((response) => {
                setData(response.data);
            });
        })
    }
    const handleSearch = () => {
        axios.get(`http://localhost:3000/user?name=${searchKeyWord}`).then((response) => {
            console.log("Kiêm tra", response.data);
            
        })
        
    };

    



    return (
        <>

            <title>Bootstrap Simple Data Table</title>

            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8">
                                    <button className="btn-addUSer btn btn-primary" onClick={handlePost}>Add user</button>
                                </div>
                                <div className="col-sm-4">
                                    <div className="search-box">
                                        <i className="material-icons"></i>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search…"
                                            onChange={(e) => setSearchKeyWord(e.target.value)}
                                        />
                                        <button onClick={handleSearch}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Date Of Birh</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Avatar</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, i) => (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{new Date(item.dob).toLocaleDateString()}</td>
                                        <td>{item.address}</td>
                                        <td>{item.email}</td>
                                        <td><img src={item.imgAvatar} alt="avatar" style={{ width: 50, height: 50, borderRadius: 50 }} /></td>
                                        <td>
                                            <button className="edit" title="Edit" data-toggle="tooltip"
                                                onClick={() => handleEdit(item.id)}>
                                                <i className="material-icons"></i>
                                            </button>
                                            <button
                                               
                                                className="delete"
                                                title="Delete"
                                                data-toggle="tooltip"
                                                onClick={()=> handleDelete(item.id)}
                                            >
                                                <i className="material-icons"></i>
                                            </button>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                        {/* Form add user */}
                        {!toggle && < FormAdd />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableManageUser
