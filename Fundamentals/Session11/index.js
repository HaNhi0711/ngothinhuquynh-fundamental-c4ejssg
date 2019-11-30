async function getQuoteData() {
    const response = await fetch(`https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json`)
    const data = await response.json()
    console.log(data)
    return data
}
async function handleSubmit() {
    const container = document.getElementById('container')
    const content = document.getElementById('content')
    const quote_data = document.getElementById('quote-data')
    const data = await getQuoteData(quote_data)
    const random = data[Math.floor(Math.random() * data.length)];
    container.innerHTML = `<p>${random.quoteText}</p>`
    content.innerHTML = `<p>${random.quoteAuthor}</p>`
}
async function main() {
    const button = document.getElementById('submit')
    button.addEventListener('click', handleSubmit)
}
main();