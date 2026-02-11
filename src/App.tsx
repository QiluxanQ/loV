import WeLove from "./WeLove.tsx";
import CardLove from "./CardLove.tsx";
import LoveMessage from "./LoveMessage.tsx";

function App() {


  return (
    <div >
        <div className='main-app'>


        <div className="hearts-bg">
            {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} className="heart"></span>
            ))}
        </div>
        <h1 className='choco-text'> Милана</h1>

            <div className="intro-message">
                <p>Прежде чем просмотришь это всё, я сделал специально для тебя.</p>
                <p>Знаю, тут не много. Но вложил душу в это ❤️</p>
                <p>Чтобы тебя порадовать. Ты мое солнце ☀️</p>
            </div>



        <h2 className='title-main'>Сводочка:</h2>
        <WeLove />
        </div>
        <div className='card-love'>
            <CardLove />
        </div>
        <div style={{marginTop:'50px'}}>
            <LoveMessage />
        </div>
        <h2 className="love-text">❤️ Я люблю тебя ❤️</h2>

    </div>
  )
}

export default App
