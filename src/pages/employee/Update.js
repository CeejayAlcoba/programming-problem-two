import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { UpdateEmployee } from '../../services/EmployeeService';
export class Update extends React.Component {
    state = {
        data: {
            credential: {

            },
        },
        show: false
    }
    handleAddEmployee = async () => {
        console.log(this.state.data)
        await UpdateEmployee(this.state.data).then(() => {
            this.setState({ ...this.state, data: { credential: {} } })
        })
    }
    handleChange = (event) => {
        this.setState({ ...this.state, data: { ...this.state.data, positionId: event.target.value } });
    }
    handleClose = () => {
        this.setState({ ...this.state, show: false })
    }
    handleData(field, value, isCredential) {
        if (isCredential)
            this.setState({ ...this.state, data: { ...this.state.data, credential: { ...this.state.data.credential, [field]: value } } })
        else
            this.setState({ ...this.state, data: { ...this.state.data, [field]: value } })
        console.log(this.state.data)
    }
    handleShow = () => {
        var newData = this.props.data;
        this.setState({ ...this.state, })
        this.setState({ ...this.state, show: true, data: newData })
        console.log(this.state.data)
    }
    render() {
        return (
            <>
                <button className='btn btn-outline-success rounded-pill' onClick={() => this.handleShow()}>
                    Update
                </button>
                <Modal show={this.state.show} onHide={() => this.handleClose()} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title >Update Employee</Modal.Title>
                    </Modal.Header>
                    <div className='text-center p-4 m-5 bg-light'>
                        <div className="form-outline mb-4">
                            <input type="text" className="form-control" value={this.state.data.firstname} onChange={(e) => this.handleData("firstname", e.target.value, false)} />
                            <label className="form-label">Firstname</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" className="form-control" value={this.state.data.lastname} onChange={(e) => this.handleData("lastname", e.target.value, false)} />
                            <label className="form-label">Lastname</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" className="form-control" value={this.state.data.gender} onChange={(e) => this.handleData("gender", e.target.value, false)} />
                            <label className="form-label">Gender</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="date" className="form-control" value={this.state.data.birthday} onChange={(e) => this.handleData("birthday", e.target.value, false)} />
                            <label className="form-label">Birthday</label>
                        </div>
                        {this.props.data.position.type == "Admin" ?
                            null
                            :
                            <>
                                <select className="form-select" onChange={(e) => this.handleChange(e)} id="colours" value={this.state.data.positionId}>
                                    <option >Select an employee position</option>
                                    <option value={2}>Manager</option>
                                    <option value={3}>Supervisor</option>
                                    <option value={4}>Staff</option>
                                </select>
                                <label className="form-label">Position</label>
                            </>

                        }
                        <div className="form-outline mb-4">
                            <input type="text" className="form-control" value={this.state.data.credential.username} onChange={(e) => this.handleData("username", e.target.value, true)} />
                            <label className="form-label">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" className="form-control" value={this.state.data.credential.password} onChange={(e) => this.handleData("password", e.target.value, true)} />
                            <label className="form-label">Password</label>
                        </div>
                    </div>
                    <Modal.Footer>
                        <button className='btn btn-outline-primary rounded-pill' onClick={() => { this.handleClose(); this.handleAddEmployee(); }}>
                            Update
                        </button>
                        <button className='btn btn-outline-danger rounded-pill' onClick={() => this.handleClose()}>
                            Cancel
                        </button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}