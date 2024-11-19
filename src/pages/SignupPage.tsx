import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const SignupPage: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const [error, _setError] = useState("");
  const [isLoading, _setIsLoading] = useState(false);

  const onSubmit = async (_data: any) => {};

  return (
    <div className="flex-grow flex items-center justify-center">
      <Card className="shadow-2xl w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Register</CardTitle>
          <CardDescription>
            Create your account to start organizing events.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                required
                placeholder="John"
                {...register("firstName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                required
                placeholder="Doe"
                {...register("lastName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                required
                placeholder="john.doe@example.com"
                {...register("email")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                required
                placeholder="••••••••"
                {...register("password")}
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Creating account...
                </>
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link className="text-primary hover:underline" to="/login">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
