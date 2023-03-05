import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import Button from "@components/Button";
import Card from "@components/Cards";
import InputField from "@components/InputField";
import Section from "@components/Section";
import SectionTitle from "@components/SectionTitle";
import { BuildingOffice2Icon, PhoneIcon } from "@heroicons/react/24/outline";
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
              <Card variant="baseCard">
                <div className="flex items-center space-x-4">
                  <PhoneIcon
                    className="flex-none w-6 h-6 text-brand-main"
                    aria-hidden="true"
                  />
                  <h3 className="text-2xl font-semibold text-brand-main">
                    Support
                  </h3>
                </div>
                <div className="pl-10 mt-2 text-base">
                  <p className="text-lg text-gray-500">
                    <Link
                      className="hover:text-brand-dark transition__300"
                      href="tel:+91 95012 06323"
                    >
                      +91 95012 06323
                    </Link>
                    <br />
                    <Link
                      className="hover:text-brand-dark transition__300"
                      href="mailto:sales@example.com"
                    >
                      test@example.com
                    </Link>
                  </p>
                </div>
              </Card>
              <Card variant="baseCard">
                <div className="flex items-center space-x-4">
                  <BuildingOffice2Icon
                    className="flex-none w-6 h-6 text-brand-main"
                    aria-hidden="true"
                  />
                  <h3 className="text-2xl font-semibold text-brand-main">
                    Address
                  </h3>
                </div>
                <div className="pl-10 mt-2 text-base">
                  <p className="text-lg text-gray-500">
                    545 Mavis Island
                    <br />
                    Chicago, IL 99191
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <div>
            <Card
              variant="form"
              title="have a doubt?"
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
    </>
  );
};

export default Contact;
