import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete, AiFillEdit, AiOutlineSearch } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { getUserDetailsAction } from '../../Redux/Action/adminAction';
import {
    Container,
    Row,
    Col,
    Table,
    Button,
    Form
} from 'react-bootstrap';


const GroupTable = () => {
    const getNewUser = useSelector((state)=>state.AdminReducer.data);
    const dispatch=useDispatch()
    const { register, handleSubmit , formState: { errors } } = useForm();
    const [ List , setList ] = useState(getNewUser);

    const onSubmit = (data) =>{
        console.log("Group Table Data",data)
        // dispatch(getUserDetailsAction(data))
    }
    const search = (e) =>{
        const searchText = e.target.value;
        let filterdata = getNewUser.filter((el)=>{
            return el.username.toLowerCase().includes(searchText.toLowerCase()) ||
                   el.email.toLowerCase().includes(searchText.toLowerCase())
        })
        setList(filterdata);
        // console.warn("click",filterdata);
    }

  return (
    <>
    <div className='admin-wrapper'>
                <div className="adminContainer">                
                <Container>
                    <Row>
                        <Col md={12}>
                        <div className='admin-section'>
                                {/* <h2 className='admin-title'>User Table</h2> */}
                                <div className='admin-header'>
                                    <h2 className='admin-title'>User Table</h2>
                                    <div className='search'>
                                        <input type="text" placeholder='Search'
                                        // value={searchText} 
                                        onChange={search}/>
                                        <AiOutlineSearch />
                                    </div>
                                </div>
                                <div className='table-responsive'>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>Group Code</th>
                                                <th>Group Name</th>
                                                <th>Status</th>
                                                <th>Expiry Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                          
                                                <td>jjj</td>
                                                <td>jjj</td>
                                                
                                                <td>
                                                    <span className='status active'>Active</span>
                                                </td>
                                                <td>03/03/1999</td>
                                                
                                                <td>
                                                    <Button className='btn-action delete'>
                                                        <AiFillDelete />
                                                    </Button>
                                                </td>
                                            </tr>
                                            
                                    
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
                                        </tbody>
                                    </Table>
                                </div>
                                <Col md={12}>
                                        <Form.Group className="table-actions">
                                            <Button type="submit"  className='admin-page-btn'>
                                                Add More
                                                <BsPlusLg className='icon' />
                                            </Button>
                                        </Form.Group>
                                    </Col>
                            </div>
                        <div className='admin-section admin-section-page'>
                                <h2 className='admin-title'>Group Form</h2>
                                <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                    <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Group Code</Form.Label>
                                                <Form.Control type="text" 
                                                {...register("groupCode",{required: true,})} 
                                                placeholder="ex: #0012" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Group Name</Form.Label>
                                                <Form.Control type="text" {...register("groupName")} placeholder="ex: Action Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
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
                                                    label="Inactive"
                                                    value="Inactive"
                                                    name="status"
                                                    type="radio"
                                                    id='2'
                                                />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Expiry Date</Form.Label>
                                                <Form.Control type="date" {...register("expiryDate")} placeholder="ex: 22/11/2004" />
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

export default GroupTable