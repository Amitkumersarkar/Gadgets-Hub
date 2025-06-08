import AllProducts from "../AllProducts/AllProducts";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex min-h-screen'>
            {/* Sidebar section */}
            {/* <Sidebar></Sidebar> */}

            {/* All Product section */}
            <div className="flex-1 bg-gray-250 p-6 overflow-y-auto">
                <AllProducts></AllProducts>
            </div>
        </div>
    );
};

export default Home;