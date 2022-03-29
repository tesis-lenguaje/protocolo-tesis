import config from './config.mjs'
import { spawn } from 'child_process'
import path from 'path'

const { generador } = config

function resolveHome(filepath) {
    if (filepath[0] === '~') {
        return path.join(process.env.HOME, filepath.slice(1));
    }
    return filepath;
}

if (!generador) {
    console.log("Configuración invalida. Debe haber un archivo `config.mjs` con la siguiente información:\n")
    console.log("export default", {generador: '<dirección de index.js en el generador de tesis>'}, "\n")
    process.exit(-1)
}

let fullPath = path.resolve(resolveHome(generador))
console.log(fullPath)

process.chdir("build")

const child = spawn("node", [
    fullPath,
    "-o", "protocolo.pdf",
    "-t", "./template.html",
    "../protocolo.md"
])

child.on('message', (message)=>{
    console.log(message)
})

child.on('error', (message)=>{
    console.log("Error:", message)
})

// exec("node " + fullPath + " ../protocolo.md -o protocolo.pdf -t ./template.html", (error, stdout)=>{
//     if (error) {
//         console.log(error.message)
//         return
//     }

//     if (stdout) {
//         console.log(stdout)
//     }
// })