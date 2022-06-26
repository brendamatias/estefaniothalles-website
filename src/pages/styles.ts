import styled from 'styled-components';

export const ContactInfo = styled.div`
  background-color: #fed000;

  .container {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;

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
