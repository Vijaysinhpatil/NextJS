"use client"
import { usePathname } from "next/navigation"

const PageNotFound = () => {
    const pathName = usePathname()
    const productId = pathName.split("/")[2]
    const reviewId = pathName.split("/")[4]

    return (
        <div>
               <h1>
                     PAGE NOT FOUND
               </h1>
               <p>
                     REVIEW <b>{ reviewId }</b> NOT FOUND FOR PRODUCT <b>{ productId }</b>
               </p>
        </div>
    )
}
export default PageNotFound