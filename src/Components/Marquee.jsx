
const items = [
  "Artisan Pizzas",
  "Fresh Wraps & Rolls",
  "Loaded Fries",
  "Ice Cream Shakes",
  "Grilled Sandwiches",
  "Crispy Fried Chicken",
  "Gourmet Burgers",
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-red-600 py-1">
      <div className="flex w-max animate-marquee">
        
        
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center whitespace-nowrap"
          >
            <span className="mx-6 h-2 w-2 rounded-full bg-white/60" />
            <span className="text-base font-semibold text-white">
              {item}
            </span>
          </div>
        ))}

        
        {items.map((item, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex items-center whitespace-nowrap"
          >
            <span className="mx-6 h-2 w-2 rounded-full bg-white/60" />
            <span className="text-base font-semibold text-white">
              {item}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}