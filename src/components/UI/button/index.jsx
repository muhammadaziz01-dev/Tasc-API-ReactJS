import "./style.scss";

const index = ({message , title}) => {
    
    return (
        <div className="flex items-end justify-end pr-4 pb-4">
            <button onClick={()=>message(title)}  className="py-[6px]  hover:bg-lime-500  p-4 rounded-md bg-lime-700 text-white text-[16px]"><i className="bi bi-cart-check-fill"></i> add</button>
        </div>
    );
};

export default index;