import Image from "next/image";
import React from "react";
import heroImage from "@/public/images/hero-image.jpg";
import Button from "@/components/Button";
const Hero = () => {
  return (
    <section>
      <div className=" container  !max-w-full">
        <div className="flex flex-col mt-30">
          <h1 className="text-4xl md:text-6xl">
            Crafting digital experiences through clean code, creative design,
            and modern web technologies.
          </h1>
          <div className="flex flex-col gap-4 mt-10 items-start">
            <Button
              variant="secondary"
              iconAfter={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                  />
                </svg>
              }
            >
              View my work
            </Button>
            <Button variant="text">Let&apos;s Talk</Button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Image src={heroImage} alt="my portrait" />
      </div>
    </section>
  );
};

export default Hero;
