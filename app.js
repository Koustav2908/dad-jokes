let url = 'https://icanhazdadjoke.com/';

async function getJokes() {
    try {
        const config = {
            headers: { Accept: 'application/json' },
        };

        let res = await axios.get(url, config);
        return res.data.joke;
    } catch (err) {
        console.log('Error = ', err);
        return 'No joke found';
    }
}

let btn = document.querySelector('button');
let p = document.querySelector('#joke');

btn.addEventListener('click', async () => {
    let joke = await getJokes();
    console.log(joke);
    p.innerHTML = `<b> ${joke} </b>`;
});
