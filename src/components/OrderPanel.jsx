import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";

export default function OrdersPanel({
    isOpen,
    openOrders,
    closeOrders,
    orders,
}) {
    
    return (
        <>
            <div
                className={`
                    fixed bottom-20 left-1/2 z-40
                    w-[90%] max-w-md
                    max-h-[70vh]
                    overflow-y-auto
                    bg-white
                    rounded-2xl
                    shadow-2xl
                    p-5
                    transition-all duration-300
                    -translate-x-1/2
                    font-sans

                    ${
                        isOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5 pointer-events-none"
                    }
                `}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">
                        My Orders
                    </h2>

                    <button 
                    className="font-bold cursor-pointer"
                    onClick={closeOrders}>
                        ✕
                    </button>
                </div>

                {orders.length === 0 ? (
                    <p>No orders yet.</p>
                ) : (
                    orders.map((order) => (
                        <div
                            key={order.id}
                            className="border rounded-xl p-4 mb-4"
                        >
                            <p className="font-bold">
                                Order #{order.id}
                            </p>

                            <p>
                                Status: {order.status}
                            </p>

                            <p className="font-bold">
                                Total: ₱{order.total}
                            </p>

                            <div className="mt-3 space-y-2">
                                {order.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-row justify-between"
                                    >
                                        <div className="flex flex-row gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-16 h-16 rounded-lg object-cover"
                                            />
                                            <div>
                                                <p>{item.title}</p>
                                                <p>
                                                Ratings: {item.rating}
                                                </p>
                                            </div>
                                        </div>
                                
                                        <div>
                                            <p>
                                                Quantity: {item.quantity}
                                            </p>

                                            <p>
                                                Price: ₱{item.price}
                                            </p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                    key="orders-button"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4 }}
                    onClick={openOrders}
                    className="
                        fixed bottom-4
                        left-1/2
                        -translate-x-1/2
                        z-40
                        btn
                        bounce-button
                    "
                    >
                    View Orders
                    <ChevronUp size={18} />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}