import styled from 'styled-components';

export const Container = styled.section`
  padding: 90px 0;

  .feedbacks-header {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      > h1 {
        font-weight: 800;
        font-size: 56px;
        line-height: 64px;
        text-align: center;
        letter-spacing: -1px;
        color: #2e2e2e;
        width: 400px;
        margin-bottom: 70px;
      }
    }
  }
`;

export const Cards = styled.section`
  position: relative;
  margin-bottom: 60px;

  .background {
    position: absolute;
    background: #fed000;
    width: 100%;
    height: 426px;
    bottom: -150px;
    z-index: -1;
  }

  > ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-shadow: -9px 15px 73px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-radius: 6px;

    > li {
      padding: 35px 45px;

      svg {
        color: #f6d021;
        font-size: 20px;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: #666666;
        margin-top: 10px;
      }

      .user-info {
        display: flex;
        align-items: center;
        gap: 24px;
        margin-top: 35px;

        .image {
          width: 70px;
          height: 70px;
          background: #d9d9d9;
          border-radius: 50%;
        }

        > div {
          > strong {
            display: block;
            font-weight: 700;
            font-size: 16px;
            color: #2e2e2e;
          }

          > span {
            display: block;
            margin-top: 10px;
            font-weight: 400;
            font-size: 14px;
            color: #2e2e2e;
          }
        }
      }
    }
  }
`;
