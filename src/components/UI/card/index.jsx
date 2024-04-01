// ============== Card =================================

import "./style.scss";

const index = ({data:{image, title, description , category , rating ,price}}) => {

    return (
        <div className="card w-[330px]  border shadow-md rounded-md cursor-pointer hover:shadow-xl duration-200">

            <div className="w-[300px] h-[270px] mx-auto mt-3">
                <img src={image} alt={title} className="w-[100%] h-[100%] object-contain" />
            </div>
            <div className="card-body p-4">
                <h5 className="card-title text-center text-[20px] pb-2 font-bold text-lime-500">{title.length > 30 ? title.slice(0, 25) + " ..." : title}</h5>
                <p className="card-text text-[16px] font-medium h-[140px] overflow-hidden">{description.length > 170 ? description.slice(0, 156) + " ..." : description}</p>
                <p className="card-text text-[18px] font-bold text-slate-800 ">Category: <span className="text-lime-500 ml-2">{category.toUpperCase()}</span></p>
                <p className="card-text text-[18px] font-bold text-slate-800 ">Price: <span className="text-red-500 ml-2">{price} $</span></p>
                <p className="card-text text-[18px] font-bold text-slate-800 ">Rating: <span className="text-red-500 mx-2">{rating.rate} </span> Count : <span className="text-red-500 mx-2">{rating.count}</span></p>
            </div>

        </div>
    );
};

export default index;