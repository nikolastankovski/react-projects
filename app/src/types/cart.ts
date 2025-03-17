export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface CartSummary {
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
}
