import { useEffect, useState } from "react";
import AllProduct from "./AllProduct";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/gadgets.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFiltered(data);
                const uniqueCategories = [...new Set(data.map((p) => p.category))];
                setCategories(uniqueCategories);
            });
    }, []);

    const handleFilter = (category) => {
        if (category === "All") {
            setFiltered(products);
        } else {
            setFiltered(products.filter((p) => p.category === category));
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 px-4 mt-6">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
                <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
                <div className="flex flex-wrap lg:flex-col gap-3">
                    <button
                        className="btn btn-outline btn-sm"
                        onClick={() => handleFilter("All")}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="btn btn-outline btn-sm capitalize"
                            onClick={() => handleFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="w-full lg:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filtered.map((product) => (
                        <AllProduct key={product.product_id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
