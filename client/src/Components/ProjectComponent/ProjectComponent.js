import React from 'react';
import {MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdbreact';

import './ProjectComponent.css';

const ProjectComponent = () => {
    return (
        <div className="ProjectItem">
            <MDBCol style={{ maxWidth: "22rem"}}>
                <MDBCard style={{boxShadow: "0 8px 6px -6px #4d4d4d"}}>
                    <MDBCardImage 
                        className="img-fluid" 
                        src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                        waves />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                        <MDBBtn href="#">Click</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default ProjectComponent;