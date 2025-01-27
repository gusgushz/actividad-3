import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes"; // Archivo con tus rutas
import { Header, Footer } from "./presentation/components"; // Menú de navegación principal
import "./App.css"; // Estilos globales
import { FavoritesProvider } from "./presentation/components/favorites/context-fav";

const App: React.FC = () => {
  return (
    <FavoritesProvider>   
    <Router>
      <div className="app-container">
        {/* Menú de navegación */}
        <Header />

        {/* Rutas de la aplicación */}
        <main className="main-content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
    </FavoritesProvider>
  );
};

export default App;
