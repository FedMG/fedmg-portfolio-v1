import React, { useState } from "react";

// const Mailto = ({ email, subject = "", body = "", children }) => {
//   let params = subject || body ? "?" : "";
//   if (subject) params += `subject=${encodeURIComponent(subject)}`;
//   if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

//   return <a href={`mailto:${email}${params}`}>{children}</a>;
// };

const Contact = () => {
  // const [message, setMessage] = useState();

  return (
    <div id="Contact" className="section">
      <h2 className="subtitle-section">
        <span className="span-subtitle">Contact</span> me
      </h2>
      {/* <input />
      <input />
      <textarea /> */}
      <div>
        {/* <Mailto email="" subject="" body="">
          email me
        </Mailto> */}
      </div>
    </div>
  );
};

export default Contact;
