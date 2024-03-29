import styled from 'styled-components';

export const Container = styled.section`
  background-color: #fed000;
  height: calc(100vh - 83.05px);

  display: flex;
  align-items: center;
  background-image: url('/avatar.svg');
  background-position: bottom -65px right -10px;
  background-repeat: no-repeat;
  background-size: 600px;
  padding: 0 20px;

  > div {
    width: 100%;

    > span {
      display: block;
      font-weight: 700;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #2e2e2e;
      margin-bottom: 24px;
    }

    > h1 {
      font-weight: 600;
      font-size: 72px;
      line-height: 80px;
      letter-spacing: -2px;
      color: #ffffff;
      margin-bottom: 10px;
      max-width: 700px;
    }

    > p {
      max-width: 400px;
      font-weight: 300;
      font-size: 16px;
      line-height: 32px;
      color: rgba(255, 255, 255, 0.95);
      margin-bottom: 80px;
    }
  }

  @media (max-width: 600px) {
    background-size: 400px;
    padding-bottom: 500px;
    height: 100%;
    padding-top: 160px;

    > div {
      > h1 {
        font-size: 48px;
      }
    }
  }
`;
