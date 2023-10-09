import { useLoaderData, useParams } from "react-router-dom"
import { addToDb } from "./Utilities/fakedb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SingleJob() {
    let data = useLoaderData();
    const { id } = useParams();
    const search = data.find(item => item.id === parseInt(id))
    console.log(search)
    const ApplyJob = (id) => {
        addToDb(id)
        toast(".Congrats. Applied successfully.")
    }

    return (
        <div>
            <div className="p-12">
                <p className="text-center font-bold text-4xl">Job Details</p>

            </div>
            <div>
                <div className="border border-[#7E90FE] rounded-md py-4 px-3 space-y-4 mb-6">
                    <div className="flex justify-center items-center">
                        <img src={search.logo} alt="" />
                    </div>
                    <p className="text-gray-600"><span className="font-semibold text-xl text-black">Job description: </span>{search.job_description}</p>
                    <p className="text-gray-600"><span className="font-semibold text-xl text-black">Job responsibility: </span>{search.job_responsibility}</p>
                    <p className="text-gray-600"><span className="font-semibold text-xl text-black">Job Salary: </span>{search.salary}</p>
                    <p className="text-gray-600"><span className="font-semibold text-xl text-black">Job Experience: </span>{search.experiences}</p>
                    <p className="text-gray-600"><span className="font-semibold text-xl text-black">Job type: </span>{search.job_type}</p>
                    <div className="flex justify-center items-center">
                        <button className="w-[134px] p-3 font-medium text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md mt-3" onClick={() => ApplyJob(search.id)}>Apply</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}
