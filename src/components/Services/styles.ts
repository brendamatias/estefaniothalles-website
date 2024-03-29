import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 90px;
`;

export const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 60px;
  padding: 0 20px;

  .about-content {
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
        min-width: 32px;
        min-height: 32px;
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
      max-width: 391px;
      width: 100%;
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

  @media (max-width: 850px) {
    grid-template-columns: 1fr;

    .services-info-numbers {
      margin: 0;
    }
  }
`;

export const Cards = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: flex-start;
  grid-gap: 40px;
  padding: 0 20px;

  > div {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    height: 100%;

    .card-icon {
      background-color: #d1ab00;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      min-width: 60px;
      min-height: 60px;

      > svg {
        font-size: 35px;
        color: #fff;
      }
    }

    > div {
      > strong {
        display: block;
        font-weight: 700;
        font-size: 18px;
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

export const ContactInfo = styled.div`
  background-color: #fed000;
  margin-top: 90px;
  padding: 0 20px;

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 50px 0;
    gap: 40px;

    > div {
      line-height: 32px;
      font-weight: 700;

      > h1 {
        font-size: 24px;
        color: #ffffff;
      }

      > span {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;
