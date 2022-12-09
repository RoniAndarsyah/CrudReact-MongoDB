import React, { useEffect } from 'react';
import {Button} from 'react-bootrtap'
import axios from 'axios';

const Employee = () => {
    const [Data,setData] = useState([])
    const GetEmployeeData = () =>{
        //ambil data employee
        const url = 'http://localhost:8000'
        axios.get(url)
        .then(response=>{
            const result = response.data;
            const {status, message, data}= result;
            if(status !== 'SUCCESS'){
                alert(message,status)
            }
            else{
                setData(data)
                console.log(data)
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }  
    //Memanggil function di useEffect

    useEffect(()=>{
    GetEmployeeData();
    },[])
    return (
        <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                <Button variant='primary'><i className='fa fa-plu'></i>
                    Tambah data Employee
                </Button>
                </div>
            </div>
            <div className='row'>
            <div className='table-responsive'>
            <table className='table table-striped table-hover table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>NIK Employee</th>
                    <th>Alamat</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>

            </tbody>
            </table>
                </div>
            </div>
        </div>
    );
};

export default Employee;