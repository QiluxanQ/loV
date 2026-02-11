

const LoveMessage = () => {
    return (
        <div className="big-love-message">
            <h1 className="choco-love">
                Знай, я буду любить тебя всегда
            </h1>
            <h2 className="choco-love-sub">
                Ты для меня самое ценное, что есть ❤️
            </h2>
            <div className="hearts-container">
                {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i} className="heart"></span>
                ))}
            </div>

        </div>
    );
};

export default LoveMessage;
