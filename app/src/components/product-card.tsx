import React from "react";
import { Card, CardFooter, Button, Image } from "@heroui/react";
import { AddToShoppingCart } from "@icons";

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export const ProductCard = ({ price, imageUrl }: Product) => {
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 2000);
  };

  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={imageUrl}
      />
      <CardFooter className="flex justify-between overflow-hidden py-1 absolute bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <h1 className="text-white/100">${price.toFixed(2)}</h1>
        <Button
          className="text-white bg-primary/80"
          color="default"
          radius="sm"
          size="sm"
          variant="flat"
          onPress={handleAddToCart}
          isLoading={isAdding}
        >
          <AddToShoppingCart /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};