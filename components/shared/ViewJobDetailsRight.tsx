"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { jobApplicationSenderInfoSchema } from "@/lib/validator";
import { jobApplicationSenderDefaultValues } from "@/constant";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const ViewJobDetailsRight = () => {
  const { toast } = useToast();
  const router = useRouter();
  const initialValues = jobApplicationSenderDefaultValues;

  const form = useForm<z.infer<typeof jobApplicationSenderInfoSchema>>({
    resolver: zodResolver(jobApplicationSenderInfoSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(
    values: z.infer<typeof jobApplicationSenderInfoSchema>
  ) {
    // try {
    //   const newSenderEmail = await contactUsSendEmail(values);
    //   if (newSenderEmail) {
    //     form.reset();
    //     toast({
    //       variant: "success",
    //       title: "Successfully",
    //       description: "Email Successfully send.",
    //     });
    //     router.push(`/contactus`);
    //   } else {
    //     toast({
    //       variant: "destructive",
    //       title: "Error",
    //       description: "Failed sending Email.",
    //     });
    //   }
    // } catch (error) {
    //   toast({
    //     variant: "destructive",
    //     title: "Error",
    //     description: "Failed sending Email.",
    //   });
    //   console.log(error);
    // }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex-center flex-col max-w-[300px] md:max-w-full gap-5 md:gap-10 px-2 md:px-5">
        <Image
          src="/assets/images/login_image.jpg"
          width={600}
          height={480}
          alt="Profile Picture"
          className="flex rounded-2xl"
        />
      </div>
      <div className="w-full flex">
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
                name="applyFor"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col gap-2">
                    <FormLabel>
                      <span className="text-red-500">*</span>Apply For:
                    </FormLabel>
                    <FormControl className="w-full flex">
                      <Input
                        placeholder="Apply For..."
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

            <div className="w-full flex">
              <FormField
                control={form.control}
                name="jobApplicationAttachment"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col gap-2">
                    <FormLabel>
                      <span className="text-red-500">*</span>Attachment:
                    </FormLabel>
                    <FormControl className="w-full flex">
                      <Input
                        placeholder=""
                        {...field}
                        type="file"
                        className="w-full flex"
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
                  I agree to the{" "}
                  <Link href="/siteterms" className="text-[#e27107]">
                    Site Terms of Use
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex w-full ">
              <Button
                type="submit"
                disabled={!form.watch("isCheck") || form.formState.isSubmitting}
                className="flex-center bg-[#e27107] hover:bg-orange-500 py-2 px-20"
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin cursor-not-allowed" />
                    <p>Submitting...</p>
                  </>
                ) : (
                  <p className="p-regular-12 md:p-regular-16">Submit</p>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ViewJobDetailsRight;
