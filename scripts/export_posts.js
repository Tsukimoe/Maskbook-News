const {  statSync, readdirSync, readFileSync } = require('fs')
const { resolve } = require('path')

function cleanQuotes(str) {
    if (!str) return
    if (str === '""' || str === "''") return

    const singleQuoteMatched = str.match(/'(.*)'/)
    if (singleQuoteMatched?.[1]) return singleQuoteMatched[1].trim()

    const douleQuoteMatched = str.match(/"(.*)"/)
    if (douleQuoteMatched?.[1]) return douleQuoteMatched[1].trim()

    return str.trim()
}

function readI18NFolders() {
    return readdirSync(resolve(__dirname, '../_i18n/'))
        .filter((x) => statSync(resolve(__dirname, '../_i18n/', x)).isDirectory())
        .map((y) => ({
            name: y,
            path: resolve(__dirname, '../_i18n/', y)
        }))
}

function readPosts(locals, pathToFolder) {
    return readdirSync(resolve(pathToFolder, '_posts'))
        .filter(x => {
            return /^\d{4}-\d{2}-\d{2}/.test(x) && x.endsWith('.md')
        }).map(y => {
            const matched = y.match(/\d{4}-\d{2}-\d{2}-(.+)\.md/i)
            if (!matched) throw new Error('Not match.')

            const [_, filename] = matched
            const content = readFileSync(resolve(pathToFolder, '_posts', y), 'utf-8')
            const materials = readMaterials(content)

            return ({
                locals,
                date: materials.get('date'),
                filename,
                title: cleanQuotes(materials.get('title')),
                description: cleanQuotes(materials.get('description')),
                location: cleanQuotes(materials.get('description')),
                hero: cleanQuotes(materials.get('image')),
                timezone: materials.get('timezone') ? Number.parseInt(materials.get('timezone'), 10) : undefined,
                body: raedBody(content),
                path: resolve(pathToFolder, '_posts', y),
            })
        })
}

function readMaterials(content) {
    const MAX_LINES = 49
    const materials = new Map()

    for (const [i, line] of content.split(/\n/mg).entries()) {
        if (i >= MAX_LINES) throw new Error('Read Error.')
        if (i === 0 && line !== '---') throw new Error('No Materials.')
        if (/^\s*$/.test(line)) continue
        if (i === 0 && line === '---') continue
        if (line === '---') return materials

        const [_, key, value] = line.match(/^([\w-]+):\s(.*)$/)
        materials.set(key, value || '')
    }
    throw new Error('Endless Error.')
}

function raedBody(content ) {
    const MAX_LINES = 9999
    const lines = []
    
    let state = 'initial' // initial, material, content, end, error

    for (const [i, line] of content.split(/\n/mg).entries()) {
        if (i > MAX_LINES) break
        if (state === 'error') break
        if (i === 0 && line === '---') {
            if (state === 'initial') {
                state = 'material'
            } else {
                state = 'error'
            }
        } else if (line === '---') {
            if (state === 'material') {
                state = 'content'
            } else {
                state = 'error'
            }
        } else {
            if (state === 'material') {
                continue
            } else if (state === 'content') {
                lines.push(line)
                continue
            } else {
                state = 'error'
            }
        }
    }

    return lines.join('\n')
}

function main() {
    const posts = readI18NFolders().flatMap(f => readPosts(f.name, f.path))
    

    console.log(JSON.stringify(posts, null, 4))
}

main()