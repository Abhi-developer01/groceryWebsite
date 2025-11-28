const categories = [
  {
    name: "Fruits & Vegetables",
    description: "Seasonal fruits and fresh vegetables for everyday cooking.",
    icon: "🍎",
  },
  {
    name: "Dairy & Bakery",
    description: "Milk, curd, cheese, bread and bakery favourites.",
    icon: "🥐",
  },
  {
    name: "Snacks & Beverages",
    description: "Chips, biscuits, juices, soft drinks and more.",
    icon: "🥤",
  },
  {
    name: "Household Essentials",
    description: "Daily-use items and home utilities.",
    icon: "🏠",
  },
  {
    name: "Personal Care",
    description: "Skincare, haircare and hygiene products.",
    icon: "🧴",
  },
  {
    name: "Cleaning Supplies",
    description: "Detergents, disinfectants and cleaning tools.",
    icon: "🧼",
  },
];

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Featured categories
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A quick overview of the main categories customers can browse inside
            the FreshMart app.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-lg">
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {category.name}
                </h3>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
