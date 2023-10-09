import { useEffect } from "react";
import { useState } from "react"
import Showcatagory from "./Showcatagory";

export default function Catageory() {
    const [catageory, setCatageory] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch("categories.json")
            let data = await res.json();
            setCatageory(data)
        }
        fetchData();
    }, [])
    console.log(catageory.length)
    return (
        <div className="my-[70px]">
            <p className="text-[42px] font-bold text-center">Job Category List</p>
            <p className="mt-2 text-[18px] text-[#3b2d2d] text-center  font-normal">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex gap-8 justify-between mt-[45px]">
                {
                    catageory.map(item => <Showcatagory key={item.id} data={item}></Showcatagory>)
                }
            </div>
        </div>
    )
}
