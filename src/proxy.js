import { NextResponse } from "next/server";

const locales = ["en-US", "zh-HK"];

export function proxy(req) {
	const { pathname } = req.nextUrl;

	const segments = pathname.split("/").filter(Boolean);
	const first = segments[0];

	if (locales.includes(first)) {
		const url = req.nextUrl.clone();
		url.pathname = "/" + segments.slice(1).join("/");

		return NextResponse.rewrite(url);
	}

	return NextResponse.next();
}
