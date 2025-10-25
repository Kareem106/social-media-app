"use client";

import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button";
import Link from "next/link";
const formSchema = z.object({
  username: z.string().min(2).max(50),
  password:z.string().min(2).max(50),
})
export default function SignInForm(){
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        password:""
      },
    })
    const onSubmit = (data) => {
      console.log(data)
    }
    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-1/2 mx-auto  p-8 rounded-lg text-black">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription className="text-gray-500">
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription className="text-gray-500">
                This is your Password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className=" text-lg font-semibold w-full py-8 bg-blue-800">Sign In</Button>
        <span className="text-center text-lg font-semibold w-full block">Don't have an account ? <Link href="/sign-up" className="text-blue-800 text-xl ms-2">Sign Up</Link></span>
      </form>
    </Form>
    )
}