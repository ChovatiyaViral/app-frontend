import React from 'react'
import { Navigate } from 'react-router-dom';


export default function PrivateRoutes(props) {
    const auth = true
    return (
        <>
            {
                auth ?
                    props.children
                    :
                    <Navigate to='/login' />
            }
        </>
    )
}


// export default function PrivateRoutes({ component: Component, ...rest }) {
//     let auth = true;
//     return (
//         <Route
//             {...rest}
//             render={props => (auth
//                 ? <Component {...props} />
//                 : <Navigate to="/login" />)
//             }
//         />
//     )
// }
