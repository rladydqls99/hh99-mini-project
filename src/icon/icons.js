import * as React from "react";

export const SignupIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100px"
    height="100px"
    fill="#4F709C"
    viewBox="0 0 20 20"
  >
    <path d="M9.467 0c3.184 0 5.765 2.566 5.765 5.732a5.706 5.706 0 0 1-2.02 4.358c.27.134.516.268.738.403.478.29.974.65 1.49 1.079a.685.685 0 0 1 .086.969.694.694 0 0 1-.975.086 11.05 11.05 0 0 0-1.322-.96 11.403 11.403 0 0 0-1.405-.703c-.72.322-1.518.5-2.357.5a5.767 5.767 0 0 1-2.58-.605l-.042.02c-1.95.756-3.373 1.874-4.292 3.358-.922 1.489-1.299 3.153-1.13 5.014a.689.689 0 0 1-.628.746.69.69 0 0 1-.75-.623c-.195-2.152.249-4.113 1.33-5.858.95-1.536 2.347-2.73 4.174-3.582a5.694 5.694 0 0 1-1.846-4.202C3.703 2.566 6.283 0 9.467 0Zm7.401 12.693c.38 0 .688.31.688.691v1.752h1.752a.69.69 0 0 1 .692.689.69.69 0 0 1-.692.687h-1.752v1.753a.69.69 0 0 1-.688.691.69.69 0 0 1-.688-.691v-1.753h-1.752a.69.69 0 0 1-.692-.687c0-.38.31-.688.692-.688l1.752-.001v-1.752a.69.69 0 0 1 .688-.691Zm-7.4-11.317c-2.42 0-4.382 1.95-4.382 4.356 0 2.406 1.962 4.357 4.381 4.357 2.42 0 4.381-1.95 4.381-4.357 0-2.406-1.961-4.356-4.38-4.356Z" />
  </svg>
);

export const LoginIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Icons"
    width="100px"
    height="100px"
    fill="#4F709C"
    viewBox="0 0 32 32"
  >
    <g id="SVGRepo_iconCarrier">
      <style>
        {
          ".st0{fill:none;stroke:#4f709c;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
        }
      </style>
      <circle cx={16} cy={16} r={14} className="st0" />
      <circle cx={16} cy={13} r={5} className="st0" />
      <path d="M5.4 25.1c1.8-4.1 5.8-7 10.6-7s8.9 2.9 10.6 7" className="st0" />
    </g>
  </svg>
);

export const MineSweeper = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50px"
    height="50px"
    fill="#4F709C"
    viewBox="0 0 48 48"
  >
    <g id="SVGRepo_iconCarrier">
      <defs>
        <style>
          {
            ".b{fill:none;stroke:#4f709c;stroke-linecap:round;stroke-linejoin:round}"
          }
        </style>
      </defs>
      <path
        d="M15.24 22.65a2.2 2.2 0 1 1 2.19-2.19 2.19 2.19 0 0 1-2.19 2.19ZM21 18.89a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z"
        style={{
          strokeMiterlimit: 10,
          fill: "none",
          stroke: "#4f709c",
        }}
      />
      <circle cx={24.01} cy={24} r={15.73} className="b" />
      <path
        d="M24 2.5v5.77M45.51 23.98h-5.76M24.03 45.5v-5.77M2.51 24.02h5.77M35.14 12.88l2.04-2.04M35.14 35.12l2.04 2.04M12.89 35.12l-2.04 2.04M12.89 12.88l-2.04-2.04"
        className="b"
      />
    </g>
  </svg>
);

export const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    fill="none"
    stroke="#4F709C"
    viewBox="0 0 24 24"
  >
    <g fill="#4F709C">
      <path d="M8.004 9.418a1 1 0 1 1 1.414-1.414l2.588 2.588 2.585-2.585a1 1 0 1 1 1.414 1.414l-2.585 2.585 2.584 2.584a1 1 0 0 1-1.414 1.414l-2.584-2.584-2.585 2.585a1 1 0 0 1-1.414-1.414l2.585-2.585-2.588-2.588Z" />
      <path
        fillRule="evenodd"
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM3.007 12a8.993 8.993 0 1 0 17.986 0 8.993 8.993 0 0 0-17.986 0Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

export const Magnifier = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="m31.707 30.282-9.717-9.776a12.45 12.45 0 0 0 2.902-8.007c0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5a12.45 12.45 0 0 0 8.197-3.067l9.703 9.764a1.001 1.001 0 0 0 1.415-1.415zm-19.314-7.266c-5.808 0-10.517-4.709-10.517-10.517S6.584 1.982 12.393 1.982c5.808 0 10.516 4.708 10.516 10.517S18.2 23.016 12.392 23.016z" />
  </svg>
);

export const ThreeDot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={20}
    height={20}
    fill="#4f709c"
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      fill="none"
      stroke="#4f709c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <circle cx={16} cy={16} r={2} />
      <circle cx={16} cy={26} r={2} />
      <circle cx={16} cy={6} r={2} />
    </g>
  </svg>
);

export const DoSave = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={30}
    height={30}
    fill="#4f709c"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19.3 5.3 9 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 11-11-1.4-1.4z" />
    <path
      d="M0 0h24v24H0z"
      style={{
        fill: "none",
      }}
    />
  </svg>
);
