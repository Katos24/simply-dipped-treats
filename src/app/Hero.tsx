export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-rose-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Premium Chocolate Treats
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Handcrafted chocolate-dipped strawberries and treats made with love in New York City
        </p>
        <div className="space-x-4">
          <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
            Shop Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600">
            Call to Order
          </button>
        </div>
      </div>
    </section>
  )
}