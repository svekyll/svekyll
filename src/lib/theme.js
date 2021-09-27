function setTheme(theme) {
	const html = document.getElementsByTagName('html')[0];
	if (html) {
		html.setAttribute('data-theme', theme);
		console.log('Set theme', theme);
	} else {
        console.log('Cannot find html to add attribute');
    }
}

export { setTheme };
