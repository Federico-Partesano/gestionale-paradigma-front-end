import { Heart } from "react-feather";
import {
    StyledFooter,
    StyledFooterLeft,
    StyledFooterRight,
    StyledFooterNav,
    StyledFotterNavLink,
} from "./style";

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterRight>
                <StyledFooterNav>
                    <StyledFotterNavLink path="https://themeforest.net/licenses/standard">
                        Licenses
                    </StyledFotterNavLink>
                    <StyledFotterNavLink path="/">
                        Change Log
                    </StyledFotterNavLink>
                    <StyledFotterNavLink path="https://hasthemes.com/contact-us/">
                        Get Help
                    </StyledFotterNavLink>
                </StyledFooterNav>
            </StyledFooterRight>
            <StyledFooterLeft>
                <span>&copy; Doar {new Date().getFullYear()} </span>
                <span className="copright-link">
                    MADE WITH <Heart size="24" /> BY{"  "}
                    <a
                        href="https://themeforest.net/user/bootxperts/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BootXperts
                    </a>
                </span>
            </StyledFooterLeft>
        </StyledFooter>
    );
};

export default Footer;
