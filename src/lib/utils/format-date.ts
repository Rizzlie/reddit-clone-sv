export function formatDate(date: Date | string) {
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;
	const dateTimeFormat = new Intl.DateTimeFormat('en-GB', options);

	return dateTimeFormat.format(typeof date === 'string' ? new Date(date) : date);
}
