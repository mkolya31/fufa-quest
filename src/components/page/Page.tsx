import React, {ChangeEvent, FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PageContainer} from './Page.style'

export interface PageProps {
  name: string;
  question: string;
  answer: string;
  nextPage: string;
  background: string;
}

export const Page: FC<PageProps> = ({name, question, answer, nextPage, background}) => {
  const [value, setValue] = useState<string>('')
  const [displayHint, setDisplayHint] = useState<boolean>(false)

  console.log('VALUE', value)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setDisplayHint(false)
  }

  const navigate = useNavigate()

  const checkAnswer = () => {
    if (value === answer) {
      setValue('')
      navigate(`/${nextPage}`)
    } else {
      setDisplayHint(true)
    }
  }

  return (
    <PageContainer background={background}>
      <div>
        <h1>{name}</h1>
        <p>{question}</p>
        <input value={value} onChange={onChange}/>
        <button onClick={checkAnswer}>
          Проверить ответ
        </button>
        {displayHint && (
          <p>Удали и ответь нормально</p>
        )}
      </div>
    </PageContainer>
  )
}
