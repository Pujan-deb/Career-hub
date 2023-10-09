
export default function Showcatagory({ data }) {
    return (

        <div className="shadow-lg p-2 text-center">
            <img src={data.logo} alt="" className="bg-gray-200 p-3 rounded-lg mx-auto" />
            <p className="font-semibold text-xl mt-5">{data.category_name}</p>
            <span className="text-[#7E90FE] ">{data.availability}</span>
        </div>

    )
}
