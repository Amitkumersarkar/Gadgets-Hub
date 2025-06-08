import { useEffect, useState } from "react";
import AllProduct from "./AllProduct";
const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/gadgets.json')  // ✅ Corrected path
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
            {
                products.map(product => (
                    <AllProduct key={product.product_id} product={product} />
                ))
            }
        </div>
    );
};

export default AllProducts;
