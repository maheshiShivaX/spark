import Layout from "../Shared/Layout";
import ProductDetails from "./ProductDetails";
import ProductDetailsBanner from "./ProductDetailsBanner";

const ProductDetailsPage = () => {
    return (
        <Layout>
            <ProductDetailsBanner/>
            <ProductDetails/>
        </Layout>
    )
}

export default ProductDetailsPage;