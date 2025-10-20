import './App.css'
import { supabase } from './components/supabase';
import { useState, useEffect } from 'react'
import Hero from './components/Hero'



function App() {


        function MiComponenteDeDatos() {
          const [datos, setDatos] = useState([]);
          const [cargando, setCargando] = useState(true);
          const [error, setError] = useState(null);


          useEffect(() => {
            async function obtenerDatos() {
              setCargando(true);
              setError(null);

              // La llamada de fetch real
              const { data, error } = await supabase
                .from('datos') // Reemplaza con el nombre de tu tabla
                .select('*'); // Selecciona todas las columnas. Puedes seleccionar específicas: .select('id, nombre, descripcion')

              if (error) {
                console.error('Error al obtener datos:', error);
                setError(error);
                setDatos([]);
              } else {
                setDatos(data);
              }
              setCargando(false);
            }

            obtenerDatos();
          }, []); // El array vacío asegura que se ejecute solo una vez al montar

          if (cargando) {
            return <div>Cargando...</div>;
          }

          if (error) {
            return <div>Error: {error.message}</div>;
          }
          console.log(datos)
          return (
            <ul>
              {datos.map((item) => (
                // Reemplaza 'nombre_columna' con una columna real de tu tabla
                <li key={item.id}>{item.titulo}</li> 
              ))}
            </ul>
          );
        }



  return (
    <>
    <Hero />
    <MiComponenteDeDatos/>
    <span className="my-10 block bg-red-500">asd</span>
    </>
  )
}

export default App
