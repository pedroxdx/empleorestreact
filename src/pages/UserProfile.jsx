import React from "react";
import { HeaderApp, HeaderPage, FooterApp } from "./Secciones";

function UserProfile() {
  return (
    <>
      <HeaderApp />
      <HeaderPage title="Perfil" />
      <section className="admin">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="the-box rounded">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12">
                    <h1 className="page-heading">Currículum Profesional</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12">
                    <ul class="nav nav-tabs" id="profileTab" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="personal-tab"
                          data-toggle="tab"
                          href="#personal"
                          role="tab"
                          aria-controls="personal"
                          aria-selected="true"
                        >
                          Datos Personales
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="personal"
                        role="tabpanel"
                        aria-labelledby="personal-tab"
                      >
                        ...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterApp />
    </>
  );
}

export default UserProfile;
