import React from "react";
import { cartItems as initialCartItems } from "@data/cart-items";
import { CartItemCard } from "@components/cart-item";
import { CartSummaryCard } from "@components/cart-summary";
import { CartItem, CartSummary } from "../../types/cart";
import DefaultLayout from "@/layouts/default";

export default function ShoppingCart() {
    const [items, setItems] = React.useState<CartItem[]>(initialCartItems);

    const calculateSummary = (items: CartItem[]): CartSummary => {
        const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = subtotal > 0 ? 10 : 0;
        const tax = subtotal * 0.1;
        return {
            subtotal,
            shipping,
            tax,
            total: subtotal + shipping + tax,
        };
    };

    const handleUpdateQuantity = (id: string, quantity: number) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const handleRemoveItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleCheckout = () => {
        console.log("Proceeding to checkout...");
    };

    const summary = calculateSummary(items);

    return (
        <DefaultLayout>
            <div className="min-h-screen bg-content2 p-8">
                <div className="mx-auto max-w-6xl">
                    <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            {items.length > 0 ? (
                                items.map((item) => (
                                    <CartItemCard
                                        key={item.id}
                                        item={item}
                                        onUpdateQuantity={handleUpdateQuantity}
                                        onRemove={handleRemoveItem}
                                    />
                                ))
                            ) : (
                                <div className="text-center p-8 bg-content1 rounded-lg">
                                    <p className="text-default-500">Your cart is empty</p>
                                </div>
                            )}
                        </div>
                        <div className="lg:col-span-1">
                            <CartSummaryCard
                                summary={summary}
                                onCheckout={handleCheckout}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
