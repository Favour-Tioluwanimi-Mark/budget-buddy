"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={"/budgetbuddy.jpg"} alt="logo" width={40} height={25} />
        <span className="text-[#FFC0CB] font-bold text-xl">BudgetBuddy</span>
      </div>
      {isSignedIn ? (
        <div className="flex gap-3  items-center">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link href={"/sign-in"}>
          <Button className="rounded-full">Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
