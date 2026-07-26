import React, { useState } from 'react'
import OrdersPanel from './components/OrderPanel';
import { Toaster } from "react-hot-toast";
import { NavBar } from './components/NavBar';
import HomeSection from './components/Home';
import ShopSection from './components/Shop';
import AboutSection from './components/About';
import ReviewsSection from './components/Reviews';
import ContactSection from './components/Contact';
import CartSidebar from './components/CartSidebar';
import CheckoutModal from './components/CheckoutModal';
import { addItem, incrementItem, decrementItem } from './CartFunct/CartFunct';


function App() {
  const [orders, setOrders] = useState([]);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function addToCart(product) {
  setCartItems((prev) => addItem(prev, product));
  }
  function increment(id) {
    setCartItems((prev) => incrementItem(prev, id));
  }

  function decrement(id) {
    setCartItems((prev) => decrementItem(prev, id));
  }

  function handleOrder(order) {
    const newOrder = {
        id: Date.now(),
        status: "Pending",
        ...order,
    };

    setOrders((prev) => [...prev, newOrder]);

    setCartItems([]);
    setIsCheckoutOpen(false);
}

  const isSearching = searchTerm.trim() !== "";


  return (
    <>
    <Toaster position="top-center" />
        <NavBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
          openCart={() => setIsCartOpen(true)}
          cartCount={cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          )}
        />

        <CartSidebar
          isCartOpen={isCartOpen}
          closeCart={() => setIsCartOpen(false)}
          cartItems={cartItems}
          increment={increment}
          decrement={decrement}
          openCheckout={() => {
              setIsCartOpen(false);
              setIsCheckoutOpen(true);
          }}
        />

        <CheckoutModal
            isOpen={isCheckoutOpen}
            closeModal={() => setIsCheckoutOpen(false)}
            cartItems={cartItems}
            onSubmit={handleOrder}
        />

        <OrdersPanel
          isOpen={isOrdersOpen}
          openOrders={() => setIsOrdersOpen(true)}
          closeOrders={() => setIsOrdersOpen(false)}
          orders={orders}
      />

        <main>
          {!isSearching && (
              <>
                  <HomeSection />
              </>
          )}

          <ShopSection
              addToCart={addToCart}
              searchTerm={searchTerm}
          />

          {!isSearching && (
              <>
                  <AboutSection />
                  <ReviewsSection />
                  <ContactSection />
              </>
          )}
      </main>
    </>
  );
};

export default App