import React, { Component } from 'react';

class Certificates extends Component {
  render() {

    if (this.props.data) {
      var certificates = this.props.data.courses.map(function (certificate) {
        var certificateImg = 'images/certificates/' + certificate.image;
        
        return (
          <div key={certificate.title} className="columns certificates-item">
            <div className="item-wrap">
              <a href={certificate.url} title={certificate.title}>
                <img alt={certificate.title} src={certificateImg} />
                <div className="overlay">
                  <div className="certificates-item-meta">
                    <h6>{certificate.title}</h6>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="certificates">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Cursos que he realizado y sus certificados.</h1>

            <div id="certificates-wrapper" className="bgrid-fifth s-bgrid-thirds cf">
              {certificates}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Certificates;
