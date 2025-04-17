"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

// 定义支持的语言及显示标签
const locales = [
  { code: "zh", label: "中文" },
  { code: "en", label: "English" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 构建当前 URL（保留查询参数）
  const queryString = searchParams ? `?${searchParams.toString()}` : "";
  const currentPath = `${pathname}${queryString}`;

  // 获取当前语言：假设默认语言在 URL 前缀中
  // 如果使用 Next.js i18n，则 Link 的 locale 属性会自动处理

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Globe size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map(({ code, label }) => (
          <DropdownMenuItem key={code} asChild>
            <Link href={currentPath} locale={code} className="w-full">
              {label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
