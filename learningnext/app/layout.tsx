import type { ReactNode } from "react";

export default function RootLayout({ children } : { children : ReactNode}){
  
     return (
         <html>
                <body>
                       <header 
                         style={{
                            backgroundColor : "lightblue",
                            padding : "2rem"
                         }}
                       >
                              <h1>
                                   Header Section
                              </h1>
                       </header>
                      { children }
                      <footer
                        style={{
                            backgroundColor : "ghostwhite",
                            padding : "2rem"
                        }}
                      >
                            <h1>
                                 Footer section
                            </h1>
                      </footer>
                </body>
         </html>
     )
}

