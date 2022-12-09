import React from 'react';
import {Button} from 'react-bootrtap'

const Employee = () => {
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
            <tbody></tbody>

            </table>
                </div>
            </div>
        </div>
    );
};

export default Employee;