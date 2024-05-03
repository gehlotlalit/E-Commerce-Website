import { useContext } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";

const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const {loading, getAllProduct} = context;
    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* main 1  */}
            <section className="text-gray-600 body-font">
                {/* main 2 */}
                <div className="container px-5 py-5 mx-auto">
                    
                    <div className="flex justify-center">
                        {loading && <Loader/>}
                    </div>
                    {/* {main 3} */}
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0,8).map((item, index) => {
                            const { id, title, price,productImageUrl } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                        onClick={()=> navigate('/productinfo')}
                                            className="lg:h-80  h-96 w-full"
                                            src={productImageUrl}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                E-bharat
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                <button className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;