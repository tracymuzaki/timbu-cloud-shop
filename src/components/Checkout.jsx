import React from "react";
import "../component.css/Checkout.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <h1 className="mb-5">Guest Checkout</h1>
      <div className="row">
        <div className="col-6 ">
          <h2>Delivery Option</h2>
          <div className="row g-3 mt-4 mb-4">
            <div class="col-md-6">
              <input type="submit" class="form-control bg-success p-3" value={"Pick Up"} />
            </div>
            <div class="col-md-6">
              <input type="submit" class="form-control p-3" value={"Home Delivery"} />
            </div>
          </div>
          <h4>Home/Office</h4>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputFirstName" class="form-label">
                First Name
              </label>
              <input type="text" class="form-control" id="inputFirstName" />
            </div>
            <div class="col-md-6">
              <label for="inputLastName" class="form-label">
                Last Name
              </label>
              <input type="text" class="form-control" id="inputLastName" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Post Code
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Phone Number
              </label>
              <input type="tel" class="form-control" id="inputPhoneNumber" />
            </div>
          </form>
        </div>
        <div className="col-6">
          <div className="row pb-4">
            <div className="col-6">
              <h2>Your Order</h2>
            </div>
            <div className="col-6">
              <button type="submit" class="btn btn-primary">
                Edit
              </button>
            </div>
          </div>
          <div className="row">
            <p>
              Subtotal <span>₦ 8,500</span>
            </p>
            <p>
              Shipping <span>₦ 1,000</span>
            </p>
            <hr />
            <p>
              Total <span>₦ 9,500</span>
            </p>
          </div>
          <div className="row">
            <p>
              Estimated delivery date(s) <span>₦ 9,500</span>
            </p>
            <p>Between 10-Jul-2024 and 12-Jul-2024</p>
          </div>
        </div>
      </div>
      <div className="row g-3 mt-5">
        <div class="col-6">
          <button type="submit" class="btn">
            <span className="text-success">←</span>{" "}
            <span class="text-primary"> Back</span>
          </button>
        </div>
        <div class="col-6 text-end">
          <button type="submit" class="btn btn-success">
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
