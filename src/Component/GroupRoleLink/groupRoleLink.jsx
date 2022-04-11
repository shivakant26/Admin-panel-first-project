import React, { useEffect, useState } from "react";
import { Container, Row , Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const GroupRoleLink = () =>{
    const { register, handleSubmit , formState: { errors } } = useForm();
    const [ List , setList ] = useState([]);

    const onSubmit = (data) =>{
        List.push(data);
        console.warn("grouproleLink",List);
      }

      useEffect(()=>{
        setList(List);
      },[])

    return(
        <div>
            <div className='admin-wrapper'>
                <div className="adminContainer">       
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className='admin-section'>
                                    <div className='admin-header'>
                                        <h2 className='admin-title'>Group Role Link</h2>
                                    </div>
                                </div>
                                <div className="grouplinkselector">
                                    <Form onChange={handleSubmit(onSubmit)}>
                                    <Form.Select aria-label="Default select example" {...register("selectRole")}>
                                        <option>Select One</option>
                                        <option value="Group Code">Group Code</option>
                                        <option value="Role Code">Role Code</option>
                            
                                    </Form.Select>
                                    </Form>
                                </div>
                                    <div className="button-tabs md-2">
                                        <Button as="input" type="submit" value="Role 1" />{' '}
                                        <Button as="input" type="submit" value="Role 2" />{' '}
                                        <Button as="input" type="submit" value="Role 3" />{' '}
                                        <Button as="input" type="submit" value="Role 4" />{' '}
                                        <Button as="input" type="submit" value="Role 5" />{' '}
                                        <Button as="input" type="submit" value="Role 6" />{' '}
                                        <Button as="input" type="submit" value="Role 7" />{' '}
                                        <Button as="input" type="submit" value="Role 8" />{' '}
                                        <Button as="input" type="submit" value="Role 9" />{' '}
                                    </div>
                            </Col>
                        </Row>
                    </Container>
                </div> 
            </div>   
        </div>
    )
}

export default GroupRoleLink;