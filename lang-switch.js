(function () {
    var languages = [
        { code: "en", flag: "🇬🇧", label: "English" },
        { code: "es", flag: "🇪🇸", label: "Español" },
        { code: "fr", flag: "🇫🇷", label: "Français" },
        { code: "de", flag: "🇩🇪", label: "Deutsch" },
        { code: "it", flag: "🇮🇹", label: "Italiano" },
        { code: "pt", flag: "🇧🇷", label: "Português" },
        { code: "ja", flag: "🇯🇵", label: "日本語" },
        { code: "ko", flag: "🇰🇷", label: "한국어" },
        { code: "zh-CN", flag: "🇨🇳", label: "中文" },
        { code: "ar", flag: "🇸🇦", label: "العربية" },
        { code: "hi", flag: "🇮🇳", label: "हिन्दी" },
        { code: "ru", flag: "🇷🇺", label: "Русский" },
        { code: "nl", flag: "🇳🇱", label: "Nederlands" },
        { code: "tr", flag: "🇹🇷", label: "Türkçe" },
        { code: "pl", flag: "🇵🇱", label: "Polski" }
    ];

    function buildSwitcher(container) {
        var label = document.createElement("span");
        label.textContent = "Translate:";
        container.appendChild(label);

        var currentUrl = window.location.href;
        languages.forEach(function (lang) {
            var link = document.createElement("a");
            link.className = "lang-flag";
            link.title = lang.label;
            link.textContent = lang.flag;
            if (lang.code === "en") {
                link.href = currentUrl;
            } else {
                link.href = "https://translate.google.com/translate?sl=en&tl=" + lang.code + "&u=" + encodeURIComponent(currentUrl);
                link.target = "_blank";
                link.rel = "noopener";
            }
            container.appendChild(link);
        });
    }

    document.querySelectorAll(".lang-switch").forEach(buildSwitcher);
})();
