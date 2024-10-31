"use client";
//hihihi
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

import { Loader, Loader2, LogOut, User, User2 } from "lucide-react";
import { Button } from "../components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";

import InteractiveLink from "./InteractiveLink";
import { buttonVariants } from "../components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { AuthButton } from "../components/AuthButton";
//randomhihih
//some random push to test
export default function Component() {
  const { data: session, status } = useSession();

  const handleAuth = () => {
    if (session) signOut();
    else signIn("azure-ad");
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="container mx-auto">
        <header className="flex flex-wrap items-center justify-between py-4 pb-10">
          <div className="flex items-center space-x-4">
            <img
              alt="DDD logo"
              className="h-10 object-contain"
              src="/dlogo.png"
            />
            <h1 className="text-xl font-bold">Bionic Diamond</h1>
          </div>
          {status === "loading" ? (
            <Loader2 className="animate-spin" />
          ) : status === "authenticated" ? (
            <DropdownMenu className="relative">
              <DropdownMenuTrigger asChild>
                <Button
                  className="select-none flex items-center bg-white text-black border-2 border-gray-500 h-12 hover:bg-gray-200"
                  buttonVariants="default"
                >
                  <span>{session?.user?.email}</span>
                  <User2 className="h-8 w-8 m-2 border-2 border-black p-1 rounded-full" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="relative w-40 left-14">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>{session?.user?.name}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <AuthButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div
              className="bg-black flex items-center justify-center cursor-pointer rounded w-[100px] px-5 py-2 h-10 text-white"
              onClick={handleAuth}
            >
              {session ? <>Sign&nbsp;Out</> : <>Sign&nbsp;In</>}
            </div>
          )}
        </header>
        <main>
          <section className="mt-12 text-center">
            <h2 className="text-2xl font-bold">
              Unleash the power of AI to boost creativity and efficiency in your
              workflow
            </h2>
            <Link href={"/community"} target="_blank">
              <div className="inline-flex items-center justify-center rounded-full bg-black px-6 py-2 text-sm font-medium text-white mt-12">
                See what others are making ⚡️
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </section>
          <section className="mt-12 md:flex md:space-x-6 md:justify-center md:items-center">
            <div className="md:w-1/3 text-center">
              <img
                alt="Engage with Text"
                className="mx-auto h-32 w-full object-cover md:h-auto rounded-lg"
                src="/img1.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />
              <h3 className="mt-6 text-xl font-semibold">Engage with Text</h3>
              <p className="mt-2 text-gray-600">
                Tap into the world of conversational AI. Whether it's crafting
                responses, generating content, or digging into data, select from
                our top-tier models including GPT-4, GPT-3.5, Claude, Gemini,
                and Llama.
              </p>
              <AlertDialog>
                {!session ? (
                  <div className="flex justify-center mt-4">
                    <AlertDialogTrigger asChild>
                      <button className="bg-black text-white w-12 h-12 rounded-full flex justify-center items-center text-2xl font-bold focus:outline-none hover:bg-gray-800">
                        +
                      </button>
                    </AlertDialogTrigger>
                  </div>
                ) : (
                  <div className="flex justify-center mt-4">
                    <Link href="https://gen.bionicdiamond.com/">
                      <button className="bg-black text-white w-12 h-12 rounded-full flex justify-center items-center text-2xl font-bold focus:outline-none hover:bg-gray-800">
                        +
                      </button>
                    </Link>
                  </div>
                )}

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Please Sign In</AlertDialogTitle>
                    <AlertDialogDescription>
                      You need to sign in to use this feature. Please sign in to
                      continue.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <AuthButton />
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            <div className="mt-12 md:mt-0 md:w-1/3 text-center">
              <img
                alt="Create with GenArt"
                className="mx-auto h-32 w-full object-cover md:h-auto rounded-lg"
                src="/img2.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />
              <h3 className="mt-6 text-xl font-semibold">Create with GenArt</h3>
              <p className="mt-2 text-gray-600">
                Bring your visions to life with our cutting-edge image
                generation models. Dall-E 3, Stable Diffusion, and Mid Journey
                await to transform your textual descriptions into stunning
                visuals.
              </p>
              <AlertDialog>
                {!session ? (
                  <div className="flex justify-center mt-4">
                    <AlertDialogTrigger asChild>
                      <button className="bg-black text-white w-12 h-12 rounded-full flex justify-center items-center text-2xl font-bold focus:outline-none hover:bg-gray-800">
                        +
                      </button>
                    </AlertDialogTrigger>
                  </div>
                ) : (
                  <div className="flex justify-center mt-4">
                    <Link href="/Genart">
                      <button className="bg-black text-white w-12 h-12 rounded-full flex justify-center items-center text-2xl font-bold focus:outline-none hover:bg-gray-800">
                        +
                      </button>
                    </Link>
                  </div>
                )}
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Please Sign In</AlertDialogTitle>
                    <AlertDialogDescription>
                      You need to sign in to use this feature. Please sign in to
                      continue.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <AuthButton />
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
