import React from "react";

const InquiryPage = () => {
  return (
    <div className="inquiry">
      <div className="general-inquiry">
        <h2 style={{ textDecoration: "underline", textAlign: "center" }}>
          GENERAL ENQUIRY
        </h2>
        To make enquiry about our services and what we offer, please contact us
        on our general help desk numbers{" "}
        <span style={{ fontWeight: "bold" }}>+1234567890</span> or{" "}
        <span style={{ fontWeight: "bold" }}>+44987654321</span>, we will be
        happy to answer your questions and WE HOPE TO SEE YOU SOON..
      </div>
      <div className="locations">
        <div>
          <h2 style={{ textDecoration: "underline" }}>LOCATIONS</h2>
          <div>
            <p style={{ fontWeight: "bold" }}>United Kingdom</p>
            South side beach, Huddersfield town, HD1 3DH, UK
            <p>+447749956489</p>
          </div>
          <hr />
          <div>
            <p style={{ fontWeight: "bold" }}>USA</p>
            East lane makers seaside,Old towon road, CastleTown Atlanta,
            georgia, USA
            <p>+144738947389</p>
          </div>
          <hr />
          <div>
            <p style={{ fontWeight: "bold" }}>Australia</p>
            Englewood Road beach, Melbourne, Australia
            <p>+382937455848</p>
          </div>
          <hr />
          <div>
            <p style={{ fontWeight: "bold" }}>UAE</p>
            King Umar bin Anwar beach, Dubai, UAE
            <p>+684646849399</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;
