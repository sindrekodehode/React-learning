import { crabarray } from "./crabarray";

export default function CrabCards() {
  const data = crabarray;
  const crabElements = data.map((object) => (
    <div key={object.id}>
      <h3>{object.name}</h3>
      <img src={object.img} alt={object.name} />
      <p>{object.description}</p>
    </div>
  ));

  return <>{crabElements}</>;
}
