"use client";

import { useState } from "react";

import { db } from '../firebase'; 
import { collection, addDoc } from 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";
import SocialIcons from "@/components/socialMedia";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/components/navbar";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms to submit the form.",
  }),
  help: z.enum([
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  services: z.enum([
    "Mobile App Develoment",
    "Social Media Marketing",
    "UI/UX Design",
    "Website Design",
    "Branding",
    "Website Development",
    "Thumbnail design",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help: "Learn More" | "Get a Quote" | "Other";
  services:
  | "Mobile App Develoment"
  | "Social Media Marketing"
  | "UI/UX Design"
  | "Website Design"
  | "Branding"
  | "Website Development"
  | "Thumbnail design";
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      services: "Mobile App Develoment",
      info: "",
      terms: false,
    },
  });

  // async function onSubmit(data: z.infer<typeof FormSchema>) {
  //   try {
  //     setLoading(true);
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });
  //     // console.log(data);
  //     if (!res.ok) {
  //       throw new Error("Something went wrong");
  //     }

  //     setSubmitted(true);
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description: "Something went wrong",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      // Add the form data to the Firestore collection
      await addDoc(collection(db, "contact form"), {data, createdAt: serverTimestamp(),});

      // Mark the form as submitted
      setSubmitted(true);
      toast({
        title: "Success",
        description: "Your response has been submitted!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your response. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=" w-full min-h-[100vh]  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Navbar
        scrollToWebsiteDesign={() => { }}
        scrollToGraphicDesign={() => { }}
        scrollToShopifyStores={() => { }}
        scrollToBrands={() => { }}
        scrollToServices={() => { }}
      />
      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div className="">
          <div className="text-4xl pt-4 font-medium  w-full  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact our team
          </div>
          <div
            className="
              
              py-4
              text-gray-300
                    "
          >
            Let&apos;s discuss how we can help your brand grow and thrive.
          </div>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
                One flexible agency for your entire company to share knowledge,
                ship projects, and collaborate.
              </div>
            </div>

            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
                Enterprise features to securely manage user access and security.
              </div>
            </div>

            <div className="flex gap-4  ">
              <div className=" font-normal pb-4 ">
                Dedicated support to work with you on your setup and help you
                build the best plan for your company.
              </div>
            </div>
          </div>
            <SocialIcons/>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
            space-y-4
            h-full
            border rounded-3xl p-10
            md:w-1/3*
            mb-8"
            >
              <div className="md:flex items-center gap-6 ">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center  w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        First name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center  w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Last name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Company name?
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Services you are interested in
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <div className="flex gap-4">
                          <SelectItem value="Mobile App Develoment">Mobile App Develoment</SelectItem>
                        </div>
                        <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                        <SelectItem value="Branding">Branding</SelectItem>
                        <SelectItem value="Website Development">Website Development</SelectItem>
                        <SelectItem value="Website Design">Website Design</SelectItem>
                        <SelectItem value="Thumbnail Design">Thumbnail Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              /> */}
<FormField
  control={form.control}
  name="services"
  render={({ field }) => (
    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Services you are interested in
      </FormLabel>
      <Select
        value={field.value} // Ensure value is bound to form field value
        onValueChange={field.onChange} // Properly handle value changes
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="Mobile App Develoment">Mobile App Develoment</SelectItem>
          <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
          <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
          <SelectItem value="Website Design">Website Design</SelectItem>
          <SelectItem value="Branding">Branding</SelectItem>
          <SelectItem value="Website Development">Website Development</SelectItem>
          <SelectItem value="Thumbnail design">Thumbnail Design</SelectItem>
        </SelectContent>
      </Select>
    </FormItem>
  )}
/>

              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      How can we help ?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger


                        >
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Learn More">Learn More</SelectItem>
                        <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Anything else ?
                    </FormLabel>
                    <FormControl>
                      <Textarea style={{ height: "100px" }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* <div className="flex gap-4 items-center">
                <div>
                  <Checkbox
                    className="
                    border-2
                    border-white
                    text-sm
                    font-semibold
                    bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
                "
                  />
                </div>
                <div className="text-xs font-light  md:w-3/4 mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  I agree to receive updates and offers from Barakah Studios
                  related to digital marketing services.
                </div>
              </div> */}
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormControl>
                      <div className="flex gap-4 items-center">
                        <Checkbox
                          checked={field.value}  // Bind the checked state to the form value
                          onCheckedChange={(checked) => field.onChange(checked)}  // Handle state change
                          className="
                            border-2
                            border-white
                            text-sm
                            font-semibold
                            bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
                          "
                        />
                        <div className="text-xs font-light  md:w-3/4 mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                          I agree to receive updates and offers from Barakah Studios
                          related to digital marketing services.
                        </div>
                      </div>
                    </FormControl>
                    {/* <FormLabel className="text-xs font-light">
                      I agree to receive updates and offers from Barakah Studios related to digital marketing services.
                    </FormLabel> */}
                    {form.formState.errors.terms && (
                      <div className="text-red-500 text-sm">
                        {form.formState.errors.terms.message}
                      </div>
                    )}

                  </FormItem>
                )}
              />


              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="
                            text-sm
                            font-light
                        
                            "
                  disabled={loading}
                  onClick={() => form.handleSubmit(onSubmit)}
                >
                  Submit
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div
                className="
        text-xl 
        
        md:text-2xl 
        flex 
        items-center
        justify-center
        flex-col
        px-8
        ">
                <div className="w-80 py-20">
                  <PiSmiley className="text-6xl text-[#6c6684] mx-auto" />

                  <div className="text-gray-500 font-light  text-center justify-center mx-auto py-10">
                    We&apos;ve received your inquiry and will be contacting you
                    via email shortly.
                  </div>
                </div>
              </div>
            </>
          )}
        </Form>
      </div>
      {/* <SocialIcons/> */}
    </div>
  );
}
