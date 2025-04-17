// src/lib/util.ts

// 检查是否为空（null、undefined、空字符串）
export const isEmpty = (value: any): boolean =>
    value === null || value === undefined || value === '';
  
  // 简单格式化日期
  export const formatDate = (date: string | Date, locale = 'zh-CN'): string => {
    try {
      return new Date(date).toLocaleDateString(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    } catch {
      return '';
    }
  };
  
  // 字符串首字母大写
  export const capitalize = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);
  
  // 生成随机字符串
  export const randomString = (length = 8): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length })
      .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
      .join('');
  };
  
  // 防抖函数
  export function debounce<T extends (...args: any[]) => void>(func: T, wait = 300) {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }
  
  // 节流函数
  export function throttle<T extends (...args: any[]) => void>(func: T, wait = 300) {
    let last = 0;
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - last > wait) {
        last = now;
        func(...args);
      }
    };
  }
  
  // 深拷贝对象
  export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
  
  // 省略字符串（如文章摘要）
  export const truncate = (str: string, maxLength = 100): string =>
    str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
  
  // 解析 URL 查询参数为对象
  export const parseQueryParams = (queryString: string): Record<string, string> => {
    return Object.fromEntries(new URLSearchParams(queryString));
  };
  