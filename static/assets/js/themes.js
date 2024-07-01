function live() {
    var bgUrl = localStorage.getItem('bgUrl');
    var selectedTheme = localStorage.getItem('selectedOption');
    
    if (selectedTheme === 'deepsea' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
        var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');
        containers.forEach(function(container) {
            container.style.backgroundColor = 'rgba(19, 34, 48, 0.8)'; // Dark Blue
        });
        document.body.style.background = "linear-gradient(to bottom right, rgb(16, 52, 82), rgb(9, 34, 55), black)";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.height = "100%";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    } else if (selectedTheme === 'equinox' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
        var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');
        containers.forEach(function(container) {
            container.style.backgroundColor = 'rgb(24 24 24 / 32%)'; // Default Gray
        });
        var inputs = document.querySelectorAll('input');
        inputs.forEach(function(inputElement) {
            inputElement.style.transition = '.2s';
            inputElement.style.backgroundColor = 'rgba(15, 15, 15, 0.89)';
            inputElement.style.boxShadow = '0 0 1px rgba(255, 255, 255, 0.267)';
            inputElement.style.opacity = '100%';
        });
        document.body.style.backgroundImage = "url('/assets/img/equinox.webp')";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.height = "100%";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    } else if (selectedTheme === 'swamp' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
        var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');
        containers.forEach(function(container) {
            container.style.backgroundColor = 'rgba(22, 46, 23, 0.859)'; // Dark Green
        });
        document.body.style.background = "linear-gradient(to bottom, rgb(33, 116, 47), rgb(0, 0, 0)";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.height = "100%";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    } else if (selectedTheme === 'ocean' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
        var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');
        containers.forEach(function(container) {
            container.style.backgroundColor = 'rgba(84, 137, 161, 0.637)'; // Dark Baby Blue
        });
        document.body.style.background = "linear-gradient(to bottom, rgb(70, 173, 214), rgb(99, 84, 36))";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.height = "100%";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    } else if (selectedTheme === 'starry' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
        var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');
        containers.forEach(function(container) {
            container.style.backgroundColor = 'rgba(39, 81, 109, 0.521)'; // Light Purple
        });
        document.body.style.background = "linear-gradient(to right, rgb(14, 132, 211), rgb(113, 11, 209)";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.height = "100%";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    } else if (selectedTheme === 'magma' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
        var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');
        containers.forEach(function(container) {
            container.style.backgroundColor = 'rgb(24 24 24 / 32%)'; // Default Gray
        });
        document.body.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(223, 59, 10)";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.height = "100%";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    } else if (selectedTheme === 'sunset' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
        var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');
        containers.forEach(function(container) {
            container.style.backgroundColor = 'rgb(24 24 24 / 32%)'; // Default Gray
        });
        document.body.style.background = "linear-gradient(to bottom, rgb(211, 112, 19), rgb(92, 16, 179))";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.height = "100%";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

    if (selectedTheme === null && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
        var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');
        containers.forEach(function(container) {
            container.style.backgroundColor = 'rgba(19, 34, 48, 0.8)'; // Light Blue
        });
        document.body.style.background = "linear-gradient(to bottom right, rgb(16, 52, 82), rgb(9, 34, 55), black)";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.height = "100%";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        // Default Theme Setup
    }

    /* Ripple Effect for buttons */
    [].map.call(document.querySelectorAll('[anim="ripple"]'), el => {
        el.addEventListener('mousedown', e => {
            e = e.touches ? e.touches[0] : e;
            const r = el.getBoundingClientRect(),
                d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
            el.style.cssText = `--s: 0; --o: 1;`;
            el.offsetTop;
            el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
            if (el.classList.contains('90px')) {
                el.style.width = '90px';
            }
        })
    })

    /* Background Check */
    document.addEventListener('DOMContentLoaded', function() {
        if (bgUrl === 'none' || bgUrl === null || bgUrl === '') {
            console.log('[❌] Custom Background');
        } else {
            document.body.style.backgroundImage = `url(${bgUrl})`;
            document.getElementById('particles-js').remove();
            console.log('[✔️] Custom Background');
        }
    });

    console.log('[✔️] Themes Loaded');
}

function applyJapaneseMatrixTheme() {
    var root = {
        wavecolor: {
            r: 125,
            g: 52,
            b: 253
        },
        rainbowSpeed: 0.5,
        rainbow: true,
        matrixspeed: 50
    };

    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

    var hueFw = false;
    var hue = -0.01;

    c.height = window.innerHeight;
    c.width = window.innerWidth;

    var konkani = "゠アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレワヰヱヲンヺ・ーヽヿ0123456789";
    var characters = konkani.split("");
    var font_size = 14;
    var columns = c.width / font_size;
    var drops = [];

    for (var x = 0; x < columns; x++)
        drops[x] = 1;

    function draw() {
        ctx.fillStyle = "rgba(0,0,0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#BBB";
        ctx.font = font_size + "px arial";

        for (var i = 0; i < drops.length; i++) {
            ctx.fillStyle = "rgba(10,10,10, 1)";
            ctx.fillRect(i * font_size, drops[i] * font_size, font_size, font_size);
            var text = characters[Math.floor(Math.random() * characters.length)];

            if (root.rainbow) {
                hue += (hueFw) ? 0.01 : -0.01;
                var rr = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 0) + 128);
                var rg = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 2) + 128);
                var rb = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 4) + 128);
                ctx.fillStyle = 'rgba(' + rr + ',' + rg + ',' + rb + ')';
            } else {
                ctx.fillStyle = 'rgba(' + root.wavecolor.r + ',' + root.wavecolor.g + ',' + root.wavecolor.b + ')';
            }

            ctx.fillText(text, i * font_size, drops[i] * font_size);
            drops[i]++;
            if (drops[i] * font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;
        }
    }

    window.onresize = () => {
        location.reload();
    };

    setInterval(draw, root.matrixspeed);

    function livelyPropertyListener(name, val) {
        switch (name) {
            case "matrixColor":
                root.wavecolor = hexToRgb(val);
                break;
            case "rainBow":
                root.rainbow = val;
                break;
            case "rainbowSpeed":
                root.rainbowSpeed = val / 100;
                break;
        }
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}

// Additional theme functions can be added here if needed

function applyTheme(theme) {
    switch (theme) {
        case "japanesematrix":
            applyJapaneseMatrixTheme();
            break;
        case "deepsea":
            applyDeepSeaTheme();
            break;
        case "equinox":
            applyEquinoxTheme();
            break;
        case "swamp":
            applySwampTheme();
            break;
        case "ocean":
            applyOceanTheme();
            break;
        case "starry":
            applyStarryTheme();
            break;
        case "magma":
            applyMagmaTheme();
            break;
        case "sunset":
            applySunsetTheme();
            break;
        default:
            applyDefaultTheme();
            break;
    }
}

// Apply default theme on load
document.addEventListener("DOMContentLoaded", function () {
    live();
});

console.log('[✔️] Themes Loaded');
