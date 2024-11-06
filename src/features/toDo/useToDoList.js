import { useQuery } from '@tanstack/react-query';
import { getToDos } from '../../services/apiToDos';

export function useToDoList() {
  const {
    isLoading,
    data: toDos,
    error,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: getToDos,
  });

  return { isLoading, error, toDos };
}
