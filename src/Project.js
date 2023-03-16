import React from 'react'

const Project = () => {
  return (
      <section className='portfoliostyle' id='section4'>
        <div className="portfolio-heading">
          <h1 style={{marginTop: '30px'}}>Projects</h1>

          <div
              className="portfolio-item"
              data-aos="fade-left"
              data-aos-delay="200"
          >
            <div className="portfolio-description" style={{textAlign: 'center'}}>
              <h3 style={{fontWeight: 'bold', color: '#fff', marginBottom: '10px'}}>Desktop Application</h3>
              <h2>Covid-19 Vaccines Management System</h2>
              <p style={{color: '#fff'}}>
                A desktop application was created using Python to collect essential details related to getting the COVID-19 vaccine.

                This application serves as a one-stop platform for users to input their personal information, vaccination status, and other relevant details in a secure and user-friendly manner.
              </p>

            </div>
          </div>
          <div
              className="portfolio-item"
              data-aos="fade-right"
              data-aos-delay="300"
          >
            <div className="portfolio-description" style={{textAlign: 'center'}}>
              <h3 style={{fontWeight: 'bold', color: '#fff', marginBottom: '10px'}}>Mobile Application</h3>
              <h2>AUDIBLE Audio Book </h2>
              <p style={{color: '#fff'}}>
                The audiobook mobile application is a revolutionary tool designed specifically for visually impaired individuals who face challenges when it comes to reading books.

                With its user-friendly interface and seamless functionality, this application offers a comprehensive solution to the accessibility issues faced by visually impaired individuals.
              </p>

            </div>
          </div>

        </div>
      </section>
  )
}
export default Project;
