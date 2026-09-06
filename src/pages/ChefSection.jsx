const chefs = [
  {
    name: "Alice Mortal",
    role: "HEAD CHEF",
    experience: "12 years experience",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Michael Corn",
    role: "GRILL MASTER",
    experience: "8 years experience",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Faz Chowdel",
    role: "PASTRY CHEF",
    experience: "10 years experience",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "William Latnum",
    role: "PIZZA ARTISAN",
    experience: "9 years experience",
    image: "https://images.unsplash.com/photo-1574969903809-3f7d4f2e6f3d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ChefSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 font-serif text-sm italic text-red-500">
            The Culinary Team
          </p>

          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Expert{" "}
            <span className="text-red-500">Chefs</span>
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {chefs.map((chef) => (
            <div
              key={chef.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              {/* Image */}
              <img
                src={chef.image}
                alt={chef.name}
                className="h-56 w-full object-cover"
              />

              {/* Content */}
              <div className="px-4 py-4 text-center">
                <h3 className="text-base font-bold text-gray-800">
                  {chef.name}
                </h3>

                <p className="mt-1 text-[11px] font-semibold tracking-wide text-red-500">
                  {chef.role}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  {chef.experience}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
   
  );
}