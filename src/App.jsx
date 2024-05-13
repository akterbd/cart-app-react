import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import { DUMMY_PRODUCTS } from './dummy-products';
import Product from './components/Product';
import ContextProvider from './store/context-cart';

function App() {
    return (
      <ContextProvider>
        <div className='dark:bg-gray-900 min-h-dvh dark:text-gray-100'>
          <div className="container">
            <Header />
            <Shop>
              {DUMMY_PRODUCTS.map((product) => 
                <li className="lg:w-1/4 md:w-1/2 p-2 w-full" key={product.id}>
                    <Product {...product} />
                </li>
              )}
            </Shop>
          </div>
        </div>
      </ContextProvider>
    )
}

export default App
