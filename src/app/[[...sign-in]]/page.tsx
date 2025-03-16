"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

const LoginPage = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="h-screen flex items-center justify-center bg-beproBackground">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2"
        >
          <h1 className="flex text-xl font-bold items-center gap-2 text-beproBlack">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            Bepro
          </h1>
          <h2 className="text-gray-600">sign in to your account</h2>

          <Clerk.GlobalError className="text-sm text-red-400" />
          <Clerk.Field
            name="identifier"
            className="flex flex-col gap-2 group/field relative"
          >
            <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-white px-2 font-mono text-xs/4 text-beproBlack before:absolute before:inset-0 before:-z-10 before:bg-white/50 group-focus-within/field:text-emerald-300 group-data-[invalid]/field:text-rose-400">
              username
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-beproBlack outline-none ring-1 ring-inset ring-white/20 hover:ring-white/30 focus:shadow-[0_0_6px_0] focus:shadow-emerald-500/20 focus:ring-[1.5px] focus:ring-emerald-300 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
            />
            <Clerk.FieldError className="text-sm text-red-400" />
          </Clerk.Field>
          {/* <Clerk.GlobalError className="block text-sm text-rose-400" /> */}
          {/* <Clerk.Field name="identifier" className="group/field relative">
            <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-white px-2 font-mono text-xs/4 text-beproBlack before:absolute before:inset-0 before:-z-10 before:bg-white/50 group-focus-within/field:text-emerald-300 group-data-[invalid]/field:text-rose-400">
              Email address
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-beproBlack outline-none ring-1 ring-inset ring-white/20 hover:ring-white/30 focus:shadow-[0_0_6px_0] focus:shadow-emerald-500/20 focus:ring-[1.5px] focus:ring-emerald-300 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
            />
            <Clerk.FieldError className="mt-2 block text-xs text-rose-400" />
          </Clerk.Field> */}
          <Clerk.Field name="password" className="group/field relative mt-5">
            <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-white px-2 font-mono text-xs/4 text-beproBlack before:absolute before:inset-0 before:-z-10 before:bg-white/50 group-focus-within/field:text-emerald-300 group-data-[invalid]/field:text-rose-400">
              Password
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-beproBlack outline-none ring-1 ring-inset ring-white/20 hover:ring-white/30 focus:shadow-[0_0_6px_0] focus:shadow-emerald-500/20 focus:ring-[1.5px] focus:ring-emerald-300 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
            />
            <Clerk.FieldError className="text-sm text-red-400" />
          </Clerk.Field>
          <SignIn.Action
            submit
            className="bg-blue-500 text-white rounded-md my-1 p-[10px]"
          >
            submit
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

export default LoginPage;
