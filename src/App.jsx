import Header from "./components/Header"
import Main from "./components/Main"


function App() {
  return (
    <>
      <Header />
      <div className="absolute bg-hero-mobile w-full h-[300px] sm:h-[400px] sm:bg-hero-desktop bg-center bg-cover bg-no-repeat"></div>
      <Main />
    </>
  );
}
export default App
