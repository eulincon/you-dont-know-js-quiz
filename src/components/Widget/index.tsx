import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.mainBg};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  box-shadow: 0px 0px 30px black;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  /* ${({ theme }) => theme.colors.bg_teste}; */
  /* background-color: ${({ theme }) => theme.colors.primary}; */

  background-image: linear-gradient(182deg, #7ac3ec, #fda766);
  background-size: 100% 400%;

  -webkit-animation: bg_gradient_animator 2s ease infinite;
  -moz-animation: bg_gradient_animator 2s ease infinite;
  animation: bg_gradient_animator 2s ease infinite;

  @-webkit-keyframes bg_gradient_animator {
    0% {
      background-position: 51% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 51% 0%;
    }
  }
  @-moz-keyframes bg_gradient_animator {
    0% {
      background-position: 51% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 51% 0%;
    }
  }
  @keyframes bg_gradient_animator {
    0% {
      background-position: 51% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 51% 0%;
    }
  }

  * {
    margin: 0;
  }
`

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`

export default Widget
