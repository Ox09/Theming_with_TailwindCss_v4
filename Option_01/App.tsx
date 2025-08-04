import ProfileCard from "./components/ProfileCard.tsx";
import ThemeSwitcher from "./components/ThemeSwitcher.tsx";
import './index.css';

function App() {
  return <div className={"h-[100vh] flex items-center justify-center bg-background/60"}>
  <ProfileCard/>
    <ThemeSwitcher/>
  </div>
}

export default App
