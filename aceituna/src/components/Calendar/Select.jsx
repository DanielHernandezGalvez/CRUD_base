import React, { useState } from "react";

const Select = () => {
    const [day, setDay] = useState(1);

    const handleDay = (clickedDay) => {
        console.log(clickedDay);
        setDay(clickedDay);
    };

    const handleButtonClick = () => {
        console.log("Button clicked");
    };

    return (
        <>

<button onClick={handleButtonClick}>Click me</button>

            <h1 className="text-gray-500">Este es el Select</h1>
            <div className="w-[50vw]">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-center bg-gray-400">Lun</th>
                            <th className="text-center">Mar</th>
                            <th className="text-center">Mie</th>
                            <th className="text-center">Jue</th>
                            <th className="text-center">Vie</th>
                            <th className="text-center">Sab</th>
                            <th className="text-center bg-gray-400">Dom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3, 4, 5].map((row) => (
                            <tr key={row}>
                                {[1, 2, 3, 4, 5, 6, 7].map((col) => (
                                    <td
                                        key={col}
                                        className="border-2 border-black text-center"
                                        onClick={() => handleDay(col + (row - 1) * 7)}
                                    >
                                        {col + (row - 1) * 7}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Select;
