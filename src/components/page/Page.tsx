import React, {ChangeEvent, FC, useState} from "react";

export const Page: FC = () => {
  const [value, setValue] = useState<string>('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <h1>Вопрос 1</h1>
      <p>Найди бумажку в моей тумбочке и введи 6 цифр</p>
      <input value={value} onChange={onChange}/>
      <button>
        Проверить ответ
      </button>
    </div>
  )
}
