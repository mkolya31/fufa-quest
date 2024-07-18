import React, {FC} from "react";
import styled from "@emotion/styled";

const Padding = styled.div({
  padding: '20px',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  background: '#ff9baa',
})

export const EndPage: FC = () => {
  return (
    <Padding>
      <div>
        <h1>Фуся, с днём твоего рождения!!!</h1>
        <h2>Про твой подарок я расскажу по ссылке</h2>
        <a
          href='https://vk.com/video53632664_456239187?list=ln-n10aw2vN0QzWfDaWKP'>https://vk.com/video53632664_456239187?list=ln-n10aw2vN0QzWfDaWKP</a>
      </div>
    </Padding>
  )
}