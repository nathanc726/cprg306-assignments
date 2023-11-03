"use client";
import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = () => {
    gitHubSignIn();
  };

  const handleSignOut = () => {
    firebaseSignOut();
  };

  return (
    <div className="min-h-screen">
      {user ? (
        <div className="m-4 min-h-screen">
          <h1 className="text-4xl font-bold mb-4">
           Shopping List🛒
          </h1>
          <p>Signed in as {user.displayName} ({user.email}).</p>
          <button className="hover:underline" onClick={handleSignOut}>Sign out</button>
          <br/>
          <Link className="hover:underline" href="/week8/shopping-list">Continue to your Shopping List</Link>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <div className=" bg-gray-800 border border-green-500 px-10 rounded-lg">
            <h1 className="text-4xl font-bold m-6 text-center">
            Shopping List🛒
            </h1>
            <div className="flex justify-center">
              <button
                className="text-xl m-4 p-2 rounded-lg bg-yellow-600 hover:bg-yellow-500 duration-400"
                onClick={handleSignIn}
              >
                Sign in with GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}