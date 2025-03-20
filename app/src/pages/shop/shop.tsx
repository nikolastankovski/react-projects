import React from "react";
import { Select, SelectItem, Card, CardBody, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { ProductCard, Product } from "../../components/product-card"
import DefaultLayout from "@/layouts/default";

const SORT_OPTIONS = {
    nameAsc: "Name (A-Z)",
    nameDesc: "Name (Z-A)",
    priceAsc: "Price (Low to High)",
    priceDesc: "Price (High to Low)",
};

const MOCK_PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Wireless Headphones",
        price: 99.99,
        imageUrl: "https://picsum.photos/seed/headphones/300/200",
    },
    {
        id: "2",
        name: "Smart Watch",
        price: 199.99,
        imageUrl: "https://picsum.photos/seed/watch/300/200",
    },
    {
        id: "3",
        name: "Bluetooth Speaker",
        price: 79.99,
        imageUrl: "https://picsum.photos/seed/speaker/300/200",
    },
    {
        id: "4",
        name: "Laptop Stand",
        price: 29.99,
        imageUrl: "https://picsum.photos/seed/stand/300/200",
    },
    {
        id: "5",
        name: "Wireless Mouse",
        price: 49.99,
        imageUrl: "https://picsum.photos/seed/mouse/300/200",
    },
    {
        id: "6",
        name: "USB-C Hub",
        price: 39.99,
        imageUrl: "https://picsum.photos/seed/hub/300/200",
    },
];

export default function ShopPage() {
    const [sortBy, setSortBy] = React.useState("nameAsc");
    const [products, setProducts] = React.useState(MOCK_PRODUCTS);

    React.useEffect(() => {
        const sortedProducts = [...MOCK_PRODUCTS].sort((a, b) => {
            switch (sortBy) {
                case "nameAsc":
                    return a.name.localeCompare(b.name);
                case "nameDesc":
                    return b.name.localeCompare(a.name);
                case "priceAsc":
                    return a.price - b.price;
                case "priceDesc":
                    return b.price - a.price;
                default:
                    return 0;
            }
        });
        setProducts(sortedProducts);
    }, [sortBy]);

    return (
        <DefaultLayout>
            <div className="p-8 max-w-7xl mx-auto">
                <Card className="mb-6">
                    <CardBody>
                        <div className="flex justify-end items-center">
                            <div className="flex items-center gap-4">
                                <span className="text-default-500">Sort by:</span>
                                <Select
                                    size="sm"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-[200px]"
                                    defaultSelectedKeys={[sortBy]}
                                    aria-label="SortBy"
                                >
                                    {Object.entries(SORT_OPTIONS).map(([val, label]) => (
                                        <SelectItem key={val}>
                                            {label}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <div className="grid lg:grid-cols-12 sm:grid-cols-8 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
}