import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toDoListDelete } from '../../services/apiToDos';

function useDeleteTask() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTask } = useMutation({
    mutationFn: (id) => toDoListDelete(id),
    onSuccess: () => {
      //     toast.success("Project deleted");
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
    //   onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteTask };
}

export default useDeleteTask;
