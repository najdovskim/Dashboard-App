import supabase from './supabase';

export async function getToDos() {
  const { data, error } = await supabase.from('ToDoList').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}
