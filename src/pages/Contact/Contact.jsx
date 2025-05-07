import React from "react";

export default function Contact() {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">We'd love to hear from you</p>
          <hr className="my-4" />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-5 mb-5 mb-lg-0">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-5">
              <h3 className="h4 mb-4">Get In Touch</h3>

              <div className="d-flex align-items-start mb-3">
                <div className="flex-shrink-0 me-3">
                  <i
                    className="bi bi-geo-alt text-primary"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </div>
                <div>
                  <h4 className="h6 mb-1">Visit Our Store</h4>
                  <p className="mb-0">
                    123 Jewelry Lane, Diamond District
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <div className="flex-shrink-0 me-3">
                  <i
                    className="bi bi-telephone text-primary"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </div>
                <div>
                  <h4 className="h6 mb-1">Call Us</h4>
                  <p className="mb-0">(800) 123-4567</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <div className="flex-shrink-0 me-3">
                  <i
                    className="bi bi-envelope text-primary"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </div>
                <div>
                  <h4 className="h6 mb-1">Email Us</h4>
                  <p className="mb-0">info@radiantrings.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="flex-shrink-0 me-3">
                  <i
                    className="bi bi-clock text-primary"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </div>
                <div>
                  <h4 className="h6 mb-1">Opening Hours</h4>
                  <p className="mb-0">
                    Monday - Friday: 10AM - 7PM
                    <br />
                    Saturday: 11AM - 6PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-5">
              <h3 className="h4 mb-4">Send Us a Message</h3>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <select className="form-select" id="subject" required>
                      <option value="" selected disabled>
                        Please select
                      </option>
                      <option value="customer-service">Customer Service</option>
                      <option value="custom-order">Custom Order Inquiry</option>
                      <option value="product-question">Product Question</option>
                      <option value="appointment">
                        Schedule an Appointment
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="newsletter"
                      />
                      <label className="form-check-label" htmlFor="newsletter">
                        Subscribe to our newsletter for exclusive offers and
                        updates
                      </label>
                    </div>
                  </div>
                  <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
