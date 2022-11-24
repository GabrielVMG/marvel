export const getCharacters = async(newCharacter) => {
    const apiKey = 'b6bed3cf474ec683b14b80d3342f66ca';
    const ts = '1';
    const md5= 'a5d34ed36345f136eb0b63ca73d0a622';
    const nameStartsWith = newCharacter.trim() != '' ? `&nameStartsWith=${newCharacter.trim()}` : '';
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${md5}${nameStartsWith}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const characters =  data.results.map(character => ({
        id: character.id,
        name: character.name,
        description: character.description,
        comics: character.comics.available,
        series: character.series.available,
        stories: character.stories.available,
        url: `${character.thumbnail.path}.${character.thumbnail.extension}`
    }));
    return characters;
}