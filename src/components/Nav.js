
import { SocialIcon } from "react-social-icons";
import styled from 'styled-components';

const StyledSocialIcon = styled(SocialIcon)`
    margin-left: .25vw;
    margin-right: .25vw;`

function Nav() {
  return (
    <div>
      <StyledSocialIcon url="https://github.com/iaconom821" target="_blank" />
      <StyledSocialIcon url="https://www.linkedin.com/in/michael-iacono6/" target="_blank" />
      <StyledSocialIcon url="https://twitter.com/ConoCodes" target="_blank" />
      <StyledSocialIcon url="mailto:iaconom821@gmail.com" target="_blank" />
    </div>
  );
}

export default Nav;
