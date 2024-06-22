import React from "react";

const page = () => {
  return (
    <section className="h-full p-4 flex flex-col  gap-y-5">
      <div className=" flexc-between  h-96 border ">
        <div className="size-10 bg-red-400">1123</div>
        <div className="size-10 bg-green-400">2123</div>
        <div className="size-10 bg-indigo-400">3123</div>
        <div className="size-10 bg-purple-400">4123</div>
      </div>
      <div className=" flex flex-col border  w-full justify-end p-4 items-end 60 ">
        <div className="size-10 bg-red-400">1123</div>
        <div className="size-10 bg-green-400">2123</div>
        <div className="size-10 bg-indigo-400">3123</div>
        <div className="size-10 bg-purple-400">4123</div>
      </div>
      <div className=" flex flex-col border  w-full justify-end p-4 items-end h-60 ">
        <div className="size-10 bg-red-400">1123</div>
        <div className="size-10 bg-green-400">2123</div>
        <div className="size-10 bg-indigo-400">3123</div>
        <div className="size-10 bg-purple-400">4123</div>
      </div>
    </section>
  );
};

export default page;
