import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #fed000;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 170px;
    }

    > ul {
      display: flex;
      align-items: center;
      gap: 60px;

      .header-links {
        a {
          font-size: 16px;
          color: #fff;
          font-weight: 600;
        }
      }
    }
  }
`;
