const fs = require("fs")
const exec = require("child_process").exec;
function installTailwind() {
    console.log("Installing Tailwind......")
    exec("npm install -D tailwindcss postcss autoprefixer", (e, stdout, stderr) => {
        if (e instanceof Error) {
            console.log(e)
            throw e
        }
        exec("npx tailwindcss init -p", (e, stdout, stderr) => {
            if (e instanceof Error) {
                console.log(e)
                throw e
            }
            const tailwindConfigContent = fs.readFileSync(`${__dirname}/config.txt`);
            const globalCssContent = fs.readFileSync(`${__dirname}/global.txt`);
            fs.writeFileSync(`${process.cwd()}/tailwind.config.js`, tailwindConfigContent)
            fs.writeFileSync(`${process.cwd()}/styles/globals.css`, globalCssContent, { flag: "w+" });
            console.log("Installation Done. Have Fun")
        })

    })

}
exports.tailwindPublic = installTailwind