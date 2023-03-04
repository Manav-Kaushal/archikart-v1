import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import Button from "@components/Button";
import Card from "@components/Cards";
import InputField from "@components/InputField";
import Section from "@components/Section";
import SectionTitle from "@components/SectionTitle";
import { NextSeo } from "next-seo";
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
        <SectionTitle title="Maps will come here..." center />
      </Section>
      <Section>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>Address Details</div>
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
