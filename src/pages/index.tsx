// Components
import { Carousel } from "@/components/Carousel/Carousel";
import { TextInput } from "@/components/InputText/InputText";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";
import { CardBlogCarousel } from "@/components/CardBlogCarousel/CardBlog";
import { NextPage } from "next";

// Hooks
import { ChangeEvent, useState } from "react";

// Utilities
import { emailRegex, initState, ServiceData } from "@/Utilities/Variables";
import { useServiceMutation, useServiceQuery } from "@/Utilities/Services";

// Interfaces
import { FormValue, Post } from "@/interfaces";
interface HomeProps {
  blogData: Post[];
}

const Home: NextPage<HomeProps> = ({ blogData }) => {
  const [subscribeValue, setSubscribeValue] = useState("");
  const [values, setValues] = useState<FormValue>(initState);

  const toast = useToast();
  const { subscribeEmail, formContact, loading } = useServiceMutation();

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offset = sectionTop + scrollTop - 125; // 125 pixels de espaço acima da seção
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  async function handleSubscribeSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (subscribeValue !== "" && emailRegex.test(subscribeValue)) {
      await subscribeEmail(subscribeValue);
      setSubscribeValue("");
    } else {
      toast({
        title: "Erro",
        position: "top",
        description: "Preencha o campo de e-mail.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  async function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (
      values.name !== "" &&
      values.email !== "" &&
      emailRegex.test(values.email)
    ) {
      await formContact(
        values.name,
        values.email,
        values.cellPhone,
        values.message
      );
      setValues(initState);
    } else {
      toast({
        title: "Erro",
        position: "top",
        description: "Preencha os campos requeridos corretamente",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  function handleFormChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubscribeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSubscribeValue(event.target.value);
  }
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full min-h-screen py-0 ">
        <section className=" text-center lg:text-start items-center bg-green-400  pt-16 lg:pt-24">
          <div className=" container grid grid-cols-1 lg:grid-flow-col lg:gap-x-16 ">
            <div className=" py-5 lg:py-16  flex flex-col ">
              <Image
                src="/Home/bandeiras.webp"
                alt="Bandeiras de portugal e italia"
                width={75}
                height={35}
                className="mx-auto lg:ml-0"
                priority
              />
              <h1 className="mt-4 text-3xl font-medium  lg:text-5xl text-black-500">
                Lorem Ipsum Dolor Sit Amet
              </h1>
              <p className="mx-auto mt-4 lg:mt-3 text-gray-300 text-sm lg:text-xl max-w-md lg:ml-0  lg:leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                href="#"
                className=" mt-4 lg:mt-11 linkButton text-base  max-w-[209px] mx-auto lg:ml-0"
                onClick={(event) => scrollToSection(event, "servicos")}
              >
                Solicitar Cotação
              </Link>
            </div>
            <Image
              src="/Home/banner.webp"
              alt="Imagem banner principal"
              width={426}
              height={418}
              className="self-end mx-full ml-2 pt-10 lg:pt-0"
              priority
            />
          </div>
        </section>
        <section className="lg:container">
          <div className="text-center lg:text-start container grid grid-cols-1 lg:grid-cols-2 items-center gap-16 mt-12 lg:my-16 box-white">
            <Image
              src="/Home/quemSomos.webp"
              alt="imagem de uma mulher sorrindo"
              width={345}
              height={362}
              className="order-2 lg:order-1 mx-auto"
              priority
            />

            <div className="order-1 lg:order-2 flex flex-col">
              <span className="mt-4 text-green-500 font-medium">
                Quem Somos
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl text-black-400 font-medium">
                Lorem Ipsum Dolor Sit Amet
              </h2>
              <p className="text-sm sm:text-base mt-4 text-gray-300 lg:leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                href="#"
                className="text-sm sm:text-base linkButton self-center lg:self-start my-4"
              >
                Solicitar Atendimento
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-12 lg:mt-28" id="servicos">
          <div className="text-center container">
            <span className="text-green-500 font-medium">Serviços</span>
            <h2 className="mt-2  text-2xl sm:text-4xl text-black-400 font-medium">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p className="text-sm sm:text-base mt-4 text-gray-300 mx-auto max-w-xl  lg:leading-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mt-6 py-8 box-green overflow-hidden">
            <div className="container">
              <Carousel serviceData={ServiceData} />
            </div>
          </div>
        </section>
        <section className="lg:container">
          <div className="container my-10 text-center text-gray-500 bg-white-400 lg:bg-subscribeLg bg-cover py-14 lg:my-20">
            <span className="mt-7 text-green-500 font-medium">Newsletter</span>
            <h2 className="mt-2 text-2xl sm:text-4xl text-black-400 font-medium">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p className="text-sm sm:text-base mt-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <form
              onSubmit={handleSubscribeSubmit}
              className="flex flex-col items-center lg:items-baseline gap-5  mt-8 justify-center max-w-md mx-auto lg:flex-row"
            >
              <div className="w-64">
                <TextInput.Root>
                  <TextInput.Input
                    type="email"
                    value={subscribeValue}
                    placeholder="Digite o seu melhor E-mail"
                    onChange={handleSubscribeChange}
                  />
                </TextInput.Root>
              </div>

              <button
                type="submit"
                className="linkButton text-sm lg:text-base mt-4"
                disabled={loading}
              >
                Cadastrar
              </button>
            </form>
          </div>
        </section>
        <section className="my-12 lg:my-28">
          <div className="flex flex-col container items-center lg:items-stretch">
            <div className="text-center lg:text-start flex items-center">
              <div className="max-w-3xl mx-auto mb-14 lg:ml-0">
                <span className="mt-4 text-green-500 font-medium">Blog</span>
                <h2 className="mt-2 text-2xl sm:text-4xl text-black-400 font-medium">
                  Lorem Ipsum Dolor Sit Amet
                </h2>
                <p className="text-sm sm:text-base mt-4 text-gray-300  lg:leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <Link href="/blog" className="hidden lg:block button ml-auto">
                Ver Blog
              </Link>
            </div>
            <div className="container lg:px-0">
              <CardBlogCarousel blogData={blogData} />
            </div>

            <Link href="/blog" className="lg:hidden button mt-5 ">
              Ver Blog
            </Link>
          </div>
        </section>
        <section className="lg:container">
          <div className="my-0 lg:my-24  container bg-green-400  flex justify-center items-center ">
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-x-24">
              <div className="lg:max-w-md py-16 text-center lg:text-start  px-5 lg:px-0">
                <span className="mt-4 text-green-500 font-medium">Contato</span>
                <h2 className="mt-2 text-2xl sm:text-4xl text-black-400 font-medium">
                  Lorem Ipsum Dolor Sit Amet
                </h2>
                <p className="text-sm sm:text-base mt-4 text-gray-500 lg:leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <form
                  onSubmit={handleFormSubmit}
                  className="mt-9 flex flex-col gap-5 lg:gap-7"
                >
                  <input
                    className="input"
                    type="text"
                    placeholder="Nome *"
                    value={values.name}
                    name="name"
                    onChange={handleFormChange}
                    required
                  />

                  <div className="flex items-center gap-5 flex-wrap">
                    <input
                      className="input flex-grow"
                      type="email"
                      placeholder="Email *"
                      name="email"
                      value={values.email}
                      onChange={handleFormChange}
                      required
                    />
                    <input
                      className="input flex-grow"
                      type="tel"
                      placeholder="Telefone"
                      name="cellPhone"
                      value={values.cellPhone}
                      onChange={handleFormChange}
                    />
                  </div>
                  <textarea
                    className="input h-24"
                    placeholder="Mensagem"
                    name="message"
                    value={values.message}
                    onChange={handleFormChange}
                  />
                  <button
                    type="submit"
                    className="linkButton mt-4"
                    disabled={loading}
                  >
                    Enviar
                  </button>
                </form>
              </div>
              <Image
                alt="mulher de camisa listrada sorridente"
                src="/Home/contato.webp"
                width={406}
                height={596}
                className="hidden lg:block self-end"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const { getFirstFourPosts } = await useServiceQuery();
  const blogData = await getFirstFourPosts();

  if (!blogData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogData },
  };
}
