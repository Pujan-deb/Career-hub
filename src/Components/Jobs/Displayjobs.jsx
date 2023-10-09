import { useNavigate } from "react-router-dom";
import location from '../../../src/assets/location2.png'
import moneyImg from '../../../src/assets/money.png'
export default function Displayjobs({ jobs, children }) {
    const navigate = useNavigate();
    const GotoJob = (id) => {
        navigate(`/Singlejob/${id}`)
    }
    return (
        <div className='p-4 rounded-md flex flex-col gap-3 justify-between shadow-lg'>
            <img src={jobs.logo} alt="" className="w-[120px]" />
            <h2 className='text-[#474747] font-semibold text-2xl'>{jobs.job_title}</h2>
            <span className='text-[#757575] text-xl'>{jobs.company_name}</span>
            <div className="flex gap-4">
                <p className='p-2 border border-[#7E90FE] text-[16px] font-semibold rounded-md'>{jobs.remote_or_onsite}</p>
                <p className='p-2 border border-[#7E90FE] text-[16px] font-semibold rounded-md'>{jobs.job_type}</p>
            </div>
            <div className='flex gap-4'>
                <div className='flex'>
                    <img src={location} alt="" />
                    <p className='font-medium'>{jobs.location}</p>
                </div>
                <div className='flex'>
                    <img src={moneyImg} alt="" />
                    <p className='text-[#474747] text-[16px]'>{jobs.salary}</p>
                </div>
            </div>
            <div className="flex gap-4">
                <button className="w-[134px] p-3 font-medium text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md " onClick={() => GotoJob(jobs.id)}>Show details</button>
                {children}
            </div>

        </div>
    )
}
