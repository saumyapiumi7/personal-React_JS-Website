import React from 'react'
import webDevelop from './Images/covid19.jpg'
import Android from './Images/android.png'
import IOS from './Images/ios.jpg'

const Project = () => {
  return (
      <section className='portfoliostyle' id='section3'>
        <div className="portfolio-heading">
          <h1 style={{marginTop: '20px', color: '#fff', textAlign: 'left'}}>Projects</h1>
          <p style={{textAlign: 'justify', fontFamily: 'Times New Roman', color: '#fff'}}>
          </p>
          <div
              className="portfolio-item"
              data-aos="fade-left"
              data-aos-delay="200"
          >
            <div className="portfolio-img has-margin-right" style={{float: 'right'}}>
              <img src={webDevelop} height='250px' alt="" />
            </div>
            <div className="portfolio-description" style={{float: 'left', marginLeft: '1cm', textAlign: 'left'}}>
              <h3 style={{fontWeight: 'bold', marginBottom: '10px', color: '#fff'}}>Desktop Application</h3>
              <h2 style={{color: '#fff'}}>Covid-19 Vaccines Management System</h2>
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
            <div className="portfolio-description has-margin-right" style={{float: 'left', marginRight: '1cm', textAlign: 'left'}}>
              <h3 style={{fontWeight: 'bold', marginBottom: '10px', color: '#fff'}}>Mobile Application</h3>
              <h2 style={{color: '#fff'}}>AUDIBLE Audio Book </h2>
              <p style={{color: '#fff'}}>
                The audiobook mobile application is a revolutionary tool designed specifically for visually impaired individuals who face challenges when it comes to reading books.

                With its user-friendly interface and seamless functionality, this application offers a comprehensive solution to the accessibility issues faced by visually impaired individuals.
              </p>

            </div>
            <div className="portfolio-img" style={{float: 'right'}}>
              <img src={Android} height='250px' alt="" />
            </div>
          </div>

        </div>
      </section>
  )
}
export default Project;

