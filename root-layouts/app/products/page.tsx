import Link from "next/link";

export default function Products() {
    const productId = 100;
    return(
        <>
            <h1>
               All Product Lists
            </h1>
            <ul>
                 {/* Implementing Dynamic Routes */}
                   <li><Link href="/products/1">Details about product 01</Link></li>
                   <li><Link href="/products/2">Details about product 02</Link></li>
                   <li><Link href="/products/3" replace>Details about product 03</Link></li>
                   <li><Link href="/products/4">Details about product 04</Link></li>
                   <li><Link href={`/products/${productId}`}>Details about product {productId}</Link></li>
            </ul>
            <Link href="/">Back To homePage</Link>
        </>
    )
}