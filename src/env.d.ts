/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly VERCEL_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
