import mapa from "../img/map.png";
import marcas from "../img/marcas.png";


function Map() {
  return (
    <div className="text-center">
      <h2 className="mt-52 lg:text-3xl text-xl font-bold">
        Huge Global Network
        <br />
        of Fast VPN
      </h2>
      <p className="text-white lg:text-xl text-sm px-6">
        See <b>LaslesVPN</b> everywhere to make it easier for you when you move
        locations.
      </p>
      <img src={mapa} alt="mapaso" className="w-3/4 mx-auto lg:mt-28 mt-16" />
      <img src={marcas} alt="marcas" className="w-3/4 mx-auto lg:mt-28 mt-16" />


    </div>
  );
}

export default Map;
