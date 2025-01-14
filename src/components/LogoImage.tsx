import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 100px;
  width: 100px;
`;

interface LogoUrls {
  [key: string]: string;
}

const logoUrls: LogoUrls = {
  МТС: '/assets/mts.jpeg',
  Билайн: '/assets/beeline.jpeg',
  Мегафон: '/assets/megafone.jpeg',
};

const LogoImage: React.FC<{ operator: string }> = ({ operator }) => {
  const logoUrl = logoUrls[operator];

  return (
    <>
      <StyledLogo src={logoUrl} alt={operator}/>
    </>
  )
}

export default LogoImage;