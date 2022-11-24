import { useState } from 'react';


export function SearchCharacter({onNewCharacter}) {
  const [inputValue, setinputValue] = useState('');

  const onInputChanged = (event) => {
    setinputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const inputVal = inputValue.trim();
    if (inputVal <= 1) return;
    onNewCharacter(inputVal);
    setinputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar personaje"
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
  )
}
