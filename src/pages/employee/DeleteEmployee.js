import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { DeleteEmployee } from '../../services/EmployeeService';
export function DeleteModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelteEmployee=async()=>{
        await DeleteEmployee(props.data.employeeId).then(()=>{
            handleClose();
        })
    }
    return (
        <>
            <button className='btn btn-outline-danger rounded-pill' onClick={handleShow}>
                Delete
            </button>

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete?</Modal.Title>
                </Modal.Header>
                <div className='d-flex justify-content-center p-5'>
                <table className='table'>
                    <tr>
                        <th scope="row">Username:</th>
                        <td>{props.data.credential.username}</td>
                    </tr>
                    <tr>
                        <th scope="row">Firstname:</th>
                        <td>{props.data.firstname}</td>
                    </tr>
                    <tr>
                        <th scope="row">Lastname:</th>
                        <td>{props.data.lastname}</td>
                    </tr>
                    <tr>
                        <th scope="row">Gender:</th>
                        <td>{props.data.gender}</td>
                    </tr>
                    <tr>
                        <th scope="row">Birthday:</th>
                        <td>{props.data.birthday}</td>
                    </tr>
                    <tr>
                        <th scope="row">Position:</th>
                        <td>{props.data.position.type}</td>
                    </tr>
                </table>
                </div>
                
                <Modal.Footer>
                    <button className='btn btn-outline-primary rounded-pill' onClick={handleDelteEmployee}>
                        Yes
                    </button>
                    <button className='btn btn-outline-danger rounded-pill' onClick={handleClose}>
                        Cancel
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}