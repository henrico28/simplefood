import styled from "styled-components";

export const Wrapper = styled.div`
  .wrapper-recipes {
    margin-top: 5rem;
    text-decoration: none;

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

  .nodata-height {
    min-height: 620px;

    .nodata-container-height {
      min-height: 500px;
    }
  }
`;
