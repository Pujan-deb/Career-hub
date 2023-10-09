import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart, removeFromDb } from "../Utilities/fakedb";
import Displayjobs from "./Displayjobs";

export default function AppliedJobs() {
    let data = useLoaderData();
    const [Alldata, setAlldata] = useState([])
    const [Olddata, setOldata] = useState([]);
    useEffect(() => {
        setAlldata(data)
        let prevdata = getShoppingCart();
        console.log(prevdata)
        let newarray = [];
        for (const id in prevdata) {
            let searchdata = Alldata.find(item => item.id === parseInt(id))
            if (searchdata) {
                newarray.push(searchdata)
            }
        }
        setOldata(newarray)

    }, [Alldata])
    const removeJob = (id) => {
        let findData = Olddata.filter(item => item.id !== id);
        let Removeitem = [];
        if (findData) {
            Removeitem = [...findData]
        }
        setOldata(Removeitem);
        removeFromDb(id)

    }

    return (
        <div>
            <div className="p-12">
                <p className="text-center font-bold text-4xl mb-4 capitalize">Jobs you have Applied</p>
                <hr />

            </div>
            <div>
                {Olddata.map(item => <Displayjobs key={item.id} jobs={item}>
                    <button className="w-[134px] p-3 font-medium text-white bg-[#CD5C5C] rounded-md mt-3 ml-4" onClick={() => removeJob(item.id)}>Remove</button>
                </Displayjobs>)}
            </div>
        </div>
    )
}
