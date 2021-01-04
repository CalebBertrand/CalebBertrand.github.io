const stack = [
    { name: "Javascript - ES6", category: "Languages", url: "https://developer.mozilla.org/en-US/docs/Glossary/JavaScript" },
    { name: "Python", category: "Languages", url: "https://www.python.org/" },
    { name: "CSS3", category: "Languages", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },

    { name: "HTML5", category: "Data", url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
    { name: "JSON", category: "Data", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON" },

    { name: "SCSS", category: "Frameworks", url: "https://sass-lang.com/" },
    { name: "Node.js", category: "Frameworks", url: "https://nodejs.org" },

    { name: "ZURB Foundation", category: "Libraries", url: "https://get.foundation/" },
    { name: "jQuery", category: "Libraries", url: "https://jquery.com/" },

    { name: "NPM", category: "Package Managers", url: "https://www.npmjs.com/" },

    { name: "Gulp", category: "Compilers", url: "https://gulpjs.com/" },
    { name: "Babel", category: "Compilers", url: "https://babeljs.io/" },
    { name: "Webpack", category: "Compilers", url: "https://webpack.js.org/" },

    { name: "Git", category: "Version Control", url: "https://git-scm.com/" },

    { name: "Heroku", category: "Pipelines", url: "https://www.heroku.com/" },

    { name: "Express.js", category: "Serving", url: "https://expressjs.com/" },

    { name: "VS Code", category: "IDE", url: "https://code.visualstudio.com/" },
    { name: "WebStorm", category: "IDE", url: "https://www.jetbrains.com/webstorm/" },

    { name: "Webflow", category: "Web Designers", url: "https://webflow.com" },

    { name: "Microsoft Office", category: "Applications", url: "https://www.office.com/" },

    { name: "Microsoft Teams", category: "Communication", url: "https://www.microsoft.com/en-us/microsoft-365/microsoft-teams/group-chat-software" },
    { name: "Slack", category: "Communication", url: "https://slack.com/" }

]

/** Calculate Stack Categories and Corresponding Colors, Append Stack Badges to Container */

export const setupStackTags = function() {
    let categoryColors = {}, colorIndex = 0;
    stack.reduce((prev, elm) => {
        if (prev.category !== elm.category) {
            categoryColors[elm.category] = "";
            colorIndex++;
            return elm;
        } else {
            return prev;
        }
    }, "");

    colorIndex = 0;
    for (let cat in categoryColors) {
        categoryColors[cat] = `hsl(${colorIndex * 255 / (Object.keys(categoryColors).length - 1)}, 85%, 50%)`;
        colorIndex++;
    }

    let stackContainer = $('#stack-card-container')

    stack.forEach((elm) => {
        stackContainer.append(`<div class="stack-item"><h4 class="stack-item-name terminal"><a href=${elm.url} target=”_blank”>${elm.name}</a></h4><h5 style="background-color: ${categoryColors[elm.category]}" class="stack-item-category">${elm.category}</h5></div>`);
    });
}