import './Banner.css'
import image from '/user.png'
export default function Banner() {
    return (
        <div className='flex gap-4 justify-between my-10'>
            <div>
                <h2 className="text-[#1A1919] text-[70px] font-semibold leading-[100px]">One Step <br />Closer To Your <br /><span className="Inner">Dream Job</span></h2>
                <p className='smalltag'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="w-[134px] p-3 font-medium text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md mt-3">Get Started</button>
            </div>
            <div className=''>
                <img src={image} alt="" className='w-full h-full rounded-md' />
            </div>
        </div>
    )
}
