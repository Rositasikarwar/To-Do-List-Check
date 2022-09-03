import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} (Rosita Sikarwar)</p>
    </footer>
  );
}

export default Footer;
