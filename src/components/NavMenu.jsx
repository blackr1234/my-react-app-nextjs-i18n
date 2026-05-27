"use client";
import Link from "next/link";
import { getLocaleFromPath, prefixWithLocale } from "@/utils/LocaleUtils";
import { usePathname, useRouter } from "next/navigation";
import { i18n } from "@/utils/i18nUtils";

const locales = ["en-US", "zh-HK"];

export default function NavMenu() {
	const pathname = usePathname();
	const locale = getLocaleFromPath(pathname);
	const router = useRouter();

	const switchLocale = (newLocale) => {
		const segments = pathname.split("/").filter(Boolean);

		if (locales.includes(segments[0])) {
			segments[0] = newLocale;
		} else {
			segments.unshift(newLocale);
		}

		const newPath = "/" + segments.join("/");
		router.push(newPath);
	};

	// helper to style active links
	const tileStyle = (href) => ({
		display: "flex",
		alignItems: "center", // ✅ vertically center text
		justifyContent: "center", // ✅ horizontally center text
		width: "120px",
		height: "50px",
		padding: "12px 20px",
		borderRadius: "8px",
		backgroundColor: pathname === href ? "#444" : "#333",
		color: pathname === href ? "yellow" : "#fff",
		textDecoration: "none",
		fontWeight: "bold",
	});

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: "1rem",
				backgroundColor: "#222",
				padding: "12px 24px",
				borderRadius: "8px",
				boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
			}}
		>
			<Link href={prefixWithLocale("/", locale)} style={tileStyle(prefixWithLocale("/", locale))}>
				{i18n(locale, "navMenu.home")}
			</Link>

			<Link href={prefixWithLocale("/apple", locale)} style={tileStyle(prefixWithLocale("/apple", locale))}>
				{i18n(locale, "navMenu.apple")}
			</Link>

			<Link href={prefixWithLocale("/banana", locale)} style={tileStyle(prefixWithLocale("/banana", locale))}>
				{i18n(locale, "navMenu.banana")}
			</Link>

			<Link href={prefixWithLocale("/carrot", locale)} style={tileStyle(prefixWithLocale("/carrot", locale))}>
				{i18n(locale, "navMenu.carrot")}
			</Link>

			<select
				value={locale}
				style={{
					marginLeft: "auto",
					backgroundColor: "#333",
					color: "#fff",
					border: "1px solid #555",
					borderRadius: "6px",
					padding: "6px 12px",
					fontWeight: "bold",
					cursor: "pointer",
				}}
				onChange={(e) => {
					const locale = e.target.value;
					switchLocale(locale);
				}}
			>
				<option
					value="en-US"
					style={{
						fontWeight: locale === "en-US" ? "bold" : "normal",
						color: locale === "en-US" ? "yellow" : "#fff",
					}}
				>
					English
				</option>
				<option
					value="zh-HK"
					style={{
						fontWeight: locale === "zh-HK" ? "bold" : "normal",
						color: locale === "zh-HK" ? "yellow" : "#fff",
					}}
				>
					中文
				</option>
			</select>
		</div>
	);
}
