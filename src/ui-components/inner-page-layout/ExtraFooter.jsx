import CompareProductViewModal from "../../reusable-components/modals/CompareProductViewModal";
import LoginViewModal from "../../reusable-components/modals/LoginViewModal";
import HamburgerMenu from "../../reusable-components/modals/phone-mode/HamburgerMenu";
import SearchViewModalForPhone from "../../reusable-components/modals/phone-mode/SearchViewModal";
import ProductQuickViewModal from "../../reusable-components/modals/ProductQuickViewModal";
import RegisterViewModal from "../../reusable-components/modals/RegisterViewModal";
import ResetPasswordViewModal from "../../reusable-components/modals/ResetPasswordViewModal";
import ShoppingCartViewModal from "../../reusable-components/modals/ShoppingCartViewModal";
import ToolbarForPhone from "./phone-mode/Toolbar";
import ProductFilterViewModal from "../../reusable-components/modals/ProductFilterViewModal";

export default function ExtraFooter() {
    return (
        <>
            {/* <!-- Filter Shop --> */}
            <ProductFilterViewModal />
            {/* <!-- /Filter Shop --> */}

            {/* <!-- mobile menu --> */}
            <HamburgerMenu />
            {/* <!-- /mobile menu --> */}

            {/* <!-- toolbar --> */}
            <ToolbarForPhone />
            {/* <!-- /toolbar  --> */}

            {/* <!-- login --> */}
            <LoginViewModal />
            {/* <!-- /login --> */}

            {/* <!-- register --> */}
            <RegisterViewModal />
            {/* <!-- /register --> */}

            {/* <!-- Reset pass --> */}
            <ResetPasswordViewModal />
            {/* <!-- /Reset pass --> */}

            {/* <!-- search --> */}
            <SearchViewModalForPhone />
            {/* <!-- /search --> */}

            {/* <!-- shoppingCart --> */}
            <ShoppingCartViewModal />
            {/* <!-- /shoppingCart --> */}

            {/* <!-- modal quickView --> */}
            <ProductQuickViewModal />
            {/* <!-- /modal quickView --> */}

            {/* <!-- compare  --> */}
            <CompareProductViewModal />
            {/* <!-- /compare  --> */}
        </>
    );
}