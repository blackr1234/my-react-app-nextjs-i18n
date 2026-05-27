"use client";
import { i18n } from "@/utils/i18nUtils";
import { getLocaleFromPath, prefixWithLocale } from "@/utils/LocaleUtils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const COUNTDOWN_SECONDS = 3;

export default function HomePage() {
	const pathname = usePathname();
	const locale = getLocaleFromPath(pathname);
	const router = useRouter();
	const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);

	useEffect(() => {
		setCountdown(COUNTDOWN_SECONDS);

		const interval = setInterval(() => {
			setCountdown((prev) => prev - 1);
		}, 1000);

		const timer = setTimeout(() => {
			router.push(prefixWithLocale("/apple", locale));
		}, 3000);

		return () => {
			clearInterval(interval);
			clearTimeout(timer);
		};
	}, [router, locale]);

	return (
		<>
			<h1>{i18n(locale, "homePage.text_1")} 🏠</h1>

			<div style={{ padding: "1rem" }}></div>

			<h3>
				{i18n(locale, "homePage.redirect")} {countdown}
			</h3>
		</>
	);
}
