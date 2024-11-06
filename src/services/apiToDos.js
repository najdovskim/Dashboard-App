import supabase from './supabase';

export async function getToDos() {
  const { data, error } = await supabase.from('ToDoList').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function toDoListDelete(id) {
  const { data, error } = await supabase.from('ToDoList').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('List could not be deleted');
  }

  return data;
}
