import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import Button from "@components/Button";
import InputField from "@components/InputField";
import Section from "@components/Section";
import SectionTitle from "@components/SectionTitle";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import FormCard from "@components/Cards/FormCard";
import Typography from "@components/Typography";

type Props = {};

type FormType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = (props: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormType>(initialFormState);

  const handleInputChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setForm(initialFormState);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const config = {
      method: "POST",
      url: "/api/email",
      headers: {
        "Content-Type": "application/json",
      },
      data: form,
    };
    try {
      toast.promise(axios(config), {
        pending: "Sending Message",
        success: {
          render({ data }: any) {
            reset();
            return `${data?.data.message}`;
          },
        },
        error: {
          render({ data }: any) {
            return `${data?.response?.data?.message}`;
          },
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <NextSeo title="Contact Us" />
      <Banner
        title="Contact Us"
        backgroundImage="https://images.pexels.com/photos/1915906/pexels-photo-1915906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <Breadcrumbs />
      </Banner>
      <div className="section__card">
        <Section sx="pt-0">
          <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <div className="grid max-w-2xl grid-cols-1 gap-6 mx-auto lg:gap-8">
                <SectionTitle
                  title={
                    <>
                      Get in <span className="text-brand-main">touch</span>
                    </>
                  }
                />
                <Typography>
                  Proin volutpat consequat porttitor cras nullam gravida at.
                  Orci molestie a eu arcu. Sed ut tincidunt integer elementum id
                  sem. Arcu sed malesuada et magna.
                </Typography>
                <dl className="mt-4 space-y-4">
                  <div className="flex gap-x-4">
                    <Typography
                      variant="body"
                      sx="relative group flex items-center space-x-4 cursor-default"
                    >
                      <div className="-z-[1] absolute top-0 left-0 w-12 h-12 bg-brand-main/5 rounded-lg group-hover:w-[415px] transition__300" />
                      <BuildingOffice2Icon
                        className="w-12 h-12 text-brand-main py-2 -translate-x-1/3 group-hover:rotate-[360deg] transition__300"
                        aria-hidden="true"
                      />
                      <span className="-translate-x-[15px]">
                        545 Mavis Island, Chicago, IL 99191
                      </span>
                    </Typography>
                  </div>
                  <div className="flex gap-x-4">
                    <Typography
                      variant="body"
                      sx="relative group flex items-center space-x-4 cursor-pointer"
                    >
                      <div className="-z-[1] absolute top-0 left-0 w-12 h-12 bg-brand-main/5 rounded-lg group-hover:w-64 transition__300" />
                      <PhoneIcon
                        className="w-12 h-12 text-brand-main py-2 -translate-x-1/3 group-hover:rotate-[360deg] transition__300"
                        aria-hidden="true"
                      />
                      <Link
                        className="group-hover:text-brand-main transition__300  -translate-x-[15px]"
                        href="tel:+1 (555) 234-5678"
                      >
                        +1 (555) 234-5678
                      </Link>
                    </Typography>
                  </div>
                  <div className="flex gap-x-4">
                    <Typography
                      variant="body"
                      sx="relative group flex items-center space-x-4 cursor-pointer"
                    >
                      <div className="-z-[1] absolute top-0 left-0 w-12 h-12 bg-brand-main/5 rounded-lg group-hover:w-[270px] transition__300" />
                      <EnvelopeIcon
                        className="w-12 h-12 text-brand-main py-2 -translate-x-1/3 group-hover:rotate-[360deg] transition__300"
                        aria-hidden="true"
                      />
                      <Link
                        className="group-hover:text-brand-main transition__300  -translate-x-[15px]"
                        href="mailto:hello@example.com"
                      >
                        hello@example.com
                      </Link>
                    </Typography>
                  </div>
                </dl>
              </div>
            </div>
            <div>
              <FormCard
                title={
                  <>
                    Get a <span className="text-brand-main">quote!</span>
                  </>
                }
                description="Reach out to us!"
              >
                <form
                  onSubmit={handleSubmit}
                  className="mt-4 space-y-4"
                  autoComplete="off"
                >
                  <InputField
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                  />
                  <InputField
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                  <InputField
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                  />
                  <InputField
                    variant="textarea"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Message (Max. 250 characters)"
                    maxLength={250}
                  />
                  <Button
                    type="submit"
                    shape="sharp"
                    size="small"
                    variant="outline"
                    onClick={() => {}}
                  >
                    Send Message
                  </Button>
                </form>
              </FormCard>
            </div>
          </div>
        </Section>
        <Section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.339414529725!2d-118.12745768483914!3d34.13765758058274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c4a7ea997b91%3A0x3499e7d01a61dd1a!2sCalifornia%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1678017983568!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Section>
      </div>
    </>
  );
};

export default Contact;
