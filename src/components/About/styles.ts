import styled from 'styled-components';

export const Container = styled.section`
  padding: 0 20px 90px 20px;

  .about-header {
    text-align: center;

    > h3 {
      font-weight: 800;
      font-size: 36px;
      line-height: 40px;
      letter-spacing: -2px;
      color: #2e2e2e;
    }

    > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: #666666;
      margin: 25px auto 70px auto;
      max-width: 780px;
    }
  }
`;

export const Cards = styled.div`
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 5px 6px 20px rgba(0, 0, 0, 0.1);
  margin-top: -105px;
  border-radius: 6px;
  margin-bottom: 60px;
  gap: 54px;
  padding: 48px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: justify;
    align-items: flex-start;

    > div {
      > .card-icon {
        background-color: #d1ab00;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;

        svg {
          font-size: 32px;
        }
      }

      > strong {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #2e2e2e;
      }

      > p {
        font-weight: 400;
        font-size: 16px;
        color: #666666;
        line-height: 32px;
        margin-top: 20px;
        max-width: 294px;
      }
    }

    > button {
      border: 0;
      background: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: #2e2e2e;
      margin-top: 26px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 80px;
  grid-template-columns: 1fr 1fr;

  > img {
    width: 100%;
  }

  > div {
    > h1 {
      font-weight: 600;
      font-size: 56px;
      line-height: 64px;
      letter-spacing: -1px;
      color: #2e2e2e;

      @media (max-width: 550px) {
        font-size: 44px;
      }
    }

    > p {
      max-width: 470px;
      margin-bottom: 46px;
      margin-top: 18px;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: #666666;
    }
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
