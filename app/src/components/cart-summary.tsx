import React from "react";
import { Card, Button, Divider } from "@heroui/react";
import { CartSummary } from "../types/cart";

interface CartSummaryProps {
  summary: CartSummary;
  onCheckout: () => void;
}

export const CartSummaryCard: React.FC<CartSummaryProps> = ({
  summary,
  onCheckout,
}) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-default-500">Subtotal</span>
          <span>${summary.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-default-500">Shipping</span>
          <span>${summary.shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-default-500">Tax</span>
          <span>${summary.tax.toFixed(2)}</span>
        </div>
        <Divider />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${summary.total.toFixed(2)}</span>
        </div>
        <Button
          color="primary"
          size="lg"
          className="mt-4"
          onPress={onCheckout}
          fullWidth
        >
          Proceed to Checkout
        </Button>
      </div>
    </Card>
  );
};
