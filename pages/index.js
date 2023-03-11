import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ImageOne from "../public/images/Mask group.jpg";
import ImageTwo from "../public/images/Mask group (1).jpg";
import ImageThree from "../public/images/Mask group (2).jpg";
import ImageFour from "../public/images/Mask group (3).jpg";
import ImageSix from "../public/images/Mask group (4).jpg";

export default function Home() {
  return (
    <>
      <contain className="">
        <div className="max-w-[1440px] mx-auto px-[2rem] py-[1rem]">
          <Header />
          <main className="flex flex-col mt-16">
            <section
              className="flex flex-col justify-center items-center gap-8 my-64"
              id="section-1"
            >
              <h2 className="text-6xl font-thin px-52 text-center tracking-wider">
                Empowering business through <strong>cutting-edge</strong>{" "}
                technology
              </h2>
              {/* <button className="w-44 h-12 bg-[#FFBF00] rounded-full shadow-[2px_3px_0px_#F49D1A;] hover:scale-[1.02] duration-200"> */}
              <button className="w-44 h-12 bg-[#FFBF00] text-black rounded-full shadow-[2px_3px_0px_#F49D1A;] hover:scale-[1.02] duration-200">
                Get consultant
              </button>
            </section>
            <section className="flex justify-center items-center flex-col gap-8 mb-44">
              <div className="flex flex-col items-center gap-3">
                <span>
                  <svg
                    width="57"
                    height="43"
                    viewBox="0 0 57 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.3057 0.999998C48.7636 35.4038 0.999999 31.6767 0.999998 18.3915C0.999997 1 49.3057 13.9145 49.3057 41M49.3057 41L42.1504 35.4038M49.3057 41L55.791 36.523"
                      stroke="#FFC11F"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <h3 className="font-normal text-2xl">work we did</h3>
              </div>
              <div className="grid grid-cols-4 grid-rows-2 justify-center justify-items-center gap-3 gap-y-6">
                <div className="images col-span-1">
                  <Image
                    src={ImageOne}
                    alt=""
                    className="rounded-md"
                    width={262}
                    height={350}
                  />
                  <span className="firstText">MAD Metascientist</span>
                  <span className="secondText">NFT project to evolve</span>
                </div>
                <div className="images col-span-1">
                  <Image
                    src={ImageTwo}
                    alt=""
                    className="rounded-md"
                    width={250}
                    height={218}
                  />
                  <span className="firstText">Shuttermint</span>
                  <span className="secondText">NFT project to evolve</span>
                </div>
                <div className="images col-span-2">
                  <Image
                    src={ImageThree}
                    alt=""
                    className="rounded-md"
                    width={620}
                    height={348}
                  />
                  <span className="firstText">Jigstack DAO</span>
                  <span className="secondText">NFT project to evolve</span>
                </div>
                <div className="images col-span-2">
                  <Image
                    src={ImageFour}
                    alt=""
                    className="rounded-md"
                    width={620}
                    height={348}
                  />{" "}
                  <span className="firstText">Precog Finance</span>
                  <span className="secondText">NFT project to evolve</span>
                </div>
                <div className="images col-span-1">
                  <Image
                    src={ImageTwo}
                    alt=""
                    className="rounded-md"
                    width={250}
                    height={218}
                  />{" "}
                  <span className="firstText">Jigstack DAO</span>
                  <span className="secondText">NFT project to evolve</span>
                </div>
                <div className="images col-span-1">
                  <Image
                    src={ImageSix}
                    alt=""
                    className="rounded-md"
                    width={262}
                    height={350}
                  />{" "}
                  <span className="firstText">SchoolPeers</span>
                  <span className="secondText">NFT project to evolve</span>
                </div>
              </div>
            </section>
            <section className="flex flex-col justify-center gap-8 mb-44">
              <div className="flex flex-col items-center gap-3">
                {" "}
                <span>
                  <svg
                    width="57"
                    height="43"
                    viewBox="0 0 57 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.3057 0.999998C48.7636 35.4038 0.999999 31.6767 0.999998 18.3915C0.999997 1 49.3057 13.9145 49.3057 41M49.3057 41L42.1504 35.4038M49.3057 41L55.791 36.523"
                      stroke="#FFC11F"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h3 className="font-normal text-2xl">services</h3>
              </div>
              <div className="grid grid-rows-2 ">
                <div className="grid grid-cols-2 gap-6 border-t border-gray-500 p-3">
                  <div className="service">
                    <span>
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="4.5"
                          y1="0.0241699"
                          x2="4.5"
                          y2="9.02417"
                          stroke="#FFC11F"
                        />
                        <line
                          y1="4.52417"
                          x2="9"
                          y2="4.52417"
                          stroke="#FFC11F"
                        />
                      </svg>
                    </span>
                    <h4 className="firstText">Web & Mobile Design</h4>
                    <p className="secondText">
                      We specialize in creating intuitive and visually appealing
                      UI/UX for web and mobile. We offer a range of design
                      services, including prototyping, wireframing, and visual
                      design, to help bring your vision to life and create a
                      seamless experience for your users.
                    </p>
                  </div>
                  <div className="service">
                    <span>
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="4.5"
                          y1="0.0241699"
                          x2="4.5"
                          y2="9.02417"
                          stroke="#FFC11F"
                        />
                        <line
                          y1="4.52417"
                          x2="9"
                          y2="4.52417"
                          stroke="#FFC11F"
                        />
                      </svg>
                    </span>
                    <h4 className="firstText">Web Development</h4>
                    <p className="secondText">
                      We offer interactive web development services that are
                      tailored to meet the unique needs of our clients. Our team
                      is dedicated to creating engaging and user-friendly
                      websites tailored to our client&#39;s specific goals and
                      needs
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 border-y border-gray-500 p-3">
                  <div className="service">
                    <span>
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="4.5"
                          y1="0.0241699"
                          x2="4.5"
                          y2="9.02417"
                          stroke="#FFC11F"
                        />
                        <line
                          y1="4.52417"
                          x2="9"
                          y2="4.52417"
                          stroke="#FFC11F"
                        />
                      </svg>
                    </span>
                    <h4 className="firstText">
                      Blockchain, NFT & Crytocurrency
                    </h4>
                    <p className="secondText">
                      As a leading blockchain development agency, we&#39;re
                      dedicated to building innovative Web3 products that drive
                      real value for our clients. From concept to launch, we
                      provide full-stack development services to help you
                      realize the full potential of blockchain technology.
                    </p>
                  </div>
                  <div className="service">
                    <span>
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="4.5"
                          y1="0.0241699"
                          x2="4.5"
                          y2="9.02417"
                          stroke="#FFC11F"
                        />
                        <line
                          y1="4.52417"
                          x2="9"
                          y2="4.52417"
                          stroke="#FFC11F"
                        />
                      </svg>
                    </span>
                    <h4 className="firstText">Tokenomics</h4>
                    <p className="secondText">
                      As a leading blockchain development agency, we&#39;re
                      dedicated to building innovative Web3 products that drive
                      real value for our clients. From concept to launch, we
                      provide full-stack development services to help you
                      realize the full potential of blockchain technology.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-8 mb-44">
              <div className="flex flex-col items-center gap-3">
                {" "}
                <span>
                  <svg
                    width="57"
                    height="43"
                    viewBox="0 0 57 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.3057 0.999998C48.7636 35.4038 0.999999 31.6767 0.999998 18.3915C0.999997 1 49.3057 13.9145 49.3057 41M49.3057 41L42.1504 35.4038M49.3057 41L55.791 36.523"
                      stroke="#FFC11F"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h3 className="font-normal text-2xl">about us</h3>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <div className="w-64 h-64 bg-[#FFC11F]"></div>
                <div className="w-64 h-64 bg-[#FFC11F]"></div>
                <div className="w-64 h-64 bg-[#FFC11F]"></div>
                <div className="w-64 h-64 bg-[#FFC11F]"></div>
              </div>
            </section>
            <section className="flex flex-col justify-between items-center mb-44">
              <h2 className="font-thin text-3xl mb-3">
                <strong>Got a project?</strong> Let&#9;s get in touch
              </h2>
              <p className="font-thin text-base mb-2">design@eetpixel</p>
              <span>
                <svg
                  width="107"
                  height="17"
                  viewBox="0 0 107 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.83746C11.8423 2.83119 44.0161 -0.579469 85.9723 1.82805"
                    stroke="#FFC11F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24.5006 10.7151C32.2065 8.44499 55.2672 3.51458 85.8631 1.95357"
                    stroke="#FFC11F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24.7557 10.6738C35.1798 9.57612 65.9226 8.7332 105.501 14.1427"
                    stroke="#FFC11F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </section>
          </main>
          <Footer />
        </div>
      </contain>
    </>
  );
}
