import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './Context/AuthContext.jsx'
import UserContext from './Context/UserContext.jsx'
import ProductContext from './Context/ProductContext.jsx'
import PageContext from './Context/PageContext.jsx'
import WishlistContext from './Context/WishlistContext.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthContext>
            <UserContext>
                <ProductContext>
                    <PageContext>
                        <WishlistContext>
                        <App />
                        </WishlistContext>
                    </PageContext>
                </ProductContext>
            </UserContext>
        </AuthContext>
    </BrowserRouter>

)
