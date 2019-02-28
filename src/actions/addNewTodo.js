export const addNewTodo = (content) => {
    const random = Math.random().toString().slice(5,11);
    const time = new Date().getTime().toString().slice(4,13);
    const id = Number(time + random);
      return {
          type: 'ADD_TODO',
          id: id,
          content:content
      }
  }