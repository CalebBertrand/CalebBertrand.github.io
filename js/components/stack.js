const stack = [
    { name: "Javascript", category: "Languages", url: "https://developer.mozilla.org/en-US/docs/Glossary/JavaScript" },
    { name: "Python", category: "Languages", url: "https://www.python.org/" },
    { name: "CSS3", category: "Languages", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "C#", category: "Languages", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    
    { name: "SCSS", category: "Meta Languages", url: "https://sass-lang.com/" },
    { name: "TypeScript", category: "Meta Languages", url: "https://www.typescriptlang.org/" },
    
    { name: "HTML5", category: "Data", url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
    { name: "JSON", category: "Data", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON" },

    { name: ".NET Core", category: "C# Frameworks", url: "https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-5.0" },
    
    { name: "Node.js", category: "Javascript Frameworks", url: "https://nodejs.org" },
    { name: "Angular", category: "Javascript Frameworks", url: "https://angular.io" },

    { name: "jQuery", category: "Javascript Libraries", url: "https://jquery.com/" },

    { name: "ZURB Foundation", category: "UI Frameworks", url: "https://get.foundation/" },
    { name: "Bootstrap", category: "UI Frameworks", url: "https://get.foundation/" },
    
    { name: "NPM", category: "Package Managers", url: "https://www.npmjs.com/" },

    { name: "Gulp", category: "Compilers", url: "https://gulpjs.com/" },
    { name: "Babel", category: "Compilers", url: "https://babeljs.io/" },
    { name: "Webpack", category: "Compilers", url: "https://webpack.js.org/" },

    { name: "Git", category: "Version Control", url: "https://git-scm.com/" },

    { name: "AWS Amplify", category: "Cloud Services", url: "https://aws.amazon.com/amplify/" },

    { name: "VS Code", category: "IDE", url: "https://code.visualstudio.com/" },
    { name: "JetBrains Rider", category: "IDE", url: "https://www.jetbrains.com/rider/" }
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
        categoryColors[cat] = `hsl(${colorIndex * 255 / (Object.keys(categoryColors).length - 1)}, 90%, 50%)`;
        colorIndex++;
    }

    let stackContainer = $('#stack-card-container')

    stack.forEach((elm) => {
        stackContainer.append(`<div class="stack-item"><h4 class="stack-item-name terminal"><a href=${elm.url} target=”_blank”>${elm.name}</a></h4><h5 style="background-color: ${categoryColors[elm.category]}" class="stack-item-category">${elm.category}</h5></div>`);
    });
}