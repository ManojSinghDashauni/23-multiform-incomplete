import React from "react";

const BarCard = ({ plan, index, description, title, className = "" }) => {
  return (
    <label
      htmlFor={index}
      className={`${className} border-[1px] border-color-bule rounded-md flex justify-between items-center px-5 py-3 mb-4 cursor-pointer`}
    >
      <div className="flex items-center gap-4">
        <div className="relative w-5 h-5">
          <input
            //   checked="checked"
            className="checkbox"
            type="checkbox"
            name={index}
            id={index}
          />
          <div className="checkMark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
              viewBox="0 0 12 9"
            >
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                d="m1 4 3.433 3.433L10.866 1"
              />
            </svg>
          </div>
          {/* <span className="checkmark"></span> */}
        </div>
        <div>
          <p className="text">{title}</p>
          <p className="paragrap_1">{description}</p>
        </div>
      </div>
      <p className="text_1">{plan}</p>
    </label>
  );
};

export default BarCard;
