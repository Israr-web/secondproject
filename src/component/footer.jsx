import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssfiles/footer.css';

export default function Footer() {
    return (
        <div className="container-fluid">
            <hr color="red" />
            <div class="row" id="footerdiv">
                <div class="col-12 col-sm-6 col-md-3 col-lg-3" id='shoesdiv'>
                    <img src="img/shoesicon.jpg" alt="" id="footsho" />
                    <h3 id="footshoes">Shoes <span> Store</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi, maiores voluptates a at
                        recusandae libero. Facere est hic aut!</p>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-6" >
                    <h1 id="footfollow">Follow Us</h1>
                    <div id='shoesicons'>
                        <button type="button" class="btn btn-outline-dark" id="btnicon">
                            <i class="bi bi-facebook"></i></button>
                        <button type="button" class="btn btn-outline-dark" id="btnicon">
                            <i class="bi bi-whatsapp"></i></button>
                        <button type="button" class="btn btn-outline-dark" id="btnicon">
                            <i class="bi bi-facebook"></i></button>
                        <button type="button" class="btn btn-outline-dark" id="btnicon">
                            <i class="bi bi-whatsapp"></i></button>
                        <button type="button" class="btn btn-outline-dark" id="btnicon">
                            <i class="bi bi-facebook"></i></button>
                        <button type="button" class="btn btn-outline-dark" id="btnicon">
                            <i class="bi bi-whatsapp"></i></button>
                        <button type="button" class="btn btn-outline-dark" id="btnicon">
                            <i class="bi bi-whatsapp"></i></button>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-3 col-lg-3">
                    <h1 id="footcontact">Contact <span id="logo">Us</span></h1>
                    <p>Shop Address : <span>Shop # 3 & 4 Makkha Tower Latifabad # 2 Hyderabad Pakistan</span> </p>
                    <p>PTCL : <span>022-9392023</span> </p>
                    <p><i class="bi bi-whatsapp"></i>Moblie & WhatsApp : <span>0333-0000000</span> </p>


                </div>
            </div>
            <hr color="red" />
        </div>
    )
}
