import React, { Component } from 'react'
import img3 from '../assets/img/img3.jpg'
import {Jumbotron}from 'reactstrap'
import {Carousel} from 'react-bootstrap'

class homepageComponent extends Component {
  render() {
    return (
       <div>
            <Jumbotron>
              <div className="container">
                  <div className="row row-header">
                      <div className="col-12 col-sm-6">
                          <h1 className='said'>Universidad de la Calle</h1>
                          <p>Crecemos con tigo y tus necesidades</p>
                      </div>
                    </div>
                </div>
          </Jumbotron>
          <Carousel className="miCarousel">
                  <Carousel.Item interval={2000}>
                      <img
                        className="d-block w-100"
                        src="https://img.wallpapic.es/i1115-129-243/medium/azules-para-monitores-duales-cortina-abstractos-fondo-de-pantalla.jpg"
                        alt="First slide"
                       />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                      <img
                         className="d-block w-100"
                         src="https://p4.wallpaperbetter.com/wallpaper/340/215/687/3d-4k-hd-desktop-wallpaper-preview.jpg"
                         alt="Second slide"
                       />
                     <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}> 
                      <img
                         className="d-block w-100"
                         src="https://fondosmil.com/fondo/31375.jpg"
                         alt="Third slide"
                        />
                     <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
        </div>
    )
  }
}

export default homepageComponent