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
      font-weight: 800;
      font-size: 72px;
      line-height: 80px;
      letter-spacing: -2px;
      color: #ffffff;
      margin-bottom: 10px;
    }

    > p {
      max-width: 400px;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: rgba(255, 255, 255, 0.95);
      margin-bottom: 80px;
    }
  }
`;
