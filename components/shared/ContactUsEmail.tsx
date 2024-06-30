"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { Textarea } from "../ui/textarea";
import { contactUsSenderDefaultValues } from "@/constant";
import { contactUsSenderSchema } from "@/lib/validator";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

const ContactUsEmail = () => {
  const initialValues = contactUsSenderDefaultValues;

  const form = useForm<z.infer<typeof contactUsSenderSchema>>({
    resolver: zodResolver(contactUsSenderSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof contactUsSenderSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full flex-center flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5 md:gap-10 px-2 md:px-6 "
        >
          <div className="w-full flex">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-2">
                  <FormLabel>
                    <span className="text-red-500">*</span>Name:
                  </FormLabel>
                  <FormControl className="w-full flex">
                    <Input
                      placeholder="Name"
                      {...field}
                      className="w-full flex"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-2">
                  <FormLabel>
                    <span className="text-red-500">*</span>Email:
                  </FormLabel>
                  <FormControl className="w-full flex">
                    <Input
                      placeholder="Email"
                      {...field}
                      className="w-full flex"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex">
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-2">
                  <FormLabel>
                    <span className="text-red-500">*</span>Contact Number:
                  </FormLabel>
                  <FormControl className="w-full flex">
                    <Input
                      placeholder="Contact Number"
                      {...field}
                      className="w-full flex"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-2">
                  <FormLabel>
                    <span className="text-red-500">*</span>Subject:
                  </FormLabel>
                  <FormControl className="w-full flex">
                    <Input
                      placeholder="Name"
                      {...field}
                      className="w-full flex"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-2">
                  <FormLabel>
                    <span className="text-red-500">*</span>Your Message:
                  </FormLabel>
                  <FormControl className="w-full flex min-h-72">
                    <Textarea
                      placeholder="Your Message"
                      {...field}
                      className="textarea rounded-md min-h-72"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex items-center gap-2">
            <FormField
              control={form.control}
              name="isCheck"
              render={({ field }) => (
                <FormItem className="flex gap-2">
                  <FormControl className="w-full flex">
                    <Checkbox
                      onCheckedChange={field.onChange}
                      checked={field.value}
                      id="isFree"
                      className="mr-2 h-5 w-5 border-2 border-primary-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="">
              <p>
                I have read and accept the{" "}
                <Link href="/siteterms" className="text-[#e27107]">
                  Site Terms of Use
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex-center w-full ">
            <Button
              type="submit"
              className="flex-center bg-[#e27107] py-2 px-20"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsEmail;
