import { readFileSync } from 'fs'
import { dirname } from 'path'

let filename = process.argv[2]
if (!filename) {
    console.log("Se necesita un archivo como argumento")
    process.exit(-1)
}

let importTag = "@import "
let errorTag = "@!"
let warningTag = "@?"
let errores = []
let preguntas = []
function readMD(path) {
    if (!path.endsWith(".md")) {
        path += ".md"
    }
    let baseDir = dirname(path)
    let content = readFileSync(path).toString()
    let lines = content.split("\n")

    let lineNum = 1
    for (let line of lines) {
        if (line.startsWith(importTag)) {
            let new_file = line.substring(importTag.length)
            readMD(baseDir + "/" + new_file)
        }

        else if (line.trim().startsWith(errorTag)) {
            let index = line.indexOf(errorTag)
            let message = line.substring(index + errorTag.length)
            errores.push(`${path}:${lineNum}:1 [Error]: ${message}`)
        } else if (line.indexOf(errorTag + "(") != -1) {
            let index = line.indexOf(errorTag + "(") + errorTag.length + 1
            let secondIndex = line.indexOf(")")
            let message = line.substring(index, secondIndex)
            errores.push(`${path}:${lineNum}:${index} [Error]: ${message}`)
        }
        else if (line.trim().startsWith(warningTag)) {
            let index = line.indexOf(warningTag)
            let message = line.substring(index + warningTag.length)
            preguntas.push(`${path}:${lineNum}:1 [Pregunta]: ${message}`)
        } else if (line.indexOf(warningTag + "(") != -1) {
            let index = line.indexOf(warningTag + "(") + warningTag.length + 1
            let secondIndex = line.indexOf(")")
            let message = line.substring(index, secondIndex)
            preguntas.push(`${path}:${lineNum}:${index} [Pregunta]: ${message}`)
        }
        lineNum++
    }
}

readMD(filename)

if (errores.length == 0 && preguntas.length == 0) {
    console.log("\x1b[32mNo se encontraron correcciones.\x1b[0m")
} else {
    if (errores.length == 0) {
        console.log("\x1b[32mNo se encontraron errores.\x1b[0m")
    } else {
        console.log(`\x1b[31mHay ${errores.length} error(es)\x1b[0m`)
        for(let error of errores) {
            console.log("\t" + error)
        }
        console.log("")
    }

    if (preguntas.length == 0) {
        console.log("\x1b[32mNo se encontraron preguntas.\x1b[0m")
    } else {
        console.log(`\x1b[34mHay ${preguntas.length} pregunta(s)\x1b[0m`)
        for(let pregunta of preguntas) {
            console.log("\t" + pregunta)
        }
    }
}