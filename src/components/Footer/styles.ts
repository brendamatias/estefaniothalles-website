import styled from 'styled-components';

export const Container = styled.footer`
  padding: 100px 20px 0 20px;

  .footer-laikacode {
    text-align: center;
    margin: 30px 0 10px 0;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.3);

    a {
      color: rgba(0, 0, 0, 0.4);
      font-weight: 600;
    }
  }
`;

export const FooterInfo = styled.footer`
  margin-bottom: 68px;

  .content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 60px;

    img {
      width: 170px;
    }

    > div {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 60px;

      > div {
        > span {
          display: inline-block;
          font-weight: 600;
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #d1ab00;
          margin-bottom: 10px;
        }

        > ul > li,
        > ul > li > a {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
          color: #391400;
          margin-top: 10px;
        }
      }
    }
  }

  .footer-icons {
    display: flex;
    align-items: center;
    gap: 8px;

    > div {
      width: 48px;
      height: 48px;
      background: #fed000;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: #fff;
        font-size: 16px;
      }
    }
  }
`;
