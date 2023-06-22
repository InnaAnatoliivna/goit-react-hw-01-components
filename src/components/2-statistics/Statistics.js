import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    // const { id, label, percentage } = stats;
    return (
        <section className="statistics">
            {title && <h2 className="title"> {title}</h2>}

            <ul className="stat-list">
                {stats.map((item) => {
                    return (
                        <li className="item" key={item.id}>
                            <span className="label">{item.label}</span>
                            <span className="percentage">{item.percentage}%</span>
                        </li>
                    )
                })}
            </ul>

        </section>
    );
};

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
}