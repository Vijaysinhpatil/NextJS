export default function RegisterLayout({
    children ,
} : {
    children : React.ReactNode
}){
      return (

            <>
               <header
                 style={{
                    backgroundColor : "skyblue",
                    padding : "2rem"
                 }}
               >
                    <h1>
                          Register Header
                    </h1>
              </header>
               {children}
              <footer
                style={{
                    backgroundColor : "navajowhite",
                    padding : "2rem"
                }}
              >
                  <h1>
                        Register Footer
                  </h1>
               </footer>  
            </>
      )
}