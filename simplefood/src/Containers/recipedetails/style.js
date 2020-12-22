import styled from "styled-components";

export const Wrapper = styled.div`
  .recipedetails-wrapper {
    margin: 30px 0 30px 0;

    .recipedetails-name {
      color: #38a3a5;
    }

    .recipedetails-calories {
      background-color: #57cc99;
    }

    .recipedetails-labels {
      font-size: 1rem;
    }

    .recipedetails-source {
      font-size: 1rem;
    }

    .recipedetails-card {
      border: solid #38a3a5 1px;
      border-radius: 5px;

      .recipedetails-card-title {
        font-size: 1.7rem;
        color: #22577a;
      }

      .recipedetails-card-text {
        font-size: 1rem;
        color: #38a3a5;
      }
    }

    .recipesdetails-button {
      color: var(--white);
      background-color: #38a3a5;
      border: 0;
    }

    .recipesdetails-button:hover {
      background-color: #22577a;
    }

    @media only screen and (max-width: 600px) {
      .recipedetails-source {
        font-size: 0.7rem;
        text-align: center;
      }

      .recipedetails-card {
        .recipedetails-card-title {
          font-size: 1.25rem;
        }

        .recipedetails-card-text {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
