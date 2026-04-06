import Header from "./components/Header";
import Catalogo from "./pages/Catalogo";

function App() {

  return (
    <div className="flex flex-col min-h-screen">

      <Header />

     

      <main className="flex-1">
        <Catalogo />
      </main>

      {/* FOOTER */}

      <footer className="bg-red-500 text-white font-bold p-4 text-center">
        &copy; 2024 Kenn_dav. Todos los derechos reservados.
      </footer>

      

     

    </div>
  );

}

export default App;