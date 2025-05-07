import React from "react";
import AboutImg from "../../assets/about.png";
import Team1 from "../../assets/team-1.jpg";
import Team2 from "../../assets/team-2.jpg";
import Team3 from "../../assets/team-3.jpg";
export default function About() {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4">About NOVA</h1>
          <p className="lead">Crafting Elegance Since 2005</p>
          <hr className="my-4" />
        </div>
      </div>

      <div className="row mb-5 align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={AboutImg}
            alt="Our workshop"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="h3 mb-4">Our Story</h2>
          <p>
            NOVA began as a small family workshop with a passion for creating
            timeless jewelry pieces. Founded by master craftsman Michael
            Thornton in 2005, we've grown into a respected name in the jewelry
            industry while maintaining our commitment to quality and
            craftsmanship.
          </p>
          <p>
            Each piece in our collection is meticulously designed and
            handcrafted by our team of skilled artisans who blend traditional
            techniques with modern innovation.
          </p>
          <p>
            We believe that jewelry is more than an accessory—it's a piece of
            art that tells a story and captures moments that last a lifetime.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Our Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i
                      className="bi bi-gem"
                      style={{ fontSize: "2rem", color: "#6c757d" }}
                    ></i>
                  </div>
                  <h3 className="h5 card-title">Quality Craftsmanship</h3>
                  <p className="card-text">
                    We use only the finest materials and employ skilled artisans
                    to create jewelry pieces that stand the test of time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i
                      className="bi bi-heart"
                      style={{ fontSize: "2rem", color: "#6c757d" }}
                    ></i>
                  </div>
                  <h3 className="h5 card-title">Ethical Sourcing</h3>
                  <p className="card-text">
                    We are committed to responsible practices, ensuring all our
                    materials are ethically sourced and conflict-free.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i
                      className="bi bi-people"
                      style={{ fontSize: "2rem", color: "#6c757d" }}
                    ></i>
                  </div>
                  <h3 className="h5 card-title">Customer Satisfaction</h3>
                  <p className="card-text">
                    We prioritize building lasting relationships with our
                    customers through exceptional service and personalized
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <h2 className="mb-4">Meet Our Team</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img src={Team1} className="card-img-top" alt="Team member" />
                <div className="card-body text-center">
                  <h5 className="card-title">Michael Thornton</h5>
                  <p className="card-text text-muted">
                    Founder & Master Craftsman
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img src={Team2} className="card-img-top" alt="Team member" />
                <div className="card-body text-center">
                  <h5 className="card-title">Sophia Chen</h5>
                  <p className="card-text text-muted">Head Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img src={Team3} className="card-img-top" alt="Team member" />
                <div className="card-body text-center">
                  <h5 className="card-title">James Wilson</h5>
                  <p className="card-text text-muted">Gemologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
