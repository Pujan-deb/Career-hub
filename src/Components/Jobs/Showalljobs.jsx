import { useLoaderData } from "react-router-dom"

import Displayjobs from "./Displayjobs";
export default function Showalljobs() {
    let Jobsdata = useLoaderData();
    console.log(Jobsdata)

    return (
        <>
            <div className="p-12">
                <p className="text-center font-bold text-4xl mb-4">Choose your Appropriate job</p>
                <hr />

            </div>
            <div className="grid grid-cols-2 gap-y-9 gap-x-6 mt-10">
                {Jobsdata.map(item => <Displayjobs key={item.id} jobs={item} />)}
            </div>
        </>
    )
}
