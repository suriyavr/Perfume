
import one from '../images/one.png';

//products component

function Products() {
  return (
    <div className="products">
      <div className="box">
        <img src={one} alt="Perfume 1" />
        <p>
          Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml
        </p>
      </div>

      <div className="box">
        <img src={one} alt="Perfume 1" />
        <p>
          Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml
        </p>
      </div>

      <div className="box">
        <img src={one} alt="Perfume 1" />
        <p>
          Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium
          Long Lasting Perfume
        </p>
      </div>
    </div>
  );
}


export default Products;