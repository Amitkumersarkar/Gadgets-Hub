const Details = ({ product }) => {
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
            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={product_image}
                    alt={product_title}
                    className="w-full md:w-1/2 object-contain rounded-lg border p-4 bg-gray-50"
                />
                <div className="md:w-1/2 space-y-3">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p className="text-gray-600 text-sm">Category: {category}</p>
                    <p className="text-gray-700">{description}</p>
                    <p className="text-xl font-semibold text-blue-600">Price: ${price}</p>
                    <p className="text-yellow-500">Rating: {rating} ⭐</p>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-1">Specifications:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {Specification?.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <button className="btn btn-primary mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;
