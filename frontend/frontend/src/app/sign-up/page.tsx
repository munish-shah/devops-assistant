import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="p-8">
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-black hover:bg-gray-800 text-white",
              card: "bg-gray-100",
            }
          }}
        />
      </div>
    </main>
  );
}