import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import Button from "@components/Button";
import Section from "@components/Section";
import SectionTitle from "@components/SectionTitle";
import Typography from "@components/Typography";
import { Disclosure, Transition } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { app } from "@utils/config";
import { faqs, stats, values } from "@utils/mocks/aboutPage";
import { FaqType, StatType, ValueType } from "@utils/types/aboutPage";
import { NextSeo } from "next-seo";
import Image from "next/image";
import React from "react";

const About = (props: any) => {
  return (
    <>
      <NextSeo title="About Archikart" />
      <Banner
        title="About Archikart"
        backgroundImage="https://images.pexels.com/photos/1915906/pexels-photo-1915906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <Breadcrumbs />
      </Banner>
      <div className="section__card">
        <Section>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 place-items-center">
            <div>
              <SectionTitle
                title={
                  <>
                    We Are The{" "}
                    <span className="text-brand-main">
                      World&apos;s Largest
                    </span>{" "}
                    University
                  </>
                }
                sx="text-left"
              />
              <Typography variant="body" sx="mt-4">
                At <span className="text-brand-main">{app.name}</span>, we
                believe that great architecture has the power to transform
                spaces and inspire lives. We are passionate about designing
                buildings that not only meet the functional needs of our
                clients, but also create a sense of place and community. With
                our team of skilled architects, we bring together form,
                function, and beauty to create buildings that stand the test of
                time.
              </Typography>
              <Typography variant="body" sx="mt-5">
                Whether it&apos;s a residential, commercial, or public project,
                we are committed to excellence and delivering exceptional
                results that exceed our clients&apos; expectations. Join us on a
                journey to transform spaces and inspire lives with great
                architecture.
              </Typography>
              <Button
                variant="outline"
                shape="sharp"
                size="small"
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onClick={() => {}}
                sx="mt-8"
              >
                Explore Now
              </Button>
            </div>
            <div className="relative aspect-[2/1] w-full">
              <Image
                src="https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="archikart about us"
                className="shadow-xl rounded-xl"
                fill
              />
            </div>
          </div>
        </Section>
        <Section>
          <div className="mx-auto -mt-12 sm:mt-0">
            <SectionTitle
              title={
                <>
                  Our <span className="text-brand-main">Mission</span>
                </>
              }
            />
            <div className="flex flex-col mt-6 gap-y-20 gap-x-8 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <Typography variant="body">
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                  scelerisque eget. Eleifend egestas fringilla sapien.
                </Typography>
                <Typography variant="body" sx="mt-5">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </Typography>
              </div>

              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="space-y-8">
                  {stats.map((stat: StatType) => (
                    <div key={stat.label} className="flex flex-col-reverse">
                      <dt className="text-gray-500">
                        <Typography variant="bodySmall">
                          {stat.label}
                        </Typography>
                      </dt>
                      <dd className="font-semibold tracking-tight text-gray-900">
                        <Typography variant="h3" capitalize>
                          {stat.value}
                        </Typography>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="mx-auto">
            <SectionTitle
              title={
                <>
                  Our <span className="text-brand-main">Values</span>
                </>
              }
            />
            <Typography variant="body" sx="mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Et, iusto.
            </Typography>
          </div>
          <dl className="grid max-w-2xl grid-cols-1 gap-12 mx-auto mt-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value: ValueType) => (
              <div key={value.name} className="relative flex space-x-12 pl-9">
                <value.icon
                  className="absolute w-16 h-16 p-2 bg-gray-100 rounded-lg text-brand-main top-1 left-1"
                  aria-hidden="true"
                />
                <div>
                  <Typography>
                    <span className="font-semibold text-brand-main">
                      {value.name}
                    </span>{" "}
                    <span className="font-regular">{value.description}</span>
                  </Typography>
                </div>
              </div>
            ))}
          </dl>
        </Section>
        <Section>
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <SectionTitle
              title={
                <>
                  Trusted by the world&apos;s{" "}
                  <span className="text-brand-main">most innovative teams</span>{" "}
                </>
              }
              center
            />
            <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </Section>
        <Section>
          <SectionTitle title="Frequently asked questions" center />
          <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq: FaqType, index) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="flex items-center ml-6 h-7">
                            {open ? (
                              <MinusSmallIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel as="dd" className="px-4 mt-2" static>
                          <Typography variant="bodySmall">
                            {faq.answer}
                          </Typography>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </Section>
      </div>
    </>
  );
};

export default About;
