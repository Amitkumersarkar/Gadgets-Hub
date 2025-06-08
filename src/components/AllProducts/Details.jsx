import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
    const { product_id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(item => String(item.product_id) === product_id);
                setProduct(found);
            });
    }, [product_id]);

    if (!product) {
        return <div className="text-center mt-10 text-red-500">Product not found or loading...</div>;
    }

    const {
        product_title,
        product_image,
        category,
        description,
        price,
        Specification,
        rating,
    } = product;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
            <h1 className="text-3xl font-bold mb-4">{product_title}</h1>
            <img src={product_image} alt={product_title} className="w-full max-h-96 object-contain mb-4" />
            <p className="mb-2"><strong>Category:</strong> {category}</p>
            <p className="mb-2"><strong>Description:</strong> {description}</p>
            <p className="mb-2"><strong>Specifications:</strong> {Specification}</p>
            <p className="mb-2"><strong>Rating:</strong> {rating} ⭐</p>
            <p className="text-xl mt-4 font-bold">Price: ${price}</p>
            <div>
                <button className="btn btn-ghost mt-2 text-white bg-cyan-600">Buy Now</button>
            </div>
        </div>
    );
};

export default Details;
