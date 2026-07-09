import Navbar from "../../../shared/components/Navbar/Navbar";
import React from 'react'

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="flex h-[80vh] items-center justify-center">
          <h1 className="text-6xl font-bold">
            Welcome to WorkSphare
          </h1>
        </section>
      </main>
    </>
  );
};

export default LandingPage;