import styled from "styled-components";

export const Wrapper = styled.div`
  .recipepagination-wrapper {
    margin: 10px 0 30px 0;

    .recipespagination-button {
      color: #38a3a5;

      &.disabled {
        color: #22577a;
      }

      &.active {
        background-color: #57cc99;
        border-color: #57cc99;
        color: var(--white);
        cursor: auto;
      }
    }
  }
`;
