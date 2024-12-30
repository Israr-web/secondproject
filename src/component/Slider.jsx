import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssfiles/Slider.css';

export default function Slider() {
    return (
        <div className="container-fluid">
            <div class="sliderclass">
                <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src="img/shoes.jpg" alt="..." id="imgslider" />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="img/shoes1.jpg" alt="..." id="imgslider" />
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <img src="img/shoes.jpg" alt="..." id="imgslider" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
