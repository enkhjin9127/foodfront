"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "Appetizers",
  "Salads",
  "Pizzas",
  "Lunch favorites",
  "Main dishes",
  "Fish & Sea foods",
  "Side dish",
  "Brunch",
  "Desserts",
  "Beverages",
  "Snacks",
  "Breakfast",
  "Soups",
  "Sauces",
  "Sweets",
  "Vegetarian",
];

export default function CategorySelector() {
  const [selected, setSelected] = useState("Appetizers");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#404040] text-white p-4 flex flex-col items-start max-w-[1440px] mx-auto w-full">
      <h2 className="text-xl font-semibold mb-3">Categories</h2>
      <div className="flex items-center gap-2 w-full">
        <button
          onClick={scrollLeft}
          className="p-2 text-gray-400 hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-scroll no-scrollbar scroll-smooth w-full"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selected === category
                  ? "bg-red-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelected(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="p-2 text-gray-400 hover:text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
// changes
