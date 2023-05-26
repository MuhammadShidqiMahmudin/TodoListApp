// Aksi untuk menambahkan Todo List baru
export const addTodo = (title) => {
    return {
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime().toString(),
        title,
        completed: false,
      },
    };
  };
  
  // Aksi untuk menghapus Todo List
  export const deleteTodo = (id) => {
    return {
      type: 'DELETE_TODO',
      payload: id,
    };
  };
  
  // Aksi untuk mengedit Todo List
  export const editTodo = (id, title) => {
    return {
      type: 'EDIT_TODO',
      payload: {
        id,
        title,
      },
    };
  };
  
  // Aksi untuk mengubah status Todo List menjadi completed
  export const completeTodo = (id) => {
    return {
      type: 'COMPLETE_TODO',
      payload: id,
    };
  };
  
  // Aksi untuk mengubah status Todo List menjadi active
  export const activateTodo = (id) => {
    return {
      type: 'ACTIVATE_TODO',
      payload: id,
    };
  };
  