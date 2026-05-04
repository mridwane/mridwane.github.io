export const API_CONFIG = {
  VERCEL: {
    BASE_URL: 'https://api.vercel.com/v6/projects',
    LIMIT: 12,
  },
} as const;

export const ROUTES = {
  HOME: '/',
  PROJECT: '/project',
  SHOWCASE: '/showcase',
} as const;

export const ANIMATION_CONFIG = {
  AOS: {
    ONCE: false,
    OFFSET: 100,
    DURATION: 1000,
    EASING: 'ease-out-cubic',
    MIRROR: false,
  },
} as const;