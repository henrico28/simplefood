import styled from "styled-components";

export const Wrapper = styled.div`
  .navbar-wrapper {
    .navbar-brand-wrapper {
      .navbar-brand-left {
        color: #22577a;
      }

      .navbar-brand-right {
        color: #38a3a5;
      }
    }

    .navbar-brand-wrapper:hover {
      cursor: pointer;
    }

    .navbar-menu-wrapper {
      .navbar-menu {
        color: #57cc99;

        &.active {
          color: #22577a;
        }
      }

      .navbar-menu:hover:not(.active) {
        color: #38a3a5;
        cursor: pointer;
      }
    }
  }
`;
