import React from "react";

export default function DangerCard () {
    return (
        <div className=" flex items-center bg-danger m-1 w-full max-h-10 rounded hover:bg-[#9e2e2a] transition ease-in-out duration-300">
            <h1 className="text-white font-kumbh_sans text-[1.2rem] m-2">Items no estoque estão para vencer</h1>
        </div>
    );
}