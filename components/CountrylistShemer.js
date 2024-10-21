import "./countrylistShemer.css";

function countrylistShemer() {
  const mapped = Array.from({ length: 20 }).map((el) => {
    return <div className="card shemer"></div>;
  });
  return <div className="country">{mapped}</div>;
}

export default countrylistShemer;
