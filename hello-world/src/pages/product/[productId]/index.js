import { useRouter } from 'next/router'

function Product () {
    const router = useRouter();
    const productId = router.query.productId;
    return <><h2>Details about product {productId}</h2></>
}
export default Product;