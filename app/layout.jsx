import Nav from '@/components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css'

import React from 'react'
export const metadata = {
    title :  "siva" , 
    description : "siva project"
}
function RootLayout ({
    children 
} ) {
    return (
        <Provider>
        <html lang='en'>
            <body>
               

                    <div className='main'>
                        <div className='gradient'/>
                    </div>
                    <main className='app'>
                        <Nav/>
                        {children}
                    </main >

               
              
                
                </body>
    
        </html>
        </Provider>
      )
}
 


export default RootLayout
