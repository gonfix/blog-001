// Components
import { Carousel } from "@/components/Carousel/Carousel";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { HiOutlineMinusSm } from "react-icons/hi";
import { RiAddFill } from "react-icons/ri";
import { NextPage } from "next";
import { CardBlogCarousel } from "@/components/CardBlogCarousel/CardBlog";

// Utilities
import { ServiceDataVisto } from "@/Utilities/Variables";
import { useServiceQuery } from "@/Utilities/Services";

// Interfaces
import { Post } from "@/interfaces";

interface PageVistoPortuguesProps {
  blogData: Post[];
}

const PageVistoPortugues: NextPage<PageVistoPortuguesProps> = ({
  blogData,
}) => {
  return (
    <>
      <Head>
        <title>Lorem Ipsum</title>
        <meta name="description" content="Lorem ipsum dolor sit amet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-screen py-0">
        <section className=" text-center lg:text-start items-center bg-cidadaniaPort bg-cover pt-16 lg:pt-0 lg:mt-28">
          <div className="container grid grid-cols-1 lg:grid-cols-5 lg:gap-x-11">
            <div className="py-7 lg:py-16 flex flex-col lg:col-span-3">
              <div className=" flex flex-col lg:flex-row items-center lg:items-end gap-5">
                <h1 className="mt-4 text-3xl font-medium  lg:text-5xl text-red-500 flex gap-4 order-2 lg:order-1">
                  Lorem Ipsum
                </h1>
                <Image
                  src="/bandeira-portugal.webp"
                  alt="Lorem ipsum"
                  width={36}
                  height={35}
                  className="mx-auto lg:ml-0 order-1 lg:order-2"
                  priority
                />
              </div>
              <p className="mx-auto mt-4 lg:mt-6 text-red-400 text-sm lg:text-xl max-w-md lg:ml-0  lg:leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <Image
              src="/Servicos/Banner-visto-portugues.webp"
              alt="Lorem ipsum"
              width={321}
              height={303}
              className="self-end mx-auto mt-5 lg:col-span-2"
              priority
            />
          </div>
        </section>
        <section className="py-10">
          <div className=" pt-16">
            <div className="text-center container">
              <span className="text-green-500 font-medium">
                Lorem Ipsum
              </span>
              <h2 className="mt-2  text-2xl sm:text-4xl text-black-400 font-medium">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-base mt-4 text-gray-300 mx-auto max-w-2xl px-2   lg:leading-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="pt-10 container">
            <Carousel serviceData={ServiceDataVisto} type="secondary" />
          </div>
        </section>
        <section className="py-10 lg:py-5 mt-2 lg:my-5 container">
          <div className=" lg:pt-16">
            <div className="text-center">
              <span className="text-green-500 font-medium">Lorem Ipsum</span>
              <h2 className="mt-2 text-2xl lg:text-4xl text-black-400 font-medium">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-sm lg:text-base mt-4 text-gray-300 mx-auto max-w-2xl lg:px-2   lg:leading-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="mt-5 h-[361px] lg:mt-12  mx-auto max-w-2xl">
            <Accordion
              allowToggle
              borderColor="transparent"
              border="transparent"
            >
              <AccordionItem borderBottom="1px" borderBottomColor="#D9D9D9">
                {({ isExpanded }) => (
                  <>
                    <h2 className="text-black-400 hover:text-green-500">
                      <AccordionButton
                        _hover={{ bg: "transparent" }}
                        m={0}
                        p={0}
                        py={4}
                        gap={1}
                        alignItems="flex-start"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="text-base lg:text-xl font-medium flex justify-between"
                        >
                          Lorem ipsum dolor sit amet?
                        </Box>
                        {isExpanded ? (
                          <HiOutlineMinusSm
                            fontSize="20px"
                            className="border-2 rounded-sm border-green-500 text-green-500"
                          />
                        ) : (
                          <RiAddFill
                            fontSize="20px"
                            className="border-2 rounded-sm border-green-500 text-green-500"
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} m={0} p={0}>
                      <p className="text-sm lg:text-base font-normal text-gray-300 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem borderBottom="1px" borderBottomColor="#D9D9D9">
                {({ isExpanded }) => (
                  <>
                    <h2 className="text-black-400 hover:text-green-500">
                      <AccordionButton
                        _hover={{ bg: "transparent" }}
                        m={0}
                        p={0}
                        py={4}
                        gap={1}
                        alignItems="flex-start"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="text-base lg:text-xl font-medium flex justify-between"
                        >
                          Lorem ipsum dolor sit amet?
                        </Box>
                        {isExpanded ? (
                          <HiOutlineMinusSm
                            fontSize="20px"
                            className="border-2 rounded-sm border-green-500 text-green-500"
                          />
                        ) : (
                          <RiAddFill
                            fontSize="20px"
                            className="border-2 rounded-sm border-green-500 text-green-500"
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} m={0} p={0}>
                      <p className="text-sm lg:text-base font-normal text-gray-300 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem borderBottom="1px" borderBottomColor="#D9D9D9">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _hover={{ bg: "transparent" }}
                        m={0}
                        p={0}
                        py={4}
                        gap={1}
                        alignItems="flex-start"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="text-base lg:text-xl font-medium text-black-400  flex justify-between hover:text-green-500"
                        >
                          Lorem ipsum dolor sit amet?
                        </Box>
                        {isExpanded ? (
                          <HiOutlineMinusSm
                            fontSize="20px"
                            className="border-2 rounded-sm border-green-500 text-green-500"
                          />
                        ) : (
                          <RiAddFill
                            fontSize="20px"
                            className="border-2 rounded-sm border-green-500 text-green-500"
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} m={0} p={0}>
                      <p className="text-sm lg:text-base font-normal text-gray-300 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem borderBottom="1px" borderBottomColor="#D9D9D9">
                {({ isExpanded }) => (
                  <>
                    <h2 className="text-black-400 hover:text-green-500">
                      <AccordionButton
                        _hover={{ bg: "transparent" }}
                        m={0}
                        p={0}
                        py={4}
                        gap={1}
                        alignItems="flex-start"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="text-base lg:text-xl font-medium flex justify-between"
                        >
                          Lorem ipsum dolor sit amet?
                        </Box>
                        {isExpanded ? (
                          <HiOutlineMinusSm
                            fontSize="20px"
                            className="border-2 rounded-sm border-green-500 text-green-500"
                          />
                        ) : (
                          <RiAddFill
                            fontSize="20px"
                            className="border-2 rounded-sm border-green-500 text-green-500"
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} m={0} p={0}>
                      <p className="text-sm lg:text-base font-normal text-gray-300 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem borderBottom="1px" borderBottomColor="#D9D9D9">
                {({ isExpanded }) => (
                  <>
                    <h2 className="text-black-400 hover:text-green-500">
                      <AccordionButton
                        _hover={{ bg: "transparent" }}
                        m={0}
                        p={0}
                        py={4}
                        rowGap={1}
                        alignItems="flex-start"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="text-base lg:text-xl font-medium flex justify-between"
                        >
                          Lorem ipsum dolor sit amet?
                        </Box>
                        {isExpanded ? (
                          <HiOutlineMinusSm
                            fontSize="20px"
                            className="border-2 rounded-sm border-green-500 text-green-500"
                          />
                        ) : (
                          <RiAddFill
                            fontSize="20px"
                            className="border-2 rounded-sm border-green-500 text-green-500"
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} m={0} p={0}>
                      <p className="text-sm lg:text-base font-normal text-gray-300 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="flex flex-col">
          <section className="order-2 lg:order-1 lg:container">
            <div className="text-center lg:text-start container grid grid-cols-1 lg:grid-cols-5 items-center lg:gap-16 lg:my-8 box-banner">
              <div className="col-span-3 px-10 py-10 flex flex-col">
                <span className=" mt-16 lg:mt-8 text-green-500 font-medium">
                  Lorem Ipsum
                </span>
                <h2 className="mt-2 text-2xl sm:text-4xl text-black-400 font-medium lg:leading-9">
                  Lorem ipsum dolor sit amet
                </h2>
                <p className="text-sm sm:text-base mt-4 text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Link
                  href="/contato"
                  className="text-sm sm:text-base linkButton self-center lg:self-start my-4"
                >
                  Lorem Ipsum
                </Link>
              </div>
              <Image
                src="/banner-woman.webp"
                alt="Lorem ipsum"
                width={345}
                height={362}
                className=" mx-auto col-span-2 self-end"
              />
            </div>
          </section>
          <section className="order-1 lg:order-2 mt-16 lg:my-20">
            <div className="flex flex-col container items-center lg:items-stretch">
              <div className="text-center lg:text-start flex items-center">
                <div className="max-w-3xl mx-auto mb-14 lg:ml-0">
                  <span className="mt-4 text-green-500 font-medium">Lorem Ipsum</span>
                  <h2 className="mt-2 text-2xl sm:text-4xl text-black-400 font-medium">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className="text-sm sm:text-base mt-4 text-gray-300  lg:leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <Link href="/blog" className="hidden lg:block button ml-auto">
                  Lorem Ipsum
                </Link>
              </div>
              <div className="container lg:px-0">
                <CardBlogCarousel blogData={blogData} />
              </div>

              <Link href="/blog" className="lg:hidden button mt-5 ">
                Lorem Ipsum
              </Link>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default PageVistoPortugues;

export async function getStaticProps() {
  const { getAllPostsByType } = await useServiceQuery();
  const blogData = await getAllPostsByType("portugal");

  if (!blogData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogData },
  };
}
