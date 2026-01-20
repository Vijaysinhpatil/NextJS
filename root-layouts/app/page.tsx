import Link from "next/link"

export default function rootLayouts(){
  return (
    <>
        <h1>
             Inside Root Layouts
        </h1>
        <h2>
             {/* Adding links to navigate between the pages */}
             <Link href="/login">Login</Link>
             <Link href="/products">AllProducts</Link>
        </h2>
    </>
  )
}