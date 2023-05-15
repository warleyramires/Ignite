import { PencilLine } from 'phosphor-react' 
import styles from "./SideBar.module.css"
export function SideBar(){
    
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1520583457224-aee11bad5112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/48494390?v=4"/>

                <strong>Warley Ramires</strong>
                <span>Web Developer</span>
            </div>

            <footer>
               
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )

}
