import styled from "styled-components";

const Header = styled.header`
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 999;
display: flex;
align-items: center;
justify-content: space-between;

a {
    text-decoration: none;
    color: white;

    &:hover {
        color: #A67C7A;
        transition: 2s;
    }
}


.logo-cont {
    .logo {
        height: 12rem;
        width: 12rem;
    }
}


.arial-links {
    display: flex;
    justify-content: space-evenly;
    width: 33%;
}


.action-buttons{
    display: flex;
    width: 22%;
    justify-content: space-evenly;


}


`;



// 3E3230

export default Header;