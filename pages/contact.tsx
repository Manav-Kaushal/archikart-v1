import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import Button from "@components/Button";
import Card from "@components/Cards";
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
  const [form, setForm] = useState<FormType>(initialFormState);

  const handleInputChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(new Promise((resolve) => setTimeout(resolve, 3000)), {
      pending: "Promise is pending",
      success: "Promise resolved 👌",
      error: "Promise rejected 🤯",
    });
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
        <Section sx="pt-0">
          <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <div className="grid max-w-2xl grid-cols-1 gap-6 mx-auto lg:gap-8">
                <SectionTitle title="Get in touch" underlineTitle />
                <p className="text-lg leading-8 text-gray-600">
                  Proin volutpat consequat porttitor cras nullam gravida at.
                  Orci molestie a eu arcu. Sed ut tincidunt integer elementum id
                  sem. Arcu sed malesuada et magna.
                </p>
                <dl className="space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <BuildingOffice2Icon
                        className="w-6 text-gray-400 h-7"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      545 Mavis Island
                      <br />
                      Chicago, IL 99191
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon
                        className="w-6 text-gray-400 h-7"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <Link
                        className="hover:text-brand-main transition__300"
                        href="tel:+1 (555) 234-5678"
                      >
                        +1 (555) 234-5678
                      </Link>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <EnvelopeIcon
                        className="w-6 text-gray-400 h-7"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <Link
                        className="hover:text-brand-main transition__300"
                        href="mailto:hello@example.com"
                      >
                        hello@example.com
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div>
              <Card
                variant="form"
                title="Get a quote!"
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
                    variant="outline"
                    onClick={() => {}}
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Contact;
