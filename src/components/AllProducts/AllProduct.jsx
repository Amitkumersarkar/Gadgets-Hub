const AllProduct = ({ product }) => {
    const { product_title, product_image, price } = product;

    return (
        <div className="w-full sm:w-72 md:w-80 lg:w-96 bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
            <figure className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center p-4">
                <img
                    src={product_image}
                    alt={product_title}
                    className="max-h-full max-w-full object-contain"
                />
            </figure>
            <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-1">{product_title}</h2>
                <p className="text-gray-700 mb-3">Price: <span className="font-medium">${price}</span></p>
                <button className="btn btn-primary rounded-4xl">View Details</button>
            </div>
        </div>
    );
};

export default AllProduct;
