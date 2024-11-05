import { useQuery } from "@tanstack/react-query"
import { readEmails } from "@/actions/readEmails.actions"
import { Register } from "@/shared/interfaces/Register.interface"

export const useReadEmails = () => {
    const { isLoading, isError, error, data = [], isFetching } = useQuery<Register[]>({
        queryKey: ["emails"],
        queryFn: () => readEmails(),
        staleTime: 1000 * 60
    })
    return { isLoading, isError, error, data, isFetching }
}