import { useQuery } from "@tanstack/react-query"

import { writeEmails } from "@/actions/writeEmails.actions"
import { Register } from "@/shared/interfaces/Register.interface"

export const useWriteEmails = (register: Register) => {
    const { isLoading, isError, error, data = [], isFetching } = useQuery<Register[]>({
        queryKey: ["emails"],
        queryFn: () => writeEmails(register),
        staleTime: 1000 * 60
    })

    return { isLoading, isError, error, data, isFetching }
}