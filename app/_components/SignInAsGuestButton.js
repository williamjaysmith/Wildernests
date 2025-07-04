"use client";

import { signInAsGuest } from "../_lib/actions";

function SignInAsGuestButton() {
  return (
    <form action={signInAsGuest}>
      <button className="flex w-72 items-center justify-center gap-6 whitespace-nowrap bg-primary-900 py-3 text-lg font-medium sm:w-96">
        <span className="text-2xl">👉</span>
        <span>Continue as Guest</span>
      </button>
    </form>
  );
}

export default SignInAsGuestButton;
