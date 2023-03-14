import { useRouter } from "next/router";

function updateQuery(
  query: Record<string, any>,
  newQuery: Record<string, any>
) {
  return { ...query, ...newQuery };
}

export function useQuery() {
  const router = useRouter();
  const { query, push } = router;

  function setQuery(newQuery: Record<string, any>) {
    push({
      pathname: router.pathname,
      query: updateQuery(query, newQuery),
    });
  }

  return [query, setQuery] as const;
}
