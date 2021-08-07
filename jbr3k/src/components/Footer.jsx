import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ 2020{currYear}</p>
    </footer>
  );
}

export default Footer;
