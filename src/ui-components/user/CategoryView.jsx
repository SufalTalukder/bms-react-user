import { useEffect } from "react";
import PageLayout from "../../PageLayout";
import ProductList from "../../reusable-components/ProductsList";
import IconBoxSwiper from "../../reusable-components/IconBoxSwiper";

export default function CategoryView() {

  useEffect(() => {
    document.title = "Catgeory - BMS Book Store";
  }, []);

  return (
    <PageLayout>
      {/* <!-- Section Product --> */}
      <ProductList />
      {/* <!-- /Section Product --> */}

      {/* <!-- Iconbox --> */}
      <IconBoxSwiper />
      {/* <!-- /Iconbox --> */}
    </PageLayout>
  );
}