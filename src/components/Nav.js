
import { SocialIcon } from "react-social-icons";
import styled from 'styled-components';

const StyledSocialIcon = styled(SocialIcon)`
    margin-left: .25vw;
    margin-right: .25vw;`

function Nav() {
  return (
    <div>
      <StyledSocialIcon url="https://github.com/iaconom821" />
      <StyledSocialIcon url="https://www.linkedin.com/in/michael-iacono6/" />
      <StyledSocialIcon url="https://twitter.com/ConoCodes" />
      <StyledSocialIcon url="mailto:iaconom821@gmail.com" />
    </div>
  );
}

export default Nav;
