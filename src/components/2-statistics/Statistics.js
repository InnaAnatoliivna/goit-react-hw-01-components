import PropTypes from 'prop-types';
import css from 'components/2-statistics/statistics.module.css';
import { getRandomHexColor } from 'components/random-color';

const Statistics = ({ title, stats }) => {
    // const { id, label, percentage } = stats;
    return (
        <section className={css.statistics}>

            {title && <div className={css.wrap}><h2 className={css.title}> {title}</h2></div>}

            <ul className={css.stat_list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li style={{ backgroundColor: getRandomHexColor() }} className={css.item} key={id}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
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
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    )
}