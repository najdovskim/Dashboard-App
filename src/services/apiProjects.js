import supabase from './supabase';

export async function getProjects() {
  let { data: Project, error } = await supabase.from('Project').select('*');

  if (error) {
    console.error(error);
    throw new Error('Project could not be loaded');
  }

  return Project;
}
