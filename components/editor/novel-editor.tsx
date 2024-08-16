import { Editor } from "novel";
import { JSONContent, type Editor as TipTapEditor } from "@tiptap/core";

type NovelEditorProps = {
  setContent: any;
  title?: string;
  content?: JSONContent[] | undefined;
};

export default function NovelEditor({
  setContent,
  content,
}: NovelEditorProps) {
  return (
    <div className="prose !min-w-full">
      <Editor
      onUpdate={(editor) => setContent(editor?.getHTML())}
        defaultValue={{
          type: "doc",
          content: content ? content : [],
          // content: content as JSONContent[] | undefined,
        }}
        // immediatelyRender={false}
        // onDebouncedUpdate={(editor?: TipTapEditor) => {
        //   setContent(editor?.getHTML());
        // }}
        disableLocalStorage={true}
        className="rounded-md shadow-none !text-xs"
      />
    </div>
  );
}

