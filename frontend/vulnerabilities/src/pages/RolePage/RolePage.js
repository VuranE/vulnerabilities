import { useParams } from "react-router-dom";
import rolesData from "../../data/actionPermissions.json";

function RolePage() {
  const { role } = useParams(); // dohvaćamo parametar iz URL-a
  const roleInfo = rolesData.find(r => r.role === role);

  if (!roleInfo) {
    return <h2>Uloga "{role}" ne postoji.</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Akcije za ulogu: {roleInfo.role}</h1>
      <ul>
        {roleInfo.actions.map((action, index) => (
          <li key={index}>{action}</li>
        ))}
      </ul>
    </div>
  );
}

export default RolePage;
