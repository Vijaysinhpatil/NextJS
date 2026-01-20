export default async function productReview({
    params,
}: {
    params : Promise<{

             productId : String ,
             reviewId : String

            }>
}){
    const { productId , reviewId } = await params;

    return(
        <h1>
              Review { reviewId } for Product { productId }
        </h1>
    )
}