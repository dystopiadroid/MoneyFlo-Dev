"use client";

import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/income",
        })
      }
      className="ml-5 rounded-full bg-primary-400"
    >
      <span className="font-bold text-google">Log in with Google</span>
    </Button>
  );
}
