function delay(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration))
}

async function fetchPage(num) {
    const response = await fetch(`${process.env.API_ROOT_URL}?sort=createdAt:DESC&page=${num}&pageSize=100&filters[$and][0][folder][id][$null]=true`, {
        method: 'GET',
        headers: {
            Authorization: process.env.TOKEN,
        }
    })
    return response.json()
}

async function fetchAllPages(start, end) {
    const pages = []
    for (let i = start; i <= end; i += 1) {
        process.stderr.write(`[DEBUG]: fetch page ${i} \n`)
        pages.push(await fetchPage(i))
        await delay(1000)
    }
    return pages
}

async function main() {
    const pages = await fetchAllPages(1, 53)
    process.stdout.write(JSON.stringify(pages, null, 2), null, 2)
}

main()