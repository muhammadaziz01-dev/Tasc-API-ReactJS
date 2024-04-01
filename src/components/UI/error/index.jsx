// ======= ERROR =====
import "./stely.scss"

function error({error: {message}}){
    return (
        <div className="  absolute left-[200px]">
            <h1 className=" text-red-500 font-bold text-[34px] text-center">{message}</h1>
        </div>
    );
}

export default error;