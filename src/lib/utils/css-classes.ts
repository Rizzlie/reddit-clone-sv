const theme = {
	controls: {
		border: ['border', 'border-input', 'rounded-md'],
		focus: [
			'focus-visible:ring-ring',
			'ring-offset-background',
			'focus-visible:outline-none',
			'focus-visible:ring-2',
			'focus-visible:ring-offset-2'
		],
		placeholder: ['placeholder:text-muted-foreground'],
		spacing: ['px-3', 'py-2'],
		background: ['bg-white'],
		font: ['text-sm'],
		states: ['disabled:cursor-not-allowed', 'disabled:opacity-50'],
		size: ['w-full'],
		display: ['flex']
	}
};

type Theme = typeof theme;
type ThemeKey = keyof Theme;
type ThemeGroup = keyof Theme[ThemeKey];

export const getClasses = (type: ThemeKey) => {
	const selectedTheme: Theme[ThemeKey] = theme[type];

	const classesGroup: ThemeGroup[] = Object.keys(selectedTheme) as ThemeGroup[];

	return classesGroup.reduce((acc: string, curr: keyof Theme[ThemeKey]) => {
		const classes: string[] = selectedTheme[curr];

		return acc + ' ' + classes.join(' ');
	}, '');
};
