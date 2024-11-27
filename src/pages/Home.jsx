import React from "react";
import { NavLink, Outlet } from "react-router";

const sideApp = [
  { step: "Step 1", title: "Your info", link: "ParsonalInfo" },
  { step: "Step 2", title: "Select plan", link: "Plan" },
  { step: "Step 3", title: "Add-ons", link: "AddOns" },
  { step: "Step 4", title: "Summary", link: "Summary" },
];

const Home = () => {
  return (
    <div className=" flex bg-color-White p-4 rounded-xl w-[800px]">
      <div className="h-[550px] w-[250px] rounded-xl bg-cover bg-no-repeat bg-[url('../../public/images/bg-sidebar-desktop.svg')]">
        {sideApp.map((data, index) => {
          return (
            <div
              key={index}
              className="flex pt-6 px-8 text-color-White items-center"
            >
              <NavLink
                to={`/${data.link}`}
                className={({ isActive }) =>
                  isActive
                    ? "active bg-color-Light-blue text-color-Black size-5 p-4 rounded-[100%] flex justify-center items-center"
                    : " bg-transparent p-4 size-6 rounded-[100%] border-2 flex justify-center items-center"
                }
              >
                {index + 1}
              </NavLink>
              <div className="ml-4 flex flex-col">
                <p className="font-normal">{data.step}</p>
                <p className="text-base uppercase font-medium">{data.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-10 px-12 flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
