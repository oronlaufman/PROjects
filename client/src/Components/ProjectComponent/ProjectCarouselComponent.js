import React, {Component} from 'react';
import {Carousel, Row} from 'react-bootstrap';

import ProjectComponent from './ProjectComponent';
import './ProjectComponent.css';

class ProjectCarouselComponent extends Component {
    state = {
        background: "lightskyblue",
        animation: "null"
    }

    scrollEventHandler = (event) => {
        if (window.scrollY > 300) {
            this.setState({
                background: "linear-gradient(to bottom, #87cefa 10%, #a6c5d9 100%, #000000 100%)",
                animation: "grow 360s  linear 10ms" 
            });
        }
        else {
            this.setState({
                background: "lightskyblue",
                animation: "null"
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollEventHandler);

        fetch("/home")
            .then(res => res.json())
            .then((result => {
                console.log(result["projects_json"])
            }));
      }

    render () {
        const RowStyle = {
            marginLeft: "5%",
            marginRight: "5%"
        }

        return (
            <div className="Carousel" style={this.state}>
                <h3>Our Open Projects</h3>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <Row style={RowStyle}>
                            <ProjectComponent />
                            <ProjectComponent />
                            <ProjectComponent />
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <Row style={RowStyle}>
                            <ProjectComponent />
                            <ProjectComponent />
                            <ProjectComponent />
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Row style={RowStyle}>
                            <ProjectComponent />
                            <ProjectComponent />
                            <ProjectComponent />
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default ProjectCarouselComponent;


// import React from "react";
// import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
// MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

// import ProjectComponent from './ProjectComponent';
// import './ProjectComponent.css';

// const MultiCarouselPage = () => {
//   return (
//     <MDBContainer className="Carousel">
//       <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
//         <MDBCarouselInner>
//           <MDBRow>
//             <MDBCarouselItem itemId="1">
//                 <div className="row">
//                     <MDBCol md="4">
//                         <ProjectComponent />
//                     </MDBCol>
//                     <MDBCol md="4">
//                         <ProjectComponent />
//                     </MDBCol>
//                     <MDBCol md="4">
//                         <ProjectComponent />
//                     </MDBCol>
//                 </div>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="2">
//                 <div className="row">
//                     <MDBCol md="4">
//                         <MDBCard className="mb-2">
//                         <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
//                         <MDBCardBody>
//                             <MDBCardTitle>MDBCard title</MDBCardTitle>
//                             <MDBCardText>
//                             Some quick example text to build on the card title and
//                             make up the bulk of the card's content.
//                             </MDBCardText>
//                             <MDBBtn color="primary">MDBBtn</MDBBtn>
//                         </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                     <MDBCol md="4">
//                         <MDBCard className="mb-2">
//                         <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
//                         <MDBCardBody>
//                             <MDBCardTitle>MDBCard title</MDBCardTitle>
//                             <MDBCardText>
//                             Some quick example text to build on the card title and
//                             make up the bulk of the card's content.
//                             </MDBCardText>
//                             <MDBBtn color="primary">MDBBtn</MDBBtn>
//                         </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                     <MDBCol md="4">
//                         <MDBCard className="mb-2">
//                         <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
//                         <MDBCardBody>
//                             <MDBCardTitle>MDBCard title</MDBCardTitle>
//                             <MDBCardText>
//                             Some quick example text to build on the card title and
//                             make up the bulk of the card's content.
//                             </MDBCardText>
//                             <MDBBtn color="primary">MDBBtn</MDBBtn>
//                         </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                 </div>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="3">
//                 <div className="row">
//                     <MDBCol md="4">
//                         <MDBCard className="mb-2">
//                         <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
//                         <MDBCardBody>
//                             <MDBCardTitle>MDBCard title</MDBCardTitle>
//                             <MDBCardText>
//                             Some quick example text to build on the card title and
//                             make up the bulk of the card's content.
//                             </MDBCardText>
//                             <MDBBtn color="primary">MDBBtn</MDBBtn>
//                         </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                     <MDBCol md="4">
//                         <MDBCard className="mb-2">
//                         <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
//                         <MDBCardBody>
//                             <MDBCardTitle>MDBCard title</MDBCardTitle>
//                             <MDBCardText>
//                             Some quick example text to build on the card title and
//                             make up the bulk of the card's content.
//                             </MDBCardText>
//                             <MDBBtn color="primary">MDBBtn</MDBBtn>
//                         </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                     <MDBCol md="4">
//                         <MDBCard className="mb-2">
//                         <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
//                         <MDBCardBody>
//                             <MDBCardTitle>MDBCard title</MDBCardTitle>
//                             <MDBCardText>
//                             Some quick example text to build on the card title and
//                             make up the bulk of the card's content.
//                             </MDBCardText>
//                             <MDBBtn color="primary">MDBBtn</MDBBtn>
//                         </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>                    
//                 </div>
//             </MDBCarouselItem>
//           </MDBRow>
//         </MDBCarouselInner>
//       </MDBCarousel>
//     </MDBContainer>
//   );
// }

// export default MultiCarouselPage;