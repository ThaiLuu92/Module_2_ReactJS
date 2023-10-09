import React from 'react'
import { imageLogos } from '../assets/img/logos'

function Clients() {
  return (
      <div className="py-5">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-3 col-sm-6 my-3">
                      <a href="#!">
                          <img
                              className="img-fluid img-brand d-block mx-auto"
                              src={imageLogos.img_microsoft}
                              alt="..."
                              aria-label="Microsoft Logo"
                          />
                      </a>
                  </div>
                  <div className="col-md-3 col-sm-6 my-3">
                      <a href="#!">
                          <img
                              className="img-fluid img-brand d-block mx-auto"
                              src={imageLogos.img_google}
                              alt="..."
                              aria-label="Google Logo"
                          />
                      </a>
                  </div>
                  <div className="col-md-3 col-sm-6 my-3">
                      <a href="#!">
                          <img
                              className="img-fluid img-brand d-block mx-auto"
                              src={imageLogos.img_facebook}
                              alt="..."
                              aria-label="Facebook Logo"
                          />
                      </a>
                  </div>
                  <div className="col-md-3 col-sm-6 my-3">
                      <a href="#!">
                          <img
                              className="img-fluid img-brand d-block mx-auto"
                              src={imageLogos.img_ibm}
                              alt="..."
                              aria-label="IBM Logo"
                          />
                      </a>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Clients
