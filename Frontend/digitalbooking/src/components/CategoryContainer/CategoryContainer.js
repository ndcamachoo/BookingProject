import { CategoryCard } from "../CategoryCard/CategoryCard";
import useFetch from "use-http";
import styles from "./CategoryContainer.module.css";
import { Link } from "react-router-dom"

export const CategoryContainer = () => {
  const options = { headers:{
    "X-Requested-With": "XMLHttpRequest"
  }};
  const url = "https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/category";
  const { loading, data = [] } = useFetch(url, options, []);
  const { searchCategory, searchByType, categoryCards } = styles;

  return (
    <div className={searchCategory}>
      <section className={searchByType}>
        <h4>Buscar por tipo de alojamiento</h4>
        {loading && <p>Cargando Categorías...</p>}
        <div className={categoryCards}>
          { data && data.map((category, index) => (
            <Link key= {index} to= {`/category/${category.id}`} style={{textDecoration: 'none', color:'black'}} ><CategoryCard
              key={index}
              image={category.photoUrl}
              alt={category.description}
              title={category.name}
              description={category.countProducts}
            /></Link>
          ))}
        </div>
      </section>
    </div>
  );
};
