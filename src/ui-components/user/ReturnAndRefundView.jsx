import { Link } from "react-router-dom";
import PageLayout from "../../PageLayout";
import { useEffect } from "react";

export default function ReturnAndRefundView() {

    useEffect(() => {
        document.title = "Return & Refund - BMS Book Store";
    });

    return (
        <PageLayout>
            {/* <!-- Title Page --> */}
            <section className="tf-page-title">
                <div className="container">
                    <div className="box-title text-center">
                        <h4 className="title">Return & Refund</h4>
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" to="/">Home</Link>
                            <div className="breadcrumb-item dot"><span></span></div>
                            <div className="breadcrumb-item current">Return & Refund</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Title Page --> */}

            {/* <!-- Return refund --> */}
            <section className="s-term-user flat-spacing-13">
                <div className="container">
                    <div className="content">
                        <div className="term-item">
                            <p className="term-title">
                                1. Returns
                            </p>
                            <p className="term-text body-text text-main">
                                We want you to be completely satisfied with your purchase. If for any reason you
                                are not satisfied, you may return the item(s) within [...] days of receiving
                                your order for a refund or exchange. To be eligible for a return, the item must
                                be unused, in its original packaging, and in the same condition as you received
                                it.
                            </p>
                        </div>
                        <div className="term-item">
                            <p className="term-title">
                                2. Return Process
                            </p>

                            <p className="term-text body-text text-main">
                                To initiate a return, please contact our customer support team at
                                [contact@email.com] to request a Return Merchandise Authorization (RMA)
                                number. Please include your order number and the reason for the return in
                                your email. Once you receive your RMA number, carefully package the item(s)
                                and ship them back to us. The customer is responsible for return shipping
                                costs unless the return is due to an error on our part.
                            </p>
                        </div>
                        <div className="term-item">
                            <p className="term-title">
                                3. Refunds
                            </p>
                            <p className="term-text body-text text-main">
                                Refunds will be issued to the original payment method used for the purchase
                                within [..] business days after we receive the returned item(s) and verify
                                their condition. Shipping costs are non-refundable, and a restocking fee may
                                apply in certain circumstances.
                            </p>

                        </div>
                        <div className="term-item">
                            <p className="term-title">
                                4. Exchanges
                            </p>
                            <p className="term-text body-text text-main">
                                If you would like to exchange an item for a different size, color, or style,
                                please indicate your preference when requesting a return. We will process the
                                exchange once we receive the returned item(s) and verify their condition.
                                Additional shipping charges may apply for exchanges.
                            </p>
                        </div>
                        <div className="term-item">
                            <p className="term-title">
                                5. Damaged or Defective Items
                            </p>
                            <p className="term-text body-text text-main">
                                If you receive a damaged or defective item, please contact us immediately with
                                photos of the damaged or defective product. We will assess the issue and provide
                                instructions for returning the item for a replacement or refund at no additional
                                cost to you. <br />
                                We only handle cases of damage or incorrect items within [..] days from the
                                delivery date. Requests made after this period will not be entertained.
                            </p>
                        </div>
                        <div className="term-item">
                            <p className="term-title">
                                6. Return Exceptions
                            </p>
                            <p className="term-text body-text text-main">
                                Certain items may not be eligible for return or exchange due to hygiene reasons
                                or specific product restrictions. These items will be marked as non-returnable
                                on the product page.
                            </p>
                        </div>
                        <div className="term-item">
                            <p className="term-title">
                                7. Return Address
                            </p>
                            <p className="term-text body-text text-main">
                                [Your Company Name] <br />
                                [Return Address] <br />
                                [City, State, ZIP Code] <br />
                                [Country]
                            </p>
                        </div>
                        <div className="term-item">
                            <p className="term-title">
                                8. Policy Updates
                            </p>
                            <p className="term-text body-text text-main">
                                We reserve the right to update our Return & Refund Policy at any time. Any
                                changes to our policy will be communicated on our website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Return refund --> */}
        </PageLayout>
    );
}