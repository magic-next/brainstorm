import styled from 'styled-components';

export default styled.form`
  font-size: 1.4rem;
  background-color: white;
  padding: 4rem;
  margin-top: 3rem;
  border-radius: .75rem;
  box-shadow: 0 0 5px 0 #000;
  label {
    display: block;
  }
  button {
    padding: 1rem 0;
  }
  .title {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1.5rem;
  }
  .row {
    margin: 1.25rem 0;
    display: flex;
    align-items: flex-start;
    > div {
      display: flex;
      flex-direction: column;
    }
    > *, .input {
      flex: 1;
    }
    > * + * {
      margin-left: 1.5rem;
    }
    &-bottom {
      font-size: 1.4rem;
      margin-top: 2rem;
      align-items: center;
      a {
        margin-left: .5rem;
        font-weight: 500;
      }
    }
  }
`;
