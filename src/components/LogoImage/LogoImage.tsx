import { Loader } from "../Loader";
import { StyledLogo } from "./styled";

export const LogoImage: React.FC<{ image: string, alt: string, loading: boolean }> = ({ image, alt, loading }) => (
  <>
    {loading ? <Loader /> : <StyledLogo src={image} alt={alt}/>}
  </>
);
