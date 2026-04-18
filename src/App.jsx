import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery'
import Favorites from './pages/Favorites';
import AdminInventoryEdit from './pages/AdminInventoryEdit'
import AdminInventoryDetails from './pages/AdminInventoryDetails';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventory from './pages/AdminInventory';
import Navbar from './components/Navbar';

function App () {
  return (
    <BrowserRouter> 
    <div className="min-h-screen bg-gray-50 flex flex-col"> 
    <Navbar /> 
    <main className="container mx-auto px-4 px-8 flex-grow"> 
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="favorites" element={<Favorites />} />

        <Route path="/admin" element={<AdminInventory />} />
        <Route path="/admin/create" element={<AdminInventoryCreate />} />
        <Route path="/admin/edit/:id" element={<AdminInventoryEdit />} />
        <Route path="/admin/details/:id" element={<AdminInventoryDetails />} />
        <Route path="*" element={<div className="text-center py-20 text-2xl">Сторінку не знайдено 404</div>} />
     </Routes>
    </main>

    
    </div>
    
    </BrowserRouter>
  )
}
export default App;