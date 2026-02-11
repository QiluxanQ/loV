import React, { useState } from 'react';

const CardLove = () => {
    const reasons = [
        "За твою улыбку 😊",
        "За твой смех 😍",
        "За твою доброту ❤️",
        "За то, что ты рядом каждый день 💕",
        "За каждый момент вместе 🥰",
        "За то, что делаешь меня счастливым 🌸",
        "За твой взгляд, который тает моё сердце 💖"
    ];

    const [current, setCurrent] = useState(0);

    const handleClick = () => {
        let next;
        do {
            next = Math.floor(Math.random() * reasons.length);
        } while (next === current); // чтобы не повторялось
        setCurrent(next);
    };

    return (
        <div className="card-love" onClick={handleClick}>
            <h3>Почему я тебя люблю</h3>
            <p className="reason">{reasons[current]}</p>
            <span className="click-hint">Нажми на карточку 💕</span>
        </div>
    );
};

export default CardLove;
