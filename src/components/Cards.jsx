import React from "react";

export default function Cards () {
    return(
        <div id="card" className="bg-[#2bb89d] m-1 w-52 max-h-28 rounded-[9px] hover:bg-[#235583] transition ease-in-out duration-300">
            <h2 className="flex justify-center mt-2 text-white font-kumbh_sans text-[1.1rem]">PROJETOS ATIVOS</h2>
            <h2 id="numbers" className="flex justify-center mt-3 text-white font-kumbh_sans text-[2rem]">12</h2>
        </div>
    )
}