const Productdetails = async ({
    params ,
} : {
    params : Promise<{ productId : string}>
}) => {

    const productId = (await params).productId

    return (
        <h1>
              Details About Product Page : {productId}
        </h1>
    )
}
export default Productdetails;