(function tiledWindowFix() {
	const ID = "tiled-window-fix";
	if (document.getElementById(ID)) return;

	const style = document.createElement("style");
	style.id = ID;
	style.textContent = `
		body {
			min-width: 0 !important;
			min-height: 0 !important;
		}

		.Root__now-playing-bar,
		.Root__globalNav {
			flex-shrink: 0 !important;
		}
	`;

	(document.head || document.documentElement).appendChild(style);
})();
