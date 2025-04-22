import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, Star, Minus, ArrowRight } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
}

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Jocko Protein Powder",
      price: 59.99,
      image: "assets/powder.png",
      category: "Supplements",
      rating: 5,
      description: "High protein & mass gainer supplement - 12lbs"
    },
    {
      id: 2,
      name: "Creatine Monohydrate",
      price: 24.99,
      image: "assets/creatine.png",
      category: "Supplements",
      rating: 5,
      description: "Pure creatine monohydrate - 500g"
    },
    {
      id: 3,
      name: "Whey Protein Isolate",
      price: 29.99,
      image: "assets/protein.png",
      category: "Supplements",
      rating: 4,
      description: "Premium whey protein isolate - 5lbs"
    },
    {
      id: 4,
      name: "Lifting Straps",
      price: 12.99,
      image: "assets/straps.png",
      category: "Equipment",
      rating: 4,
      description: "Heavy duty lifting straps"
    },
    {
      id: 5,
      name: "Premium Sweaters",
      price: 19.99,
      image: "assets/sweater.png",
      category: "Equipment",
      rating: 5,
      description: "Complete resistance bands set"
    },
    {
      id: 6,
      name: "Premium Joggers",
      price: 39.99,
      image: "assets/sweats.png",
      category: "Apparel",
      rating: 4,
      description: "Comfortable athletic joggers"
    }
  ];

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    toast.success('Added to cart!');
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item, index) => index !== productId));
    toast.success('Removed from cart!');
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      
      {/* Navigation */}
      <nav className="fixed w-full bg-transparent z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">FamouzFit</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
              
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-white"
              >
                <ShoppingCart size={24} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
            
            <Menu className="md:hidden text-white" size={24} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="assets/houston.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ELEVATE YOUR <span className="text-purple-500">FITNESS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium fitness gear and supplements to help you achieve your goals
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2">
              Shop Now <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition">
              View Collections
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 -mt-20 relative z-20 pb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <button className="text-purple-600 hover:text-purple-700 flex items-center gap-2">
            View All <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600 font-semibold">{product.category}</span>
                  <div className="flex items-center">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-purple-600 text-white px-3 py-1.5 rounded-lg hover:bg-purple-700 transition text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-gray-600">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Minus size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="text-xl font-bold">${cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;