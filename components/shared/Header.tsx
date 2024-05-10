import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b bg-[#E0F3F3] z-20">
      <div className="wrapper flex-between">
        <div className="">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
