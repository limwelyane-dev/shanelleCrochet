import { useState } from "react";
import toast from "react-hot-toast";

export default function CheckoutModal({
    isOpen,
    closeModal,
    cartItems,
    onSubmit,
}) {
    const [customer, setCustomer] = useState({
        fullName: "",
        phone: "",
        address: "",
        notes: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const total = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        const order = {
            customer,
            items: cartItems,
            total,
        };

        onSubmit(order);
        toast.success("Your Order has been recorded!")

        setCustomer({
            fullName: "",
            phone: "",
            address: "",
            notes: "",
            });
    };

    if (!isOpen) return null;

    return (
        <>
            <div
                onClick={closeModal}
                className="fixed inset-0 bg-black/40 z-50"
            />


            <div className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">
                        Checkout
                    </h2>

                    <button onClick={closeModal}>
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label>Full Name</label>

                        <input
                            type="text"
                            required
                            placeholder="eg. Juan Dela Cruz"
                            value={customer.fullName}
                            onChange={(e) =>
                                setCustomer({
                                ...customer,
                                fullName: e.target.value,
                                })
                            }
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div>
                        <label>Phone Number</label>

                        <input
                            type="tel"
                            required
                            placeholder="09XXXXXXXXX"
                            value={customer.phone}
                            onChange={(e) =>
                                setCustomer({
                                ...customer,
                                phone: e.target.value,
                                })
                            }
                            className="w-full border rounded p-2"
                            />
                    </div>

                    <div>
                        <label>Address</label>

                        <textarea
                        required
                            value={customer.address}
                            onChange={(e) =>
                                setCustomer({
                                ...customer,
                                address: e.target.value,
                                })
                            }
                            className="w-full border rounded p-2"
                            />
                    </div>

                    <div>
                        <label>Notes (Optional)</label>

                        <textarea
                            value={customer.notes}
                            onChange={(e) =>
                                setCustomer({
                                ...customer,
                                notes: e.target.value,
                                })
                            }
                            className="w-full border rounded p-2"
                            />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-secondary text-white py-3 rounded-lg"
                    >
                        Confirm Order
                    </button>

                </form>

            </div>
        </>
    );
}