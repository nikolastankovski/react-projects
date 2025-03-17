import React from "react";
import { Card, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CartItem } from "../types/cart";

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export const CartItemCard: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, item.quantity + change);
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <Card className="w-full">
      <div className="flex items-center gap-4 p-4">
        <Image
          src={item.image}
          alt={item.name}
          className="h-24 w-24 rounded-lg object-cover"
        />
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-default-500">${item.price.toFixed(2)}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                isIconOnly
                size="sm"
                variant="flat"
                onPress={() => handleQuantityChange(-1)}
              >
                <Icon icon="lucide:minus" />
              </Button>
              <span className="min-w-[2rem] text-center">{item.quantity}</span>
              <Button
                isIconOnly
                size="sm"
                variant="flat"
                onPress={() => handleQuantityChange(1)}
              >
                <Icon icon="lucide:plus" />
              </Button>
            </div>
            <Button
              size="sm"
              variant="light"
              color="danger"
              onPress={() => onRemove(item.id)}
              startContent={<Icon icon="lucide:trash-2" />}
            >
              Remove
            </Button>
          </div>
        </div>
        <div className="text-lg font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </Card>
  );
};
