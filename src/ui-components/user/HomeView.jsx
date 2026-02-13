import { useEffect } from "react";
import PageLayout from "../../PageLayout";
import HeaderBannerSwiper from "../../reusable-components/HeaderBannerSwiper";
import CollectionOfCards from "../../reusable-components/CollectionOfCards";
import CategorySwiper from "../../reusable-components/CategorySwiper";
import FeaturedProductsSwiper from "../../reusable-components/FeaturedProductsSwiper";
import CustomerReviewsSwiper from "../../reusable-components/CustomerReviewsSwiper";
import IconBoxSwiper from "../../reusable-components/IconBoxSwiper";
import GridCollection from "../../reusable-components/GridCollection";
import FeaturedProductsTab from "../../reusable-components/FeatureProductsTab";

export default function HomeView() {

  useEffect(() => {
    document.title = "Home - BMS Book Store";
  }, []);

  return (
    <PageLayout>
      {/* <!-- Header Banner Slider --> */}
      <HeaderBannerSwiper />
      {/* <!-- Header Banner Slider --> */}

      {/* <!-- Collection --> */}
      <CollectionOfCards />
      {/* <!-- /Collection --> */}

      {/* <!-- Featured Products --> */}
      <FeaturedProductsTab />
      {/* <!-- /Featured Products --> */}

      {/* <!-- Grid Collection --> */}
      <GridCollection />
      {/* <!-- /Grid Collection --> */}

      {/* <!-- Categories --> */}
      <CategorySwiper />
      {/* <!-- /Categories --> */}

      {/* <!-- Featured Products --> */}
      <FeaturedProductsSwiper />
      {/* <!-- /Featured Products --> */}

      {/* <!-- Customer Reviews --> */}
      <CustomerReviewsSwiper />
      {/* <!-- /Customer Reviews --> */}

      {/* <!-- Iconbox --> */}
      <IconBoxSwiper />
      {/* <!-- /Iconbox --> */}
    </PageLayout>
  );
}