function TodoSearch({setSearchValue}) {
  return (
    <div>
      <input
            placeholder='My Todo Item'
            onChange={
              (event) =>{
                let itemBuscado = event.target.value.toLocaleLowerCase();
                setSearchValue(itemBuscado);
              }
            }
          />
    </div>
  )
}

export {TodoSearch};