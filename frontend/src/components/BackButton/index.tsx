import { useNavigate } from "react-router-dom";
import { Back } from "./styled";

export function BackButton() {
  const navigate = useNavigate();

  return <Back onClick={() => navigate(-1)}>← Back</Back>;
}
