// src/data/skills.js
import {
  SiLaravel,
  SiInertia,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiFigma,
  SiDocker,
  SiLinux,
  SiGit,
  SiCodeigniter,
  SiLivewire,
  SiAstro,
  SiNginx,
  SiApache,
  SiBootstrap,
  SiJquery,
  SiFilament,
} from "react-icons/si";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa";

export const skillsData = {
  mainFocus: {
    label: "Main Focus",
    title: "Laravel & Inertia.js",
    desc: "Pengembangan SPA modern tanpa kompleksitas API yang berlebihan.",
    tags: ["PHP 8.x", "MySQL"],
    Icon: SiLaravel, // Logo Asli Laravel
  },
  frontend: [
    { name: "ReactJs", Icon: SiReact, hover: "hover:text-blue-600" },
    { name: "Vuejs", Icon: SiVuedotjs, hover: "hover:text-blue-600" },
    { name: "AstroJS", Icon: SiAstro, hover: "hover:text-blue-600" },
    { name: "jQuery", Icon: SiJquery, hover: "hover:text-blue-600" },
    { name: "Bootstrap", Icon: SiBootstrap, hover: "hover:text-blue-600" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, hover: "hover:text-blue-600" },
  ],
  design: [
    {
      name: "Filament",
      Icon: SiFilament,
      sizeIcon: 52,
      bg: "bg-yellow-50 dark:bg-yellow-900/10",
      border: "border-yellow-100 dark:border-yellow-500/20",
      text: "text-yellow-900 dark:text-yellow-300",
      hover: "hover:border-[#A259FF]",
    },
    {
      name: "CodeIgniter",
      Icon: SiCodeigniter,
      sizeIcon: 24,
      bg: "bg-red-50 dark:bg-red-900/10",
      border: "border-red-100 dark:border-red-500/20",
      text: "text-red-900 dark:text-red-300",
      hover: "hover:border-red-400",
    },
  ],
  ops: [
    { name: "Linux Server", Icon: SiLinux, hover: "hover:text-blue-600" },
    { name: "Nginx", Icon: SiNginx, hover: "hover:text-blue-600" },
    { name: "Apache", Icon: SiApache, hover: "hover:text-blue-600" },
    { name: "Docker", Icon: SiDocker, hover: "hover:text-blue-600" },
    { name: "Git", Icon: SiGit, hover: "hover:text-blue-600" },
  ],
  database: "Sqlite / MySQL",
};
