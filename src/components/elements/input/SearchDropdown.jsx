import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const SearchDropdown = ({ onSelectedFoodChange }) => {
    const [foods, setFoods] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [selectedFood, setSelectedFood] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
            .then((res) => res.json())
            .then((data) => {
                setFoods(data.meals || []);
            });
    }, []);
    
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleSearchChange = (event) => {
        setInputValue(event.target.value);
    };

    const filteredFoods = foods.filter((food) =>
        food.strMeal.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div className="relative  font-medium">
            <button
                type="button"
                onClick={handleOpen}
                className={`bg-gray-100 w-full border border-blue-500 shadow-lg p-3 flex items-center justify-between rounded-lg ${!selectedFood && "text-gray-700"
                    }`}
            >
                {selectedFood
                    ? selectedFood.length > 25
                        ? selectedFood.substring(0, 25) + "..."
                        : selectedFood
                    : "Select Food"}
                <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
            </button>
            {open && (
                <div className="absolute z-10 w-full mt-2 bg-white rounded border border-gray-300 shadow-md">
                    <div className="flex items-center p-2">
                        <AiOutlineSearch size={18} className="text-gray-700" />
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleSearchChange}
                            placeholder="Search food"
                            className="placeholder-gray-700 p-2 ml-2 w-full outline-none"
                        />
                    </div>
                    <ul className="overflow-y-auto max-h-48">
                        {filteredFoods.map((food) => (
                            <li
                                key={food.idMeal}
                                className={`p-2 text-sm hover:bg-sky-600 hover:text-white ${food.strMeal === selectedFood && "text-black"
                                    }`}
                                onClick={() => {
                                    handleOpen(false);
                                    setSelectedFood(food.strMeal);
                                    onSelectedFoodChange(food.strMeal);
                                    setInputValue("");
                                }}
                            >
                                {food.strMeal}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchDropdown;
