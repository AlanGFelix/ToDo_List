function ModalForm({ createTodo, setOpenModal }) {
    return (<section className="CreateTodoMain">
        <header>
          <span onClick={()=>{
              setOpenModal(state => !state);
            }
          }
          >X</span>
        </header>
        <main>
          <span>Nombre del ToDo</span>
          <input id="nombreTodo" placeholder="Limpiar el cuarto"/>
        </main>
        <footer>
          <button
            type="button"
            onClick={()=>{
              createTodo();
            }}
          >Crear ToDo</button>
        </footer>
      </section>
    );
}

export { ModalForm };