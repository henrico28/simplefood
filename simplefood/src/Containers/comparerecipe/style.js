import styled from 'styled-components';

export const Wrapper = styled.div`
  .wrapper-compare-loading{
    .compare-spinner{
      color: #38a3a5;
      height: 3rem;
      width: 3rem;
    }
  }

  .compare-title{
    color:#22577a;
  }

  .recipedetails-wrapper{
    .recipedetails-name {
      color: #38a3a5;
    }

    .recipesdetails-button {
      color: var(--white);
      background-color: #38a3a5;
      border: 0;
    }

    .recipesdetails-button:hover {
      background-color: #22577a;
    }

    .recipedetails-card-text {
      color: #22577a;
    }
  }

  .nodata-height{
    min-height: 600px;
  }
`;