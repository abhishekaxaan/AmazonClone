import React from "react";
import "./footer.css";
import Logo from "../imgs/Shopverse Logo.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="disclaimer-area">
          <p className="disclaimer-desc">
            <b>Disclaimer:</b> This ShopVerse project is a mere simulation
            and is not affiliated with any real e-commerce store in any way.
          </p>
        </div>
      </div>
      <div className="extra-data">
        <div className="link-section">
          <div className="first-row">
            <p className="bold">Get to Know Us</p>
            <p>Make Money with Us</p>
            <p>Payment Options</p>
            <p>Let Us Help You</p>
          </div>
          <div className="second-row">
            <p className="bold">About ShopVerse</p>
            <p>Sell products on ShopVerse</p>
            <p>Business Card</p>
            <p>ShopVerse and COVID-19</p>
          </div>
          <div className="third-row">
            <p className="bold">Connect with Us</p>
            <p>Sell apps on ShopVerse</p>
            <p>Shop with Points</p>
            <p>Shipping Rates & Policies</p>
          </div>
          <div className="fourth-row">
            <p className="bold">ShopVerse Cares</p>
            <p>Become an Affiliate</p>
            <p>Reload Your Balance</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
        <div className="link-section2">
          <div className="first-one">
            <div className="first-row">
              <p className="bold">Get to Know Us</p>
              <p>Make Money with Us</p>
              <p>Payment Options</p>
              <p>Let Us Help You</p>
            </div>
            <div className="second-row">
              <p className="bold">About ShopVerse</p>
              <p>Sell products on ShopVerse</p>
              <p>Business Card</p>
              <p>ShopVerse and COVID-19</p>
            </div>
          </div>
          <div className="second-one">
            <div className="third-row">
              <p className="bold">Connect with Us</p>
              <p>Sell apps on ShopVerse</p>
              <p>Shop with Points</p>
              <p>Shipping Rates & Policies</p>
            </div>
            <div className="fourth-row">
              <p className="bold">ShopVerse Cares</p>
              <p>Become an Affiliate</p>
              <p>Reload Your Balance</p>
              <p>Returns & Replacements</p>
            </div>
          </div>
        </div>
        <div className="developer">
          <img src={Logo} className="amazon-img" alt="ShopVerse Logo" />
          <div className="dev-data">
            <p>&copy; 2025 | Developed by </p>
            <div className="dev-link">
              Abhishek Kumar Singh
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
