export const ImageItem = ({name, description, comics, series, stories, url}) => {
  return (
    <div className="card">
        <img src={url} alt={name} />
        <p>Nombre: {name}</p>
        <p>Descripción: {description}</p>
        <p>Comics: {comics}</p>
        <p>Series: {series}</p>
        <p>Historias: {stories}</p>
    </div>
  )
}
