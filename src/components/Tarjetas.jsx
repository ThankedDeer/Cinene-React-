import './Tarjetas.css';
const Tarjetas = () => {
    return (

        <>
            <button className='cBoletos' data-aos="zoom-in"> Comprar Boletos
            </button>
           

            <button onClick={api}>api de marvel</button>

        </>
    );
}
const api = async () => {
    const data = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ae843e7944cb26900c00dbd6f460c463&hash=e7983fe0c75b8783ed84975168c4e0b3')
    const marvel = await data.json()
    const heroe = marvel.data.results;
    console.log(heroe); 
}
export default Tarjetas;