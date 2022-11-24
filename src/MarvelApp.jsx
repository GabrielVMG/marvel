import { useState } from 'react';
import {SearchCharacter, ImageGrid} from './components';

export const MarvelApp = () => {

    const [Characters, setCharacters] = useState([]);

    const onAddCharacter = (newCharacter) => {
        if (Characters.includes(newCharacter)) return;
        setCharacters([newCharacter]);
    }

    return (
        <>
            <h1>Marvel Characters App</h1>
            <SearchCharacter
                onNewCharacter={(val) => onAddCharacter(val)}
            />
            {
                Characters.map(character => (<ImageGrid key={character} character={character}/>))
            }
        </>
    )
}
