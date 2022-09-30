import styled from 'styled-components';

export const Wrapperpages = styled.div`
  display: flex;
  align-items: center;

  gap: 112px;

  width: 100%;
  height: 100%;
  padding: 66px 152px;
`;

export const SectionLeft = styled.div`
  display: flex;

  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 65px;

  > h1 {
    font-size: 52px;
  }
  > h4 {
    font-size: 24px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.36);
  }

  > p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const SectionRight = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  > h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    letter-spacing: -0.02em;

    color: rgba(0, 0, 0, 0.6);
  }

  > hr {
    margin: 24px 0;
  }
`;

export const ContentRepositories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 5px 0;
    padding-left: 39px;
    border-left: 6px solid #4e9f96;

    > .stars {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 12px;
      width: 40px;
      height: 100%;

      > p {
        font-weight: 400;
        font-size: 16px;

        color: rgba(0, 0, 0, 0.6);
      }
    }

    > .description {
      display: flex;
      flex-direction: column;
      gap: 8px;

      max-width: 80%;

      > h4 {
        font-weight: 700;
        font-size: 24px;
      }

      > p {
        font-weight: 400;
        font-size: 16px;
        white-space: pre-wrap;
      }
    }
  }
`;

export const Avatar = styled.img`
  max-width: 272px;
  max-height: 272px;

  border: 5px solid #4e9f96;
  border-radius: 50%;
`;
