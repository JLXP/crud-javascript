
/**
 * @returns {Promise<Object>} quote information
 */
const fecthQuote = async () => {
    const res = await fetch(' https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    return data[0];
}


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingBad = async (element) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';
    //const quote = await fecthQuote();
    //element.innerHTML = 'Tenemos Data!!!';

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nexQuoteButton = document.createElement('button');
    nexQuoteButton.innerText = 'Nex Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authoLabel, nexQuoteButton);
    }


    //Añadir evento al boton
    nexQuoteButton.addEventListener('click', async () => {
        element.innerHTML = 'Loading...';
        const quote = await fecthQuote();
        renderQuote(quote);
    })

    fecthQuote().then(renderQuote);




}