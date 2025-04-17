// src/lib/api.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE || 'https://api.example.com';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions {
  method?: RequestMethod;
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string | number>;
  noAuth?: boolean;
}

function buildURL(path: string, params?: Record<string, string | number>): string {
  const url = new URL(BASE_URL + path);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }
  return url.toString();
}

export async function api<T = any>(
  path: string,
  { method = 'GET', headers = {}, body, params, noAuth }: RequestOptions = {}
): Promise<T> {
  const url = buildURL(path, params);

  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // 示例：如果有认证逻辑，可以在这里加 token
  if (!noAuth) {
    const token = ''; // 可从 cookie/localStorage 获取
    if (token) defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : undefined,
    next: { revalidate: 0 }, // 强制无缓存（可选）
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || `Request failed with ${res.status}`);
  }

  return res.json();
}
