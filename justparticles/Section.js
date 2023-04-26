import Image from "next/image";

export default function Section() {
  return (
    <>
      <section className="heading-lay h-screen p-12 flex flex-row justify-between">
        <div className="flex flex-col justify-between">
          <div className="">
            {/* <Image
              src="/images/WU-white-logo2.png"
              alt="logo"
              width={264}
              height={44}
              className="w-auto h-auto"
              priority={true}
            /> */}
          </div>
          <div>10k assemble operation phoenix</div>
        </div>

        <div className="flex flex-col justify-between">
          <button className="border border-[#E1DB95] p-1.5">
            Connect Wallet
          </button>

          <div className="flex flex-row gap-4 items-center">
            <div className="text-xs sound-text">SOUND</div>

            <span>
              <svg
                width="40"
                height="1"
                viewBox="0 0 40 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="0.5"
                  x2="40"
                  y2="0.5"
                  stroke="white"
                  strokeOpacity="0.24"
                />
              </svg>
            </span>
            <div>{/* <BackgroundMusic /> */}</div>
          </div>
        </div>
      </section>

      <section className="h-screen w-full">
        <video className="back-video" autoPlay loop>
          <source src="/images/girls.webm" type="video" />
        </video>
      </section>
    </>
  );
}
