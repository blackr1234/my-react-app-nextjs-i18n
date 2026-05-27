const locales = ["en-US", "zh-HK"];
const defaultLocale = "en-US";

export function getLocaleFromPath(pathname) {
	const first = pathname.split("/").filter(Boolean)[0];
	return locales.includes(first) ? first : defaultLocale;
}

export function prefixWithLocale(href, locale) {
	if (!href) return `/${locale}`;
	return href === "/" ? `/${locale}` : `/${locale}${href}`;
}
