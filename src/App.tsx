import { Route, Router, Routes } from "react-router-dom"
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from "./pages/ProductDetail";
import { useEffect, useState } from "react";
import { ProductType } from "./types/Product";
import { list, remove , update, add } from "./api/Product";
import HomePages from "./pages/HomePages";
import ProductsPages from "./pages/ProductsPages";
import IntroducePages from "./pages/IntroducePages";
import Contracpages from "./pages/Contracpages";
import PrivateRouter from "./components/PrivateRouter";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./pages/layouts/AdminLayout";
import ProductManager from "./pages/admin/Products/ProductManager";
import ProductEdit from "./pages/admin/Products/ProductEdit";
import ProductAdd from "./pages/admin/Products/ProductAdd";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";
import BlogsPages from "./pages/BlogsPages";
import Cart from "./pages/add to cart/Cart";
import {CartProvider} from 'react-use-cart';
import CategoryList from "./pages/admin/Category/CategoryList";
import CategoryEdit from "./pages/admin/Category/CategoryEdit";
import CategoryAdd from "./pages/admin/Category/CategoryAdd";


function App() {
  const [isLoading, setIsLoading]  = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);

  const removeItem = (id: number) => {
    remove(id);
    setProducts(products.filter(item => item.id !== id));
  }

  const onHandleAdd = async (product: ProductType) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item.id == data.id ? data : item));
  }

  useEffect(() => {
    const getProducts = async() => {
      const {data} = await list();
      setProducts(data);
    };
    getProducts();
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout/>} >
            <Route index element={<HomePages/>} />
            <Route path="blogs" element={<BlogsPages/>} />
            <Route path="products">
              <Route index element={<ProductsPages products={products}/>} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/products/:id/cart" element={<CartProvider><Cart/></CartProvider>} />
            </Route>
            <Route path="introduce" element={<IntroducePages/>} />
            <Route path="Contact" element={<Contracpages/>} />

        </Route>
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>} >
                <Route index element={<Navigate to="dashboard"/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products">
                    <Route index element={<PrivateRouter><ProductManager products={products} onRemove={removeItem}/></PrivateRouter>} />
                    <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
                    <Route path="add" element={<ProductAdd name="" onAdd={onHandleAdd}/>} />
                </Route>
                <Route path="category">
                    <Route index element={<CategoryList/>} />
                    <Route path=":id/edit" element={<CategoryEdit/>} />
                    <Route path="add" element={<CategoryAdd />} />
                </Route>
        </Route>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>

      </Routes>
    </div>
  )
}

export default App;
