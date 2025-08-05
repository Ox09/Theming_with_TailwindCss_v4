import ProfileCard from "./components/ProfileCard.tsx";
import ThemeSwitcher from "./components/ThemeSwitcher.tsx";
import "./index.css";

function App() {
  return (
    <div
      className={"h-[100vh] flex items-center justify-center dark:bg-dark-background wine:bg-wine-background" +
          " border-2 dark:border-dark-foreground wine:border-wine-foreground"}
    >
      <ProfileCard />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
