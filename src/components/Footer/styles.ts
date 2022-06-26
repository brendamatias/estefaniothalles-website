import styled from 'styled-components';

export const Container = styled.footer`
  padding-top: 100px;

  .footer-laikacode {
    text-align: center;
    margin: 30px 0 10px 0;
    color: #c6c6c6;
    font-size: 13px;
  }
`;

export const FooterInfo = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-bottom: 68px;

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 100px;

    img {
      width: 170px;
    }

    > div {
      > span {
        display: inline-block;
        font-weight: 400;
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
