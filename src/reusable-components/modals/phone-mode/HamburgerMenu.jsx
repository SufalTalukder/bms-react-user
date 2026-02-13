import { Link } from "react-router-dom";

export default function HamburgerMenu() {
    return (
        <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
            <button className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <div className="mb-canvas-content">
                <div className="mb-body">
                    <div className="mb-content-top">
                        <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                        </ul>
                    </div>
                    <div className="mb-other-content">
                        <div className="group-icon">
                            <Link to="wish-list.html" className="site-nav-icon">
                                <i className="icon icon-heart"></i>
                                Wishlist
                            </Link>
                            <Link to="#login" data-bs-toggle="offcanvas" className="site-nav-icon">
                                <i className="icon icon-user"></i>
                                Login
                            </Link>
                        </div>
                        <div className="mb-notice">
                            <Link to="contact-us.html" className="text-need">Need Help?</Link>
                        </div>
                        <div className="mb-contact">
                            <p>Address: 123 Yarran st, Punchbowl, NSW 2196, Australia</p>
                        </div>
                        <ul className="mb-info">
                            <li>
                                Email:
                                <b className="fw-medium">clientcare@ecom.com</b>
                            </li>
                            <li>
                                Phone:
                                <b className="fw-medium">1.888.838.3022</b>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mb-bottom">
                    <div className="bottom-bar-language">
                        <div className="tf-currencies">
                            <select className="image-select center style-default type-currencies">
                                <option data-thumbnail="/assets/images/country/us.png">USD</option>
                                <option data-thumbnail="/assets/images/country/fr.png">EUR</option>
                                <option data-thumbnail="/assets/images/country/ger.png">EUR</option>
                                <option data-thumbnail="/assets/images/country/vn.png">VND</option>
                            </select>
                        </div>
                        <div className="tf-languages">
                            <select className="image-select center style-default type-languages">
                                <option>English</option>
                                <option>العربية</option>
                                <option>简体中文</option>
                                <option>اردو</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}