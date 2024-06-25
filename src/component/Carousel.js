import React from 'react';
import { Carousel } from 'react-bootstrap';
import f1 from '../imagess/f1.jpg';
import f2 from '../imagess/f2.jpg';
import f3 from '../imagess/f3.jpg';
import './Carousel.css'; // Ensure this CSS file contains your overlay styles

export default function CustomCarousel() {
    return (
        <div className="carousel-container" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
            <Carousel fade>
                <Carousel.Item>
                    <div className="carousel-image-wrapper" data-bs-interval="10000">
                        <img src={f1} className="d-block w-100" alt="Food 1" />
                        <div className="carousel-image-overlay"></div>
                        <div className="search-overlay">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-image-wrapper" data-bs-interval="20000">
                        <img src={f2} className="d-block w-100" alt="Food 2" />
                        <div className="carousel-image-overlay"></div>
                        <div className="search-overlay">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-image-wrapper" data-bs-interval="30000">
                        <img src={f3} className="d-block w-100" alt="Food 3" />
                        <div className="carousel-image-overlay"></div>
                        <div className="search-overlay">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
