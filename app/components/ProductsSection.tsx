const products = [
  { name: "Fresh Tomatoes (1kg)", price: "₹45", category: "Fruits & Vegetables", imageUrl:'/images/1.webp'},
  { name: "Bananas (6 pcs)", price: "₹60", category: "Fruits & Vegetables", imageUrl:'/images/2.webp'},
  { name: "Full Cream Milk (1L)", price: "₹70", category: "Dairy & Bakery", imageUrl:'/images/3.webp' },
  { name: "Brown Bread", price: "₹40", category: "Dairy & Bakery" , imageUrl:'/images/4.webp'},
  { name: "Potato Chips", price: "₹90", category: "Snacks & Beverages", imageUrl:'/images/5.webp' },
  { name: "Soft Drink (1.25L)", price: "₹75", category: "Snacks & Beverages", imageUrl:'/images/6.webp' },
  { name: "Liquid Detergent", price: "₹110", category: "Cleaning Supplies", imageUrl:'/images/7.webp' },
  { name: "Floor Cleaner", price: "₹120", category: "Cleaning Supplies", imageUrl:'/images/8.webp' },
  { name: "Toothpaste", price: "₹99", category: "Personal Care", imageUrl:'/images/9.webp' },
  { name: "Shampoo", price: "₹299", category: "Personal Care", imageUrl:'/images/10.webp' },
  { name: "Garbage Bags (30x)", price: "₹85", category: "Household Essentials", imageUrl:'/images/11.webp' },
  { name: "Kitchen Towels (2x)", price: "₹65", category: "Household Essentials", imageUrl:'/images/12.webp' },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="border-b border-slate-200 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Sample products
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            These are example items shown for demonstration. Actual products and
            prices in the app may change based on availability and city.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
            >
              <div className="flex h-36 w-full items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-50 text-xs font-medium text-slate-500">
                 <img
    src={product?.imageUrl}   // <-- replace with your image field
    alt="Product"
    className="h-full w-full object-cover"
  />
              </div>
              <div className="flex flex-1 flex-col gap-1 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
                  {product.category}
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {product.name}
                </p>
                <div className="mt-1 flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-900">
                    {product.price}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-100">
                    In Stock
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
