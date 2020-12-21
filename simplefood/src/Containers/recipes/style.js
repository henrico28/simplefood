import styled from "styled-components";

export const Wrapper = styled.div`
  .wrapper-recipes {
    margin-top: 5rem;

    .recipes-search-input {
      color: #22577a;
    }

    .recipes-search-button {
      color: var(--white);
      background-color: #57cc99;
      border: 0;
    }

    .recipes-search-button:hover {
      background-color: #38a3a5;
    }
  }

  .wrapper-recipes-loading {
    .recipes-spinner {
      color: #38a3a5;
      height: 3rem;
      width: 3rem;
    }
  }
`;
