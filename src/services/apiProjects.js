import supabase from './supabase';

export async function getProjects() {
  let { data: Project, error } = await supabase.from('Project').select('*');

  if (error) {
    console.error(error);
    throw new Error('Project could not be loaded');
  }

  return Project;
}

export async function deleteProject(id) {
  const { data: toDoListData, error: toDoListError } = await supabase
    .from('ToDoList')
    .delete()
    .eq('projectId', id); // Make sure the column name matches

  // Handle any errors while deleting to-do list items
  if (toDoListError) {
    console.error('Error deleting to-do list items:', toDoListError);
    throw new Error('To-Do List could not be deleted');
  }

  // Then, delete the project itself
  const { data, error } = await supabase.from('Project').delete().eq('id', id);

  // Handle any errors while deleting the project
  if (error) {
    console.error('Error deleting project:', error);
    throw new Error('Project could not be deleted');
  }

  return data;
}
