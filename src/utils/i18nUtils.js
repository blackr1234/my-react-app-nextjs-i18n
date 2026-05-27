import messagesMap from "@/i18n";

function get(obj, path) {
	return path.split(".").reduce((o, k) => o?.[k], obj);
}

export function i18n(locale, key) {
	console.log(get(messagesMap[locale], key));

	const value = get(messagesMap[locale], key) ?? get(messagesMap["en-US"], key) ?? key;
	return value;
}
