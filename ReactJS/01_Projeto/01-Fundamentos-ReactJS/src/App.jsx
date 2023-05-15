import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"
import Post from "./components/Post"
import styles from "./App.module.css"
import '../src/globals.css'

function App() {

  return (
    <>
    <Header/>

    <div className={styles.wrapper}>
      <SideBar/>
      <main>
        <Post 
          author="Warley Ramires"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae quis aut! Amet soluta eveniet consectetur natus architecto in atque!"  
        />
        <Post 
          author="Warley Ramires"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae quis aut! Amet soluta eveniet consectetur natus architecto in atque!"  
        />
        
      </main>
    </div>

    </>
  )
}

export default App
