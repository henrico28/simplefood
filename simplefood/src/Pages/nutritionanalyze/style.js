import styled from "styled-components";

export const Wrapper = styled.div`
  .wrapper-nutrition-analyze-loading {
    .nutrition-analyze-spinner {
      color: #38a3a5;
      height: 3rem;
      width: 3rem;
    }
  }

  .wrapper-nutrition-analyze {
    min-height: 700px;

    .nutrition-analyze-title {
      color: #22577a;
    }

    .wrapper-nutrition-analyze-form {
      margin-top: 40px;

      .nutrition-analyze-label {
        color: #38a3a5;
      }

      .nutrition-analyze-input {
        color: #22577a;
      }

      .nutrition-analyze-button {
        margin: 30px 0 -10px 0;
        color: var(--white);
        background-color: #38a3a5;
        border: 0;
      }

      .nutrition-analyze-button:hover {
        background-color: #22577a;
      }
    }

    .wrapper-nutrients-table {
      margin-top: 50px;
    }

    .wrapper-energy {
      margin-top: 50px;
    }
  }
`;
