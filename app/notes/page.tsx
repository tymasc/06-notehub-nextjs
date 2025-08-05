import Notes from "./Notes.client";
import { fetchNotes } from "@/lib/api";

const NotesPage = async () => {
  const { notes, totalPages } = await fetchNotes({ page: 1 });

  return (
    <Notes notes={notes} totalPages={totalPages} />
  );
};

export default NotesPage;
