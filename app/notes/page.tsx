import Notes from "./Notes.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";

const NotesPage = async ({
  searchParams,
}: {
  searchParams: { page?: string };
}) => {
  const page = parseInt(searchParams.page || "1", 10);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", page],
    queryFn: () => fetchNotes({ page: page }),
  });

  const { notes, totalPages } = await fetchNotes({ page: page });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes notes={notes} totalPages={totalPages} />
    </HydrationBoundary>
  );
};

export default NotesPage;
