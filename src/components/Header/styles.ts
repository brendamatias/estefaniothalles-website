import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #fed000;
  padding: 0 20px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > button {
      display: none;
      background-color: transparent;
      border: 0;

      > svg {
        font-size: 25px;
        color: rgba(0, 0, 0, 0.7);
      }

      &:hover {
        > svg {
          color: #000;
        }
      }
    }

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

  @media (max-width: 750px) {
    > div {
      > button {
        display: block;
      }

      > ul {
        display: none;
        position: absolute;
        top: 60px;
        right: 20px;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
        background-color: #fff;
        color: #fed000;
        padding: 20px;
        border-radius: 4px;

        > li:last-child {
          margin-top: 60px;
        }

        .header-links {
          a {
            color: rgba(0, 0, 0, 0.7);

            &:hover {
              color: #d1ab00;
            }
          }
        }

        .light {
          background-color: #d1ab00;
          color: #fff;
          padding: 10px 20px;
        }

        &.visible {
          display: flex;
        }
      }
    }
  }
`;
