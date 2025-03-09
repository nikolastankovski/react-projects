import { Button, Divider, Form, Input, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";
import DefaultLayout from "@/layouts/default";

export default function App() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Login submitted");
    };

    return (
        <DefaultLayout>
            <div className="flex items-center justify-center p-4">
                <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg p-6">
                    <h2 className="text-xl font-medium">Welcome Back</h2>
                    <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <Input
                            isRequired
                            label="Email"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            variant="bordered"
                        />
                        <Input
                            isRequired
                            label="Password"
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                            variant="bordered"
                        />
                        <Button className="w-full" color="primary" type="submit">
                            Sign In
                        </Button>
                    </Form>
                    <Divider />
                    <div className="flex flex-col gap-2">
                        <Button
                            startContent={<Icon icon="flat-color-icons:google" width={24} />}
                            variant="bordered"
                        >
                            Continue with Google
                        </Button>
                        <Button startContent={<Icon icon="fe:github" width={24} />} variant="bordered">
                            Continue with GitHub
                        </Button>
                    </div>
                    <p className="text-small text-center">
                        Need an account?{" "}
                        <Link href="#" size="sm">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </DefaultLayout>
    );
}