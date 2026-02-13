import { Link } from "react-router-dom";

export default function GridCollection() {
    return (
        <div className="flat-spacing-6">
            <div className="container">
                <div className="grid-cls grid-cls-v8 wow fadeInUp">
                    <div className="item1 s-cls style-absolute hover-img abs-tb-center">
                        <div className="image img-style">
                            <img src="/assets/images/cls-categories/grid-cls/book1.jpg" data-src="/assets/images/cls-categories/grid-cls/book1.jpg"
                                alt="" className="lazyload" />
                        </div>
                        <div className="content">
                            <div className="box-title">
                                <p className="text-md fw-semibold text-dark-10">Best-selling</p>
                                <h5 className="display-md-2 fw-semibold"><Link to="shop-default.html" className="link text-dark-10">Comics</Link>
                                </h5>
                            </div>
                            <Link to="shop-default.html" className="tf-btn btn-large border-0 btn-primary animate-btn">Shop Now</Link>
                        </div>
                    </div>
                    <div className="item2 s-cls style-absolute hover-img abs-tb-center">
                        <div className="image img-style">
                            <img src="/assets/images/cls-categories/grid-cls/book2.jpg" data-src="/assets/images/cls-categories/grid-cls/book2.jpg"
                                alt="" className="lazyload" />
                        </div>
                        <div className="content">
                            <div className="box-title">
                                <p className="text-md fw-semibold text-dark-10">New Release</p>
                                <h5 className="display-md-2 fw-semibold"><Link to="shop-default.html" className="link text-dark-10">Science</Link>
                                </h5>
                            </div>
                            <Link to="shop-default.html" className="tf-btn btn-large border-0 btn-primary animate-btn">Shop Now</Link>
                        </div>
                    </div>
                    <div className="item3 s-cls style-absolute hover-img abs-right-center">
                        <div className="image img-style">
                            <img src="/assets/images/cls-categories/grid-cls/book3.jpg" data-src="/assets/images/cls-categories/grid-cls/book3.jpg"
                                alt="" className="lazyload" />
                        </div>
                        <div className="content">
                            <h5 className="display-md-2 fw-semibold"><Link to="shop-default.html" className="link text-dark-10">Our Top <br />
                                Rated
                                Books</Link></h5>
                            <Link to="shop-default.html" className="tf-btn btn-large border-0 btn-primary animate-btn">Shop Now</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}