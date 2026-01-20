
import React from "react"


export default function MarketLayout({
  children,
} : {
  children : React.ReactNode
}){
    return(
      <>
            <header
              style={{
                 backgroundColor : "skyblue",
                 padding : "2rem"
              }}
            >
                     <h2>
                          Header Section from MarketLayout
                     </h2>
            </header>
            {
               children
            }
            <footer
              style={{
                backgroundColor : "maroon",
                padding : "2rem"
              }}
            >
                Footer of market Layout
            </footer>
      </>
    )
}