import Image from "next/image";
import { FunctionComponent } from "react";

const WEBSITE_NAME = process.env.NEXT_PUBLIC_WEBSITE_NAME;

const WebsiteHeader: FunctionComponent = () => {
  return (
    <header className="flex justify-between items-center h-[76px] mb-14 border-b border-[#cad1dd]">
      <div className="container">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="inline-block leading-none relative">
          <Image src="/logo.png" alt="Site logo" width={48} height={48} />
          <span className="absolute top-0 right-0 bottom-0 left-0 inline-block overflow-hidden text-indent-full whitespace-nowrap">
            {WEBSITE_NAME}
          </span>
        </a>
      </div>
    </header>
  );
};

export default WebsiteHeader;
