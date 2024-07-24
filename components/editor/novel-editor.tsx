import { Editor } from "novel";
import { type Editor as TipTapEditor } from "@tiptap/core";

type NovelEditorProps = {
  setContent: any;
  title?: string;
  content?: string | undefined;
};

export default function NovelEditor({
  setContent,
  content,
}: NovelEditorProps) {
  return (
    <div className="prose !min-w-full">
      <Editor
        defaultValue={{
          type: "doc",
          content: [],
          // content: content as JSONContent[] | undefined,
        }}
        onDebouncedUpdate={(editor?: TipTapEditor) => {
          setContent(editor?.getHTML());
        }}
        disableLocalStorage={true}
        className="rounded-md shadow-none !text-xs"
      />
    </div>
  );
}

