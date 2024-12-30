import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssfiles/Whyshop.css';

export default function Whyshop() {
  return (
    <div class="container">
    <div id="why">
            <p id="shopwith">Why <span>Shop </span><span id='spanshop'>With Us</span>
                </p>
            <hr color="red"/>
    </div>

    <div class="row">
        {/* <div class="col-lg-2"></div> */}
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="card bg-dark">
                <div class="card-body">
                    <center>
                        <button type="button" class="btn btn-outline-light" id="btn_icon"><i
                                class='bi bi-bus-front-fill' id="iconcard"></i>
                        </button>
                        <h5 class="card-title text-light">Fast Delivery</h5>
                        <p class="card-text text-light">In City next Day And Other City 2 and 3 Days</p>
                    </center>
                </div>
            </div>
        </div>
        {/* <div class=" col-lg-1"></div> */}
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="card bg-dark">
                <div class="card-body">
                    <center>
                        <button type="button" class="btn btn-outline-light" id="btn_icon">
                            <i class='bx bxs-cart-add' id="iconcard"></i>
                        </button>
                        <h5 class="card-title text-light">Free Shipping</h5>
                        <p class="card-text text-light">In City Free Shipping </p>
                    </center>
                </div>
            </div>
        </div>
        {/* <div class=" col-lg-1"></div> */}
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="card bg-dark">
                <div class="card-body">
                    <center>
                        <button type="button" class="btn btn-outline-light" id="btn_icon">
                            <i class='bi bi-award-fill' id="iconcard"></i>
                        </button>
                        <h5 class="card-title text-light">Best Award</h5>
                        <p class="card-text text-light">In 2023 and 2024 Best Selling Award in Pakistan </p>
                    </center>
                </div>
            </div>
        </div>
        {/* <div class=" col-lg-2"></div> */}
    </div>

</div>
  )
}
