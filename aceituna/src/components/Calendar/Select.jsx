import React, { useState } from "react";


const Select = () => {
    const [day, setDay] = useState(1)

    const handleDay = (event) => {
        const clickedDay = event.target.value;
    console.log(clickedDay);
    setDay(clickedDay);
    }

    return (
        <>
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
                        <tr>
                            <td className="border-2 border-black text-center"><button onClick={handleDay} value={1}>1</button></td>
                            <td className="border-2 border-black text-center">2</td>
                            <td className="border-2 border-black text-center">3</td>
                            <td className="border-2 border-black text-center">4</td>
                            <td className="border-2 border-black text-center">5</td>
                            <td className="border-2 border-black text-center">6</td>
                            <td className="border-2 border-black text-center">7</td>
                        </tr>
                        <tr>
                            <td className="border-2 border-black text-center">8</td>
                            <td className="border-2 border-black text-center">9</td>
                            <td className="border-2 border-black text-center">10</td>
                            <td className="border-2 border-black text-center">11</td>
                            <td className="border-2 border-black text-center">12</td>
                            <td className="border-2 border-black text-center">13</td>
                            <td className="border-2 border-black text-center">14</td>
                        </tr>
                        <tr>
                            <td className="border-2 border-black text-center">15</td>
                            <td className="border-2 border-black text-center">16</td>
                            <td className="border-2 border-black text-center">17</td>
                            <td className="border-2 border-black text-center">18</td>
                            <td className="border-2 border-black text-center">19</td>
                            <td className="border-2 border-black text-center">20</td>
                            <td className="border-2 border-black text-center">21</td>
                        </tr>
                        <tr>
                            <td className="border-2 border-black text-center">22</td>
                            <td className="border-2 border-black text-center">23</td>
                            <td className="border-2 border-black text-center">24</td>
                            <td className="border-2 border-black text-center">25</td>
                            <td className="border-2 border-black text-center">26</td>
                            <td className="border-2 border-black text-center">27</td>
                            <td className="border-2 border-black text-center">28</td>
                        </tr>
                        <tr>
                            <td className="border-2 border-black text-center">29</td>
                            <td className="border-2 border-black text-center">30</td>
                            <td className="border-2 border-black text-center">31</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Select;
