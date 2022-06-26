import styled from 'styled-components';

export const Container = styled.section`
  padding: 90px 0;
`;

export const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 100px;

  .about-content {
    > h1 {
      font-weight: 600;
      font-size: 56px;
      line-height: 64px;
      letter-spacing: -1px;
      color: #2e2e2e;
    }

    > span {
      display: block;
      margin-top: 26px;
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 46px;
      color: #3e3e3e;
    }
  }

  .services-checkboxs {
    > div {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 14px;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 20px;
        color: #fff;
        background-color: #d1ab00;
        width: 32px;
        height: 32px;
      }

      > span {
        color: #666666;
        font-size: 16px;
      }
    }
  }

  .services-info-numbers {
    margin-left: auto;

    > div {
      padding: 20px 40px;
      width: 391px;
      height: 176px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > strong {
        display: block;
        font-weight: 800;
        font-size: 40px;
        line-height: 48px;
        color: #2e2e2e;
      }

      > span {
        display: inline-block;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        color: #3e3e3e;
      }
    }

    > div:first-child {
      border: 1px solid #fdf0b5;
      border-radius: 6px 6px 0 0;
      border-bottom: none;
    }

    > div:last-child {
      background: #fff1b4;
      border-radius: 0 0 6px 6px;
    }
  }
`;

export const Cards = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;

  > div {
    display: flex;
    gap: 20px;
    height: 100%;

    .card-icon {
      background-color: #d1ab00;
      display: flex;
      align-self: center;
      justify-content: center;
      padding: 10px;
      border-radius: 50%;
    }

    > div {
      > strong {
        display: block;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #2e2e2e;
      }

      > span {
        display: inline-block;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: #666666;
        margin-top: 6px;
      }
    }
  }
`;
