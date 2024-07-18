import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../app/router/constants";
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

export const WelcomePage: FC = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(ROUTES.page1)
  }

  return (
    <Padding>
      <div>
        <h1>Привет, это квест FUFA-23</h1>
        <h2>Тебя ждут несложные задания, но если будут проблемы то звони</h2>
        <button onClick={onClick}>
          Начать квест
        </button>
      </div>
    </Padding>
  )
}