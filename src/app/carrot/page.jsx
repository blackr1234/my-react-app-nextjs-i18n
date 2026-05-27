"use client";
import { i18n } from "@/utils/i18nUtils";
import { getLocaleFromPath } from "@/utils/LocaleUtils";
import { usePathname } from "next/navigation";

export default function CarrotPage() {
	const pathname = usePathname();
	const locale = getLocaleFromPath(pathname);

	return <h1>{i18n(locale, "carrotPage.text_1")} 🥕</h1>;
}
