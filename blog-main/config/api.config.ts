export const API_URL = process.env.NEXT_PUBLIC_API_URL


export const getAuthUrl = (url: string) => `/api/auth/${url}`;
export const getLoginUrl = (url: string) => `/api/${url}`;
export const getBlogUrl = (url: string) => `/api/blog/${url}`;