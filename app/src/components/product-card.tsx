import React from "react";
import { Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export const ProductCard = ({ name, price, imageUrl }: Product) => {
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <Card className="w-full" shadow="md">
      <CardBody className="p-0">
        <Image
          alt={name}
          className="w-full object-cover h-[200px]"
          src={imageUrl}
        />
      </CardBody>
      <CardFooter className="flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <h4 className="font-semibold text-large">{name}</h4>
          <p className="text-default-500 text-large">${price.toFixed(2)}</p>
        </div>
        <Button
          fullWidth
          color="primary"
          startContent={<Icon icon="lucide:shopping-cart" />}
          isLoading={isAdding}
          onPress={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};