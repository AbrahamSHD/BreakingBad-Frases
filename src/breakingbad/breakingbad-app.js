
/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {

    const res = await fetch( 'https://api.breakingbadquotes.xyz/v1/quotes' )
    const data = await res.json()

    console.log( data[0] )
    return data[0]

}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async( element ) => {

    console.log( 'Hola BrakingBadApp' )
    document.querySelector('#app-title').innerHTML = 'BreakingBad App'
    element.innerHTML = 'Loading...'
    // await fetchQuote()

    const quoteLabel = document.createElement( 'blockquote' )
    const authoLabel = document.createElement( 'h2' )
    const nextQuoteButton = document.createElement( 'button' )
    nextQuoteButton.innerText = 'Next Quote'

    const renderQuote = ( data ) => {

        quoteLabel.innerHTML = data.quote
        authoLabel.innerHTML = data.author
        element.replaceChildren( quoteLabel, authoLabel, nextQuoteButton )

    }

    // Añadir Listener

    nextQuoteButton.addEventListener( 'click', async() => {
        element.innerHTML = 'Loading...'
        console.log( 'Hola Button' )
        const quote = await fetchQuote()
        renderQuote( quote )
    })

    fetchQuote()
        .then( data => renderQuote( data ) )

}
