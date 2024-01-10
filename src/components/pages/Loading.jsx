import styled from 'styled-components'

const LoadingComponent = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  place-content: center;


`

export const Loading = () => {
  return (
    <LoadingComponent>
      <h2>Loading...</h2>
    </LoadingComponent>
  )
}
