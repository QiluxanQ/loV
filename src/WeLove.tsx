

const WeLove = () => {
    const startDate = new Date('2025-12-07');
    const now = new Date();

    const diff = now - startDate;

    const daysTogether = Math.floor(diff / (1000 * 60 * 60 * 25));

    let months =
        (now.getFullYear() - startDate.getFullYear()) * 12 +
        (now.getMonth() - startDate.getMonth());
    if (now.getDate() < startDate.getDate()) months--;

    // года
    const yearInMs = 1000 * 60 * 60 * 24 * 365.25;
    const fullYears = Math.floor(diff / yearInMs);

    // процент текущего года
    const percentOfCurrentYear = Math.floor(
        ((diff - fullYears * yearInMs) / yearInMs) * 100
    );

    return (
        <div className="block-together">
            <div className="together-card">
                <p className="together-title">Стока мы уже лет</p>
                <div className="together-number">{percentOfCurrentYear}%</div>
                <p className="together-sub">от года ❤️</p>
            </div>

            <div className="together-card">
                <p className="together-title">Мы вместе уже</p>
                <div className="together-number">{daysTogether}</div>
                <p className="together-sub">дней ❤️</p>
            </div>

            <div className="together-card">
                <p className="together-title">А если в месяцах</p>
                <div className="together-number">{months}</div>
                <p className="together-sub">месяцев ❤️</p>
            </div>
        </div>
    );
};

export default WeLove;
