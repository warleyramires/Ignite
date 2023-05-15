import styles from '../components/Header.module.css'
import igniteLogo from '../assets/igniteLogo.svg'

export function Header(){
    return (
        <>
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do ignite" />
            <strong>Ignite Feed</strong>
        </header>
        </>
    )
}