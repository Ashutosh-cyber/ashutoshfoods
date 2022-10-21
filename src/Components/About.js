import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop">
        <h1> ABOUT US</h1>

        <div className="paragraph">
          <p>
            <b>ASHUTOSH FOODS </b> was established in the year 2018 with the
            vision to provide the best quality of
            <i> Dry Fruits ,Spices and Grains </i> fresh fromt the field . The
            company was founded by <b>Mohan Santu Parab </b>, the company is
            currently situated in Maharashtra Industrial Development
            Corporation(MIDC) , Halkarni ,Chandgad, Kolhapur,Maharashtra ,India.
            We are primarily <b>Wholesalers</b> and the products are listed on
            the current website .
          </p>
        </div>

        <div className="comapnyInfo">
          <h2>Basic Information</h2>
          <div>
            <table>
              <tr>
                <td>BUSINESS TYPE</td>
                <td>Manufacturer, Wholesalers</td>
              </tr>
              <tr>
                <td>OWNER</td>
                <td>Mohan Santu Parab</td>
              </tr>
              <tr>
                <td>ADDRESS</td>
                <td>
                  B25 ,MIDC ,Halkarni, Tal. Chandgad, Dist. Kolhapur,
                  Maharashtra, India
                </td>
              </tr>

              <tr>
                <td>NO. OF EMPLOYEES</td>
                <td>5-10</td>
              </tr>

              <tr>
                <td>YEAR OF ESTABLISHMENT</td>
                <td>2018</td>
              </tr>

              <tr>
                <td>LEGAL STATUS OF COMPANY</td>
                <td>Proprietorship </td>
              </tr>

              <tr>
                <td>GST NO.</td>
                <td>27AKMPP6332Q1ZB</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
