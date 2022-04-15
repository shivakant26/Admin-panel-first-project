import React from "react";
import {
    Container,
    Row,
    Col,
    Table,
    Button,
    Form,
    Dropdown
} from 'react-bootstrap';
// import '../adminPanel.scss';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { useForm } from "react-hook-form";


const Action = () =>{
    
    const { register, handleSubmit , formState: { errors } } = useForm();

    const onSubmit = (role) =>{
      console.log("Action Data",role);
    }
    return(
        <>
            {/* <Row>
                <Col>
                    <h1 className='page-title'>Action Panel Demo</h1>
                </Col>
            </Row> */}
            <div className='admin-wrapper'>
            <div className="adminContainer">       
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='admin-section'>
                            <div className='admin-header'>
                                    <h2 className='admin-title'>Action Table</h2>
                                </div>
                                <div className='table-responsive'>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>Actioncode</th>
                                                <th>ActionName</th>
                                                <th>Status</th>
                                                <th>Created Date</th>
                                                <th>Expiry Date</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {/* {
                                                getroledata.map((item,index)=>
                                            <tr key={index}>
                                                <td>{item.roleCode}</td>
                                                <td>{item.roleName}</td>
                                                <td>{item.groupId}</td>
                                                <td>{item.password}</td>
                                                <td>
                                                    <span className='status active'>Active</span>
                                                </td>
                                                <td>{item.createdDate}</td>
                                                <td>{item.expiryDate}</td>
                                                <td>
                                                    <Button className='btn-action delete'>
                                                        <AiFillDelete />
                                                    </Button>
                                                </td>
                                            </tr>
                                            )
                                        } */}
                                            <tr>
                                                <td>0012</td>
                                                <td>Allie Grater</td>
                                                <td>
                                                    <span className='status inactive'>Inactive</span>
                                                </td>
                                                <td>01/03/2022</td>
                                                <td>01/03/2022</td>
                                                <td>
                                                    <Button className='btn-action edit'>
                                                        <AiFillEdit />
                                                    </Button>
                                                </td>
                                               
                                            </tr>
                                            {/* <tr>
                                                <td>0013</td>
                                                <td>Minnie Van Ryder</td>
                                                <td>#0013</td>
                                                <td>*****</td>
                                                <td>
                                                    <span className='status active'>Active</span>
                                                </td>
                                                <td>01/03/2022</td>
                                                <td>01/03/2022</td>
                                                <td>
                                                    <Button className='btn-action delete'>
                                                        <AiFillDelete />
                                                    </Button>
                                                </td>
                                            </tr> */}
                                            {/* <tr>
                                                <td>0014</td>
                                                <td>Chris Anthemum</td>
                                                <td>#0014</td>
                                                <td>*****</td>
                                                <td>
                                                    <span className='status inactive'>Inactive</span>
                                                </td>
                                                <td>01/03/2022</td>
                                                <td>01/03/2022</td>
                                                <td>
                                                    <Button className='btn-action edit'>
                                                        <AiFillEdit />
                                                    </Button>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </Table>
                                </div>
                                <Col md={12}>
                                        <Form.Group className="table-actions">
                                            <Button type="submit" className='admin-page-btn'>
                                                Add More
                                                <BsPlusLg className='icon' />
                                            </Button>
                                        </Form.Group>
                                    </Col>
                            </div>
                            <div className='admin-section admin-section-page'>
                                <h2 className='admin-title'>Action Form</h2>
                                <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Action Code</Form.Label>
                                                <Form.Control type="text" 
                                                {...register("actionCode",{required: true,})} 
                                                placeholder="ex: #0012" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Action Name</Form.Label>
                                                <Form.Control type="text" {...register("actionName")} placeholder="ex: Action Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>canCreate</Form.Label>
                                            <Form.Select>
                                                <option>Choose Action</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4} className="mb-2">
                                            <Form.Group className="mb-4">
                                                <Form.Label>canUpdate</Form.Label>
                                                {/* <Form.Control type="text" {...register("canUpdate")} placeholder="ex: true/false" /> */}
                                                <Form.Select>
                                                <option>Choose Action</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4} className="mb-2">
                                            <Form.Group className="mb-4">
                                                <Form.Label>canDelete</Form.Label>
                                                {/* <Form.Control type="text" {...register("canDelete")} placeholder="ex: true/false" /> */}
                                                <Form.Select>
                                                <option>Choose Action</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4} className="mb-2">
                                            <Form.Group className="mb-4">
                                                <Form.Label>canRead</Form.Label>
                                                {/* <Form.Control type="text" {...register("canRead")} placeholder="ex: true/false" /> */}
                                                <Form.Select>
                                                <option>Choose Action</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Last Op Ind</Form.Label>
                                                <Form.Control type="text" {...register("lastOptionIndex")} placeholder="ex: Last op Ind" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Updated By</Form.Label>
                                                <Form.Control type="text" {...register("updatedBy")} placeholder="ex: Updated By" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Created By</Form.Label>
                                                <Form.Control type="text" {...register("createBy")} placeholder="ex: Created By" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Update Date</Form.Label>
                                                <Form.Control type="date" {...register("updateDate")} placeholder="ex: 21/09/2004" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Created Date</Form.Label>
                                                <Form.Control type="date" {...register("createdDate")} placeholder="ex: 22/11/2004" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4" {...register("status")}>
                                                <Form.Label>Status</Form.Label>
                                                <div className='status-check'>
                                                <Form.Check
                                                    {...register("status")}
                                                    inline
                                                    label="Active"
                                                    value="Active"
                                                    name="status"
                                                    type="radio"
                                                    id='1'
                                                />
                                                <Form.Check
                                                {...register("status")}
                                                    inline
                                                    value="Inactive"
                                                    label="Inactive"
                                                    name="status"
                                                    type="radio"
                                                    id='2'
                                                />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="form-actions">
                                                <Button type="submit" className='admin-page-btn'>Submit</Button>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                                <hr />
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        </>
    )
}

export default Action;