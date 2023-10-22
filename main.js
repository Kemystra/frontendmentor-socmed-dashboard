let themeToggleButton = document.getElementById("toggle-theme");

let isDarkMode = false;
themeToggleButton.onclick = () => {
	isDarkMode = !isDarkMode;

	if (isDarkMode) {
		document.body.className = "dark-theme-colors";
	}
	else {
		document.body.className = "light-theme-colors";
	}
}
