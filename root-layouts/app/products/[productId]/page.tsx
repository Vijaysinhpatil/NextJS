import Link from "next/link"

export default async function ProductDetails({
    params
} : {
    params : Promise<{ productId : String}>
}) {
    const productId = (await params).productId
   return(
    <>
       <h1>
          Details about product Page : { productId }
        </h1>
        <h3>
             <Link href="/products">BackToProductsPage</Link>
        </h3>
    </>

   )
}