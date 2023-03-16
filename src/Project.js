import React from 'react'
import webDevelop from './Images/covid19.jpg'
import Android from './Images/android.png'
import IOS from './Images/ios.jpg'

const Project = () => {
  return (
      <section className='portfoliostyle' id='section4'>
        <div className="portfolio-heading" style={{color: 'white', textAlign: 'center', marginLeft: '1cm'}}>
          <h1 style={{marginTop: '30px'}}>Projects</h1>
          <div
              className="portfolio-item"
              data-aos="fade-left"
              data-aos-delay="200"
          >
            <div className="portfolio-img has-margin-right"style={{marginLeft: 20}} >
              <img src={webDevelop} height='250px' alt="" />
            </div>
            <div className="portfolio-description">
              <h6 style={{fontStyle: 'italic', fontSize: '25px', fontWeight: 'bold'}} >Desktop Application</h6>
              <h2 style={{fontWeight: 'bold',fontSize: '30px'}} >Covid - 19 Vaccines Management System</h2>
              <p>
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
            <div className="portfolio-description has-margin-right" style={{marginLeft: 20}}>
              <h6 style={{fontStyle: 'italic', fontSize: '25px', fontWeight: 'bold'}} >Mobile Application</h6>
              <h2 style={{fontWeight: 'bold',fontSize: '30px'}} >AUDIBLE Audio Book </h2>
              <p>
                The audiobook mobile application is a revolutionary tool designed specifically for visually impaired individuals who face challenges when it comes to reading books.

                With its user-friendly interface and seamless functionality, this application offers a comprehensive solution to the accessibility issues faced by visually impaired individuals.
              </p>

            </div>
            <div className="portfolio-img">
              <img src={Android} height='250' alt="" />
            </div>
          </div>
          <div

          >

          </div>
        </div>
      </section>
  )
}

export default Project;
