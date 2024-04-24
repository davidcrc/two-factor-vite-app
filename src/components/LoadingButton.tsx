import React from "react";
import { twMerge } from "tailwind-merge";
import Spinner from "./Spinner";

type LoadingButtonProps = {
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  onClick,
  textColor = "text-white",
  btnColor = "bg-ct-yellow-600",
  loading = false,
}) => {
  return (
    <button
      type="submit"
      className={twMerge(
        `w-full py-3 font-semibold rounded-lg outline-none border-none flex justify-center`,
        `${btnColor} ${loading && "bg-[#ccc]"}`
      )}
      onClick={onClick}
    >
      {loading ? (
        <div className="flex items-center gap-3">
          <Spinner />
          <span className="text-slate-500 inline-block">Loading...</span>
        </div>
      ) : (
        <span className={`${textColor}`}>{children}</span>
      )}
    </button>
  );
};
