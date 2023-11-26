import React from "react";

const Loader = () => {
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen ">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="animate-spin text-indigo-600 h-[40px] w-[40px]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="currentColor"
          ></path>
          <path
            d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
