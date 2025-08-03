import Notes from "./Notes.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

const NotesPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const realParams = await params;
  const id = realParams.id;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes />
    </HydrationBoundary>
  );
};


export default NotesPage;
