import styled from "@emotion/styled";

export const PageContainer = styled.div<{ background: string }>(({ background }) => ({
  background,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '20px',
}))
