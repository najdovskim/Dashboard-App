import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProject as deleteProjectApi } from '../../services/apiProjects';

function useDeleteProject() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteProject } = useMutation({
    mutationFn: (id) => deleteProjectApi(id),
    onSuccess: () => {
      //     toast.success("Project deleted");
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      });
    },
    //   onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProject };
}

export default useDeleteProject;
