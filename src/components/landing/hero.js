import React from "react"

import Image from "../image"
import Links from "../links"

import { Link } from "react-scroll"

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container h-100">
        <div className="row h-100 justify-content-around">
          {/* + Hero section: Left side */}
          <div className="col-lg-5 my-auto">
            <div className="hero-introduction">
              <h1>
                <span className="wave" role="img" aria-label="Hand wave">
                  👋 
                </span>
              </h1>
              <h1>Hi. I'm Damue Brandon</h1>
              <p>
               A front-end web developer and student at 7 Advanced Academy Douala, Cameroon
              </p>
              <Link
                to="content"
                className="main-button btn btn-primary shadow-sm"
                smooth={true}
              >
                Get to know me 😇 
              </Link>
            </div>
          </div>
          {/* - Hero section: Left side */}

          {/* + Hero section: Right side */}
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm mb-5">
                <div className="card-body">
                  <div className="icon">
                    <Image
                      fileName="photo.jpg"
                      style={{ width: "5rem", height: "5rem" }}
                      alt="Hero Icon"
                    />
                  </div>
                  <h3 className="card-title">@brandonbawe</h3>
                  <h4>
                    <span
                      className="mr-1"
                      role="img"
                      aria-label="pin"
                      alt="pin emoji"
                    >
                      📍
                    </span>
                    Douala, Cameroon
                    <br />
                  </h4>
                  <p className="card-text">
                    front-end web developer,
                    <br />
                    dev enthusiast
                  </p>
                  <Links />
                </div>
              </div>
            </div>
          </div>
          {/* - Hero section: Right side */}
        </div>
      </div>
    </section>
  )
}
