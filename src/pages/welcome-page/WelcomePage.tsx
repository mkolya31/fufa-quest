import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../app/router/constants";

export const WelcomePage: FC = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(ROUTES.first)
  }

  return (
    <div>
      <h1>Привет, это квест FUFA-23</h1>
      <h2>Тебя ждут несложные задания, но если будут проблемы то звони</h2>
      <button onClick={onClick}>
        Начать квест
      </button>
    </div>
  )
}