import { useState } from "react";
import { useEffect, } from "react";
import ShowJobs from "./ShowJobs";
import { useNavigate } from "react-router-dom";

export default function Featurejob() {
    const [job, setJob] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch("jobs.json")
            let data = await res.json();
            setJob(data)
        }
        fetchData();
    }, [])
    const navigate = useNavigate();
    const GotoAllJob = () => {
        navigate(`/alljobs`)
    }
    return (
        <div>
            <p className="text-[42px] font-bold text-center">Featured Jobs</p>
            <p className="mt-2 text-[18px] text-[#757575] text-center  font-normal">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-y-6 gap-x-6 mt-10">
                {job.slice(0, 4).map(item => <ShowJobs key={item.id} jobs={item}></ShowJobs>)}
            </div>
            <div className="flex justify-center">
                <button className="w-[134px] p-3 font-medium text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md my-5 capitalize" onClick={() => GotoAllJob()}>Show all jobs</button>
            </div>



        </div>
    )
}
