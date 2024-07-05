import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

function page() {
  return (
    <div className="h-screen w-full flex justify-center  bg-zinc-800">
      <form className="mt-36 w-full max-w-3xl ">
        <div className="text-center text-3xl font-bold">
          <h1>Contect Us</h1>
        </div>
        <div className="flex justify-around mt-14">
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-lg">Your Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-3">
              <div className="label">
                <span className="label-text text-lg">Mail</span>
              </div>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-3">
              <div className="label">
                <span className="label-text text-lg">Phone</span>
              </div>
              <input
                type="tel"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                pattern="[0-9]{10}"
              />
            </label>
          </div>
          <div className="h-full">
            <label className="form-control w-full max-w-xs mt-3">
              <div className="label">
                <span className="label-text text-lg">Message</span>
              </div>
              <textarea className="textarea h-36" placeholder="Write the Message"></textarea>
            </label>
          </div>
        </div>
        <div className="flex justify-center w-full mt-14">
          <button className="btn btn-error w-48">Subit Form</button>
        </div>
      </form>
      <BackgroundBeams/>
    </div>
  );
}

export default page;
