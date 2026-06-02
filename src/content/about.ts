import projectData from "./projects.ts";

const startYear = 2022;
const yearsExp = new Date().getFullYear() - startYear;

export default {
  title: "Ringkasan Profesional",
  description: `Fullstack Developer dengan lebih dari ${yearsExp} tahun pengalaman membangun aplikasi web modern menggunakan Laravel + Inertia.js + React. Saat ini aktif mengembangkan sistem internal untuk perusahaan kimia dan digital agency. Mahir dalam Next.js, Supabase, Docker, serta memanfaatkan AI Agents untuk meningkatkan produktivitas coding hingga 40%. Fokus menghasilkan solusi yang scalable, user-friendly, dan berdampak nyata terhadap efisiensi bisnis.`,
  stats: [
    { value: projectData.length, label: "Proyek Selesai" },
    { value: "100%", label: "Commitment" },
  ],
};
