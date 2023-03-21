import Link from "next/link";
import Image from "next/image";
import HeadingImage from "/public/images/image 25.jpg";

export default function Jigstack() {
  return (
    // <main className="bg-white text-black">
    <main className="">
      <Link
        href="/"
        className="fixed bg-[#ffffff00] top-0 left-[60px] border-none rounded-bl-[30px] rounded-br-[30px] z-[100]"
      >
        <svg
          width="87"
          height="32"
          viewBox="0 0 87 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1286_46)">
            <path
              d="M43.5 0H3C3.945 0 17.5 0.225 25.14 10.76C33.04 21.68 34.7 29 43.5 29C52.3 29 53.96 21.68 61.86 10.76C69.5 0.225 83.055 0 84 0H43.5Z"
              fill="white"
            />
            <path
              d="M43.5 0H3C3.945 0 17.5 0.225 25.14 10.76C33.04 21.68 34.7 29 43.5 29C52.3 29 53.96 21.68 61.86 10.76C69.5 0.225 83.055 0 84 0H43.5Z"
              fill="white"
            />
            <path
              d="M43.5 0H0C1.025 0 15.59 0.25 23.78 11.875C32.265 23.925 34.05 32 43.5 32C52.95 32 54.76 23.925 63.22 11.875C71.41 0.25 86 0 87 0H43.5Z"
              fill="white"
            />
            <g clipPath="url(#clip1_1286_46)">
              <path
                d="M48.5 11.5L39.5 20.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M39.5 11.5L48.5 20.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1286_46">
              <rect width="87" height="32" fill="white" />
            </clipPath>
            <clipPath id="clip1_1286_46">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(35 7)"
              />
            </clipPath>
          </defs>
        </svg>
      </Link>

      <section className="heading-img">
        <Image
          src={HeadingImage}
          alt="DAO"
          width={100}
          height={100}
          priority={true}
          className="h-[50vh] w-full object-cover"
        />
      </section>
    </main>
  );
}
