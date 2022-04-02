import { React } from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Button,
    Form
} from 'react-bootstrap';
import './adminPanel.scss';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetailsAction } from '../../Redux/Action/action';


const AdminPanel = () => {
    const dispatch = useDispatch();
    const getNewUser = useSelector((state)=>state.AdminReducer.data);
    console.log("getNewUser",getNewUser);
    const { register, handleSubmit , formState: { errors } } = useForm();

    const onSubmit = (data) =>{
        dispatch(getUserDetailsAction(data))
    }

    return (
        <>
            <Row>
                <Col>
                    <h1 className='page-title'>Admin Panel Demo</h1>
                </Col>
            </Row>
            <div className='admin-wrapper'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='admin-section'>
                                <h2 className='admin-title'>User Table</h2>
                                <div className='table-responsive'>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>Username</th>
                                                <th>Email</th>
                                                <th>Group ID</th>
                                                <th>Password</th>
                                                <th>Status</th>
                                                <th>Created Date</th>
                                                <th>Expiry Date</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getNewUser.map((item,index)=>
                                            <tr key={index}>
                                                <td>{item.userName}</td>
                                                <td>{item.email}</td>
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
                                        }
                                            {/* <tr>
                                                <td>Allie Grater</td>
                                                <td>#0012</td>
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
                                            {/* <tr>
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
                                    <Col md={12}>
                                        <Form.Group className="table-actions">
                                            <Button type="submit" className='btn-blue'>
                                                Add More
                                                <BsPlusLg className='icon' />
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                </div>
                                <hr />
                            </div>
                            <div className='admin-section'>
                                <h2 className='admin-title'>User Form</h2>
                                <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>User Name</Form.Label>
                                                <Form.Control type="text" 
                                                {...register("userName",{required: true,})} 
                                                placeholder="ex: John Doe" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="Email" {...register("email")} placeholder="ex: Johndoe@gmail.com" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Group ID</Form.Label>
                                                <Form.Control type="text" {...register("groupId")} placeholder="ex: abc" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" {...register("password")} placeholder="ex: Password" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4" {...register("status")}>
                                                <Form.Label>Status</Form.Label>
                                                <Form.Check
                                                    inline
                                                    label="Active"
                                                    name="status"
                                                    type="radio"
                                                    id='1'
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Inactive"
                                                    name="status"
                                                    type="radio"
                                                    id='2'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Created Date</Form.Label>
                                                <Form.Control type="date" {...register("createdDate")} placeholder="ex: 25/12/2021" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Expiry Date</Form.Label>
                                                <Form.Control type="date" {...register("expiryDate")} placeholder="ex: 25/12/2021" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="form-actions">
                                                <Button type="submit" className='btn-blue'>Submit</Button>
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
        </>
    )
}

export default AdminPanel;