"use client";
import { Moon, Sun } from "@phosphor-icons/react";
export const ThemeToggle = () => {
  const changeTheme = (theme: string) => {
    const htmlThemed = window.document.getElementById("first-html");
    htmlThemed?.setAttribute("data-theme", theme);
  };
  return (
    <label
      htmlFor="ThemeToggle"
      className="relative h-8 w-14 cursor-pointer lg:hidden"
    >
      <input
        type="checkbox"
        id="ThemeToggle"
        className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
      />
      <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-800 transition-all peer-checked:start-6 peer-checked:text-amber-500">
        <Moon
          weight="fill"
          data-unchecked-icon
          className="h-4 w-4"
          onClick={() => changeTheme("winter")}
        />
        <Sun
          weight="fill"
          data-checked-icon
          className="hidden h-4 w-4"
          onClick={() => changeTheme("night")}
        />
      </span>
      <span className="absolute inset-0 rounded-full bg-slate-800 transition peer-checked:bg-slate-200" />
    </label>
  );
};
