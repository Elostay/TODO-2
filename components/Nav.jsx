"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Todolist Logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <p className="logo_text">TodoBestie</p>
      </Link>

      {/*Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-task" className="black_btn">
            Create New Task
          </Link>

          <Link href="/profile">
            <Image
              src="/assets/images/user-default-photo.png"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
          </Link>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src="/assets/images/user-default-photo.png"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/create-task"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Task
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
