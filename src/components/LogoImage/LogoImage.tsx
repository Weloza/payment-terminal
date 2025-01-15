import { Loader } from "../Loader";
import { StyledLogo } from "./styled";

interface LogoUrls {
  [key: string]: string;
}

export const logoUrls: LogoUrls = {
  МТС: '/assets/mts.jpeg',
  Билайн: '/assets/beeline.jpeg',
  Мегафон: '/assets/megafone.jpeg',
};

export const LogoImage: React.FC<{ operator: string, loading: boolean }> = ({ operator, loading }) => {
  const logoUrl = logoUrls[operator];

  return (
    <>
      {loading ? <Loader /> : <StyledLogo src={logoUrl} alt={operator}/>}
    </>
  )
}
