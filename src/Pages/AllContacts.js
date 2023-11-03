import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ContactList from '../Components/ContactList'
import { Col, Row } from 'react-bootstrap'
// import './AllContacts.css'
// import './Footer.css'


function AllContacts() {

    const [contacts, setContacts] = useState([])
    const fetchData = async () => {
        const result = await axios.get('/contact-list.json')
        setContacts(result.data.contacts);
    }

    useEffect(() => {
        fetchData()
    }, [])
    // console.log(contacts);
    return (
        <div>
            <div style={{ height: '100vh' }}>

                <Row>
                    <Col>
                        <img src="https://i.postimg.cc/DwhDSMM6/contact.jpg" alt="" style={{ height: '350px' }} />
                    </Col>
                    <Col>
                        <h1 className='mt-5 pt-5'>Employee Contact Directory</h1>
                        <p>Connect with Everyone</p>
                    </Col>
                </Row>


                <Row id="row">
                    {
                        contacts.map(i => (

                            <Col id='list' className="mt-3 ms-5" lg={3} md={4} sm={6} ><ContactList item={i}></ContactList></Col>
                            // className="mt-3 ms-5" lg={3} md={4} sm={6}
                        ))

                    }
                </Row>
            </div>
        </div>
    )

}

export default AllContacts