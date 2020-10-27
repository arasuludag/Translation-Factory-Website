import React from "react";

function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <footer style={{margin: "50px auto"}}>
      <div>
        <p style={{textAlign: "center"}}> © {yearNow} Copyright: Translation Factory </p>
      </div>
    </footer>
  );
}
export default Footer;
