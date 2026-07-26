export default function CartSidebar({
    cartItems,
    isCartOpen,
    closeCart,
    increment,
    decrement,
    openCheckout,
}) {

    const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
    );

    return (
        <>
        {isCartOpen && (
            <div
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 z-40"
            />
        )}

        {/* Sidebar */}
        <div
            className={`fixed top-0 right-0 h-screen w-80 bg-white flex flex-col shadow-xl z-50
            transition-transform duration-300
            ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            {/* Header */}
            <div className="flex justify-between items-center p-4 mb-4 border-b">
                <h2 className="text-xl font-bold">Shopping Cart</h2>
                <button onClick={closeCart} className="text-2xl cursor-pointer">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto">
                {cartItems.length === 0 ? (
                <p className="p-4">Your cart is empty.</p>
                ) : (
                cartItems.map((item) => (
                    <div
                    key={item.id}
                    className="flex justify-between py-2 px-6"
                    >
                        <div className="flex gap-2">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-16 h-16 rounded-lg object-cover"
                            />

                            <div>
                                <h2>{item.title}</h2>
                                <div className="flex items-center gap-3">
                                    <button
                                    onClick={() => decrement(item.id)}
                                    className="bg-secondary text-white w-6 h-6 font-bold rounded"
                                    >
                                    -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                    onClick={() => increment(item.id)}
                                    className="bg-secondary text-white w-6 h-6 font-bold rounded"
                                    >
                                    +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className="font-bold text-[15px]">₱{item.price.toFixed(2)}</p>

                    </div>
                ))
                )}
            </div>
            <div className="mt-auto border-t p-4">
                <div className="flex justify-between text-lg font-semibold">
                    <span>Subtotal</span>
                    <span>₱{subtotal.toFixed(2)}</span>
                </div>

                <button 
                onClick={openCheckout}
                className="w-full mt-4 bg-secondary text-white py-3 rounded-lg hover:bg-[#363635] transition">
                    Checkout
                </button>
            </div>
        </div>
        </>
    );
}