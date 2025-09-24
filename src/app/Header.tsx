export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-600">
            Simply Dipped Treats
          </h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-pink-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-pink-600">Products</a>
            <a href="#" className="text-gray-700 hover:text-pink-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}