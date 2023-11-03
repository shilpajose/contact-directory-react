import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


function Singlview() {

    const [allData,setData]=useState([])

    const {email}=useParams()
    // console.log(email);

    const fetchAllData = async () => {
        const result = await axios.get('/contact-list.json')
        setData(result.data.contacts)
    }
    useEffect(() => {
        fetchAllData()
    }, [])
// single data access using id
const singleData = allData.find(i => i.email == email)
console.log(singleData);

  return (
    <div>
    {singleData &&
        <Row className='p-5'>
            <Col className='p-5'>
                <img style={{ height: '400px', width: '100%' }} src={singleData.profile} />
            </Col>
            <Col className='me-5 pe-5'>
                <h1 className='text-danger'>{singleData.name}</h1>
                <ListGroup className='mt-1 pt-5 mb-5'>
                    <ListGroup.Item>Email Id:{singleData.email}</ListGroup.Item>
                    <ListGroup.Item className='mt-1'>MobileNumber:{singleData.mobile}</ListGroup.Item>
                    <ListGroup.Item className='mt-1'>Location:{singleData.location}</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>


    }
   
</div>
  )
}

export default Singlview