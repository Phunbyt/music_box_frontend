
import styles from './RefreshTop.module.css'

const RefreshTop = () => {
    return (
        <div className={styles.refreshTop}>
            <button className={styles.refreshButton}>REFRESH</button>
            <p>Recommended songs</p>
        </div>
    )
}


export default RefreshTop