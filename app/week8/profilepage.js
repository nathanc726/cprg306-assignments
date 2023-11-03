"use client";
import Link from 'next/link';
import { useUserAuth } from "../_utils/auth-context";

export default function ProfilePage() {
    const { user, firebaseSignOut } = useUserAuth();

    const handleSignOut = async () => {
        await firebaseSignOut();
    };

    return (
        <main>
            <div>
                <h1 className="text-4xl ml-4 mt-4 font-bold">Shopping List🛒</h1>
            </div>
            <div className="ml-4 mt-2">
                {user ? (
                    <div>
                        <p>Signed in as {user.displayName} ({user.email}).</p>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <p>Please log in to continue.</p>
                )}
            </div>
            <div className="ml-4 mt-2">
                <Link href="/shopping-list" className="text-blue-500 hover:underline">
                    Continue to your Shopping List
                </Link>
            </div>
        </main>
    );
}
