import { Link } from "react-router-dom";
import PageLayout from "../../PageLayout";
import { useEffect } from "react";

export default function PageNotFound() {

    useEffect(() => {
        document.title = "404 Not Found - BMS Book Store";
    }, []);

    const goToPreviousPage = () => {
        if (window.history.length > 0) {
            document.referrer ? window.history.back() : window.location.href = "/";
        } else {
            window.location.href = "/";
        }
    };

    return (
        <PageLayout>
            {/* <!-- Section-404 --> */}
            <section className="flat-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wg-404">
                                <div className="image">
                                    <img src="/assets/images/banner/404.png" data-src="/assets/images/banner/404.png" alt="404"
                                        className="lazyload" />
                                </div>
                                <h1 className="title display-xl-2">
                                    Whoops!
                                </h1>
                                <p className="text-md sub text-main">We couldn’t find the page you were looking for.</p>
                                <div className="bot">
                                    <Link className="tf-btn btn-md animate-btn font-4" onClick={goToPreviousPage}>
                                        Return back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /.Section-404 --> */}
        </PageLayout>
    );
}