import React, { useRef, useState } from "react";
import "./accordion.css";



const Accordion = () => {

  return (
    <div className="container horizontal-accordion">

<div class="card choice unset bg-primary text-white mx-2">
  <div className="card-body">
    <h5 className="card-title">Card 1</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light" data-mdb-ripple-color="dark">Button</button>
  </div>
</div>

<div class="card choice unset bg-secondary text-dark mx-2">
  <div className="card-body">
    <h5 className="card-title">Card 2</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-dark" data-mdb-ripple-color="dark">Button</button>
  </div>
</div>

<div class="card choice unset bg-success text-white mx-2">
  <div className="card-body">
    <h5 className="card-title">Card 3</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light" data-mdb-ripple-color="dark">Button</button>
  </div>
</div>

<div class="card choice unset bg-warning text-dark mx-2">
  <div className="card-body">
    <h5 className="card-title">Card 4</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-dark" data-mdb-ripple-color="dark">Button</button>
  </div>
</div>

<div class="card choice unset bg-danger text-white mx-2">
  <div className="card-body">
    <h5 className="card-title">Card 5</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light" data-mdb-ripple-color="dark">Button</button>
  </div>
</div>

<div class="card choice unset bg-dark text-white mx-2">
  <div className="card-body">
    <h5 className="card-title">Card 6</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light" data-mdb-ripple-color="dark">Button</button>
  </div>
</div>
</div>
  );
  
};

export default Accordion => {
  var choiceArray = document.querySelectorAll(".choice");

choiceArray.forEach((card) => {
    card.addEventListener("click", () => {
        choiceArray.forEach((element) => {
            element.classList.remove("expand", "unset")
            element.classList.add('small')
        })
        card.classList.remove("small")
        card.classList.add('expand')
    });
});

return (
  <div className="container horizontal-accordion">

<div class="card choice unset bg-primary text-white mx-2">
<div className="card-body">
  <h5 className="card-title">Card 1</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light" data-mdb-ripple-color="dark">Button</button>
</div>
</div>

<div class="card choice unset bg-secondary text-dark mx-2">
<div className="card-body">
  <h5 className="card-title">Card 2</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-dark" data-mdb-ripple-color="dark">Button</button>
</div>
</div>

<div class="card choice unset bg-success text-white mx-2">
<div className="card-body">
  <h5 className="card-title">Card 3</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light" data-mdb-ripple-color="dark">Button</button>
</div>
</div>

<div class="card choice unset bg-warning text-dark mx-2">
<div className="card-body">
  <h5 className="card-title">Card 4</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-dark" data-mdb-ripple-color="dark">Button</button>
</div>
</div>

<div class="card choice unset bg-danger text-white mx-2">
<div className="card-body">
  <h5 className="card-title">Card 5</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light" data-mdb-ripple-color="dark">Button</button>
</div>
</div>

<div class="card choice unset bg-dark text-white mx-2">
<div className="card-body">
  <h5 className="card-title">Card 6</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light" data-mdb-ripple-color="dark">Button</button>
</div>
</div>
</div>
);

}
