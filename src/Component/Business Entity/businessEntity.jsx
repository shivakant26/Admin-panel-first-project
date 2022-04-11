import React from "react";
import { Accordion, Button, Col, Container, Dropdown, Form, Row, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsPlusLg } from 'react-icons/bs';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const BusinessEntity = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // dispatch(getUserDetailsAction(data))
        console.log(data);
    }
    return (
        <div className="admin-wrapper">
            {/* <h2>Business Entity component</h2> */}
            <Accordion defaultActiveKey="0" className="adminContainer">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Business Entity</Accordion.Header>
                    <Accordion.Body>
                        <div className='admin-section'>
                                <div className='admin-header'>
                                    <h2 className='admin-title'>Business Entity Table</h2>
                                </div>
                                <div className='table-responsive'>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>Entity Legal Name</th>
                                                <th>Entity Short Name</th>
                                                <th>Home Country</th>
                                                <th>Entity Start FY</th>
                                                <th>Entity End FY</th>
                                                <th>Base Currency</th>
                                                <th>Entity Host Name</th>
                                                <th>Entity Host Port</th>
                                                <th>Entity Address</th>
                                                <th>Entity Type</th>
                                                <th>Pin Code</th>
                                                <th>Entity State</th>
                                                <th>Rating Agency</th>
                                                <th>Rating</th>
                                                <th>Income Tax Identification Number</th>
                                                <th>TDS/WHT Rate Applicable</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <tr>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>
                                                    <span className='status active'>Active</span>
                                                </td>
                                                <td>
                                                    <Button className='btn-action delete'>
                                                        <AiFillDelete />
                                                    </Button>
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <td>0012</td>
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
                                            <Button type="submit" className='admin-page-btn'>
                                                Add More
                                                <BsPlusLg className='icon' />
                                            </Button>
                                        </Form.Group>
                                    </Col>
                        </div>
                        <div className='admin-section admin-section-page'>
                        <h2 className='admin-title'>Business Entity Form</h2>
                            <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col md={4}>
                                        <Form.Group className="mb-4 form-main">
                                            <Form.Label>Entity Legal Name</Form.Label>
                                            {/* <span className='error'>
                                                {errors?.entityLegalName?.type === "required" && <p>*</p>}
                                            </span> */}
                                            <Form.Control type="text"
                                                {...register("entityLegalName", { required: true, })}
                                                placeholder="ex: Entity Legal Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Short Name</Form.Label>
                                            <Form.Control type="text" {...register("entityShortName")} placeholder="ex: My Entity" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Home Country</Form.Label>
                                            <Form.Control type="text" {...register("homeCountry")} placeholder="ex: abc" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Start FY</Form.Label>
                                            <Form.Control type="date" {...register("entityStartFy")} placeholder="ex: Date-Month" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity End FY</Form.Label>
                                            <Form.Control type="date" {...register("entityEndFy")} placeholder="ex: Date Month" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Base Currency</Form.Label>
                                            <Form.Control type="text" {...register("baseCurrency")} placeholder="ex: $" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Host Name</Form.Label>
                                            <Form.Control type="text" {...register("entityHostName")} placeholder="ex: Entity Host name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Host Port</Form.Label>
                                            <Form.Control type="number" {...register("entityHostPort")} placeholder="ex: 4040" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Address</Form.Label>
                                            <Form.Control type="text" {...register("entityAddress")} placeholder="ex: Entity Address" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity Type</Form.Label>
                                            <Form.Control type="text" {...register("entityType")} placeholder="ex: Entity Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Pin Code</Form.Label>
                                            <Form.Control type="number" {...register("pinCode")} placeholder="ex: 1234" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity State</Form.Label>
                                            <Form.Control type="text" {...register("entityState")} placeholder="ex: Entity State" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Rating Agency</Form.Label>
                                            <Form.Control type="text" {...register("ratingAgency")} placeholder="ex: Rating Agency" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Rating</Form.Label>
                                            <Form.Control type="text" {...register("rating")} placeholder="ex: Rating" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Income Tax Identification Number</Form.Label>
                                            <Form.Control type="text" {...register("incomeTaxIdentificationNumber")} placeholder="ex: Income Tax Iden..." />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>TDS/WHT Rate Applicable</Form.Label>
                                            <Form.Control type="number" {...register("tdsRateApplicable")} placeholder="ex: TDS/WHT Rate" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4" {...register("status")}>
                                            <Form.Label>Status</Form.Label>
                                            <div className='status-check'>
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
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Entity Email List</Accordion.Header>
                    <Accordion.Body>
                    <div className='admin-section'>
                                <div className='admin-header'>
                                    <h2 className='admin-title'>Entity Email Table</h2>
                                </div>
                                <div className='table-responsive'>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>Email</th>
                                                <th>Salutation</th>
                                                <th>Entity ID</th>
                                                <th>Claim</th>
                                                <th>Underwriting</th>
                                                <th>Accounting</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <tr>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>
                                                    <span className='status active'>Active</span>
                                                </td>
                                                <td>
                                                    <Button className='btn-action delete'>
                                                        <AiFillDelete />
                                                    </Button>
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <td>0012</td>
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
                                            <Button type="submit" className='admin-page-btn'>
                                                Add More
                                                <BsPlusLg className='icon' />
                                            </Button>
                                        </Form.Group>
                                    </Col>
                        </div>
                        <div className='admin-section admin-section-page'>
                        <h2 className='admin-title'>Entity Email Form</h2>
                            <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity ID</Form.Label>
                                            <Form.Control type="text" {...register("entityId")} placeholder="ex: Entity Id" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4 form-main">
                                            <Form.Label>Email</Form.Label>
                                            <span className='error'>
                                                {errors?.email?.type === "required" && <p>*</p>}
                                            </span>
                                            <Form.Control type="text"
                                                {...register("email", { required: true, })}
                                                placeholder="ex: JohnDoe@gmail.com" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Salutation</Form.Label>
                                            <Form.Control type="text" {...register("salutation")} placeholder="ex: Salutation" />
                                        </Form.Group>
                                    </Col>
                                    
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Claim </Form.Label>
                                            {/* <Form.Control type="text" {...register("claim")} placeholder="ex: true/false" /> */}
                                            <Form.Select>
                                                <option>Select Claim</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Underwriting</Form.Label>
                                            {/* <Form.Control type="text" {...register("underwriting")} placeholder="ex: true/false" /> */}
                                            <Form.Select aria-label="Default select example">
                                                <option>Choose Underwriting</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Accounting</Form.Label>
                                            {/* <Form.Control type="text" {...register("accounting")} placeholder="ex: true/false" /> */}
                                            <Form.Select aria-label="Default select example">
                                                <option>Choose Accounting</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4" {...register("status")}>
                                            <Form.Label>Status</Form.Label>
                                            <div className='status-check'>
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
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Tax</Accordion.Header>
                    <Accordion.Body>
                    <div className='admin-section'>
                                <div className='admin-header'>
                                    <h2 className='admin-title'>Tax Table</h2>
                                </div>
                                <div className='table-responsive'>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>Tax Name</th>
                                                <th>Reg NO</th>
                                                <th>Rate</th>
                                                <th>Calculation ID</th>
                                                <th>TDS/WTH Tax</th>
                                                <th>IsTDS WTH Req</th>
                                                <th>IsTax Under Rev Charge</th>
                                                <th>isActive</th>
                                                <th>IsNegative</th>
                                                <th>Entity ID</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <tr>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>
                                                    <Button className='btn-action delete'>
                                                        <AiFillDelete />
                                                    </Button>
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <td>0012</td>
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
                                            <Button type="submit" className='admin-page-btn'>
                                                Add More
                                                <BsPlusLg className='icon' />
                                            </Button>
                                        </Form.Group>
                                    </Col>
                        </div>
                        <div className='admin-section admin-section-page'>
                        <h2 className='admin-title'>Tax Form</h2>
                            <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity ID</Form.Label>
                                            <Form.Control type="text" {...register("entityId")} placeholder="ex: Entity Id" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4 form-main">
                                            <Form.Label>Tax Name</Form.Label>
                                            <span className='error'>
                                                {errors?.taxName?.type === "required" && <p>*</p>}
                                            </span>
                                            <Form.Control type="text"
                                                {...register("taxName", { required: true, })}
                                                placeholder="ex: Tax Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Reg NO</Form.Label>
                                            <Form.Control type="text" {...register("regNo")} placeholder="ex: Reg no" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Rate</Form.Label>
                                            <Form.Control type="number" {...register("rate")} placeholder="ex: Rate" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Calculation ID</Form.Label>
                                            <Form.Control type="text" {...register("calculationId")} placeholder="ex: Calculation Id" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>TDS/WTH Tax</Form.Label>
                                            <Form.Control type="number" {...register("tdsWthTax")} placeholder="ex: TDs/WTH Tax" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>IsTDS WTH Req</Form.Label>
                                            {/* <Form.Control type="text" {...register("isTdsWthReq")} placeholder="ex: true/false" /> */}
                                            <Form.Select aria-label="Default select example">
                                                <option>Select Action</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>IsTax Under Rev Charge</Form.Label>
                                            {/* <Form.Control type="text" {...register("isTaxUnderRevCharge")} placeholder="ex: true/false" /> */}
                                            <Form.Select aria-label="Default select example">
                                                <option>Select Action</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>isActive</Form.Label>
                                            {/* <Form.Control type="text" {...register("isActive")} placeholder="ex: true/false" /> */}
                                            <Form.Select aria-label="Default select example">
                                                <option>Select Action</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>IsNegative</Form.Label>
                                            {/* <Form.Control type="text" {...register("isNegative")} placeholder="ex: true/false" /> */}
                                            <Form.Select aria-label="Default select example">
                                                <option>Select Action</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    
                                    <Col md={12}>
                                        <Form.Group className="form-actions">
                                            <Button type="submit" className='admin-page-btn'>Submit</Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Tax Document</Accordion.Header>
                    <Accordion.Body>
                    <div className='admin-section'>
                                <div className='admin-header'>
                                    <h2 className='admin-title'>Tax Document Table</h2>
                                </div>
                                <div className='table-responsive'>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>Document Name</th>
                                                <th>IsRequired</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Entity ID</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <tr>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>sdf</td>
                                                <td>
                                                    <Button className='btn-action delete'>
                                                        <AiFillDelete />
                                                    </Button>
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <td>0012</td>
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
                                            <Button type="submit" className='admin-page-btn'>
                                                Add More
                                                <BsPlusLg className='icon' />
                                            </Button>
                                        </Form.Group>
                                    </Col>
                        </div>
                        <div className='admin-section admin-section-page'>
                        <h2 className='admin-title'>Tax Document Form</h2>
                            <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Entity ID</Form.Label>
                                            <Form.Control type="text" {...register("entityId")} placeholder="ex: Entity Id" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Document Name</Form.Label>
                                            <Form.Control type="text" {...register("regNo")} placeholder="ex: Document Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>IsRequired</Form.Label>
                                            {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                            <Form.Select aria-label="Default select example">
                                                <option>--Select Action--</option>
                                                <option value="1">true</option>
                                                <option value="2">false</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Start Date</Form.Label>
                                            <Form.Control type="date" {...register("calculationId")} placeholder="ex: 13/06/1998" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>End Date</Form.Label>
                                            <Form.Control type="date" {...register("tdsWthTax")} placeholder="ex: 25/06/2005" />
                                        </Form.Group>
                                    </Col>
                                    
                                    <Col md={12}>
                                        <Form.Group className="form-actions">
                                            <Button type="submit" className='admin-page-btn'>Submit</Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Calculation</Accordion.Header>
                    <Accordion.Body>
                    <div className='admin-section'>
                        <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                        <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                    <Form.Label>Entity ID</Form.Label>
                                    <Form.Control type="text" {...register("EntityId")} placeholder="ex: Entity Id" />
                                </Form.Group>
                            </Col>
                        <Col md={4}>
                            <Form.Group className="mb-4">
                                <Form.Label>field1Type</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                        </Col>
                            <Col md={4} className="mb-2">
                            <Form.Group className="mb-4">
                                <Form.Label>field1Name</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>operation1_2</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>field2Type</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>Field2Name</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>Operation2_3</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>field3Type</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>field3Name</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>operation3_4</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>field4Type</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>field4Name</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>operation4_5</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>field5Type</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="mb-2">
                                <Form.Group className="mb-4">
                                <Form.Label>field5Name</Form.Label>
                                    {/* <Form.Control type="text" {...register("rate")} placeholder="ex: true/false" /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>--Select Action--</option>
                                        <option value="1">true</option>
                                        <option value="2">false</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="form-actions">
                                    <Button type="submit" className='admin-page-btn'>Submit</Button>
                                </Form.Group>
                            </Col>
                        </Row>
                        </Form>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}


export default BusinessEntity;