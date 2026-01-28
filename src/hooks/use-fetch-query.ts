import {useQuery} from "@tanstack/react-query";

export default function useFetchQuery<TResponse>(queryKey: string[], url: string) {
    const {data, isPending, isError, error} = useQuery<TResponse>({
        queryKey: queryKey,
        queryFn: async () => {
            const response =  await fetch(url);
            if(!response.ok) {
                throw new Error(`Something went wrong fetching "${queryKey[0]}" failed.`);
            }
            return response.json() as Promise<TResponse>;
        }
    });
    return {data, isPending, isError, error};
}