"use client";


import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "@/components/Dashboard/form/toolbar";
import './tap.css'

const Tiptap = ({ contents, setContent }: any) => {
  const editor = useEditor({
    extensions: [
      // @ts-ignore
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        code: false,
        codeBlock: false,
        blockquote: false,
        hardBreak: false,
      }),
      Highlight,
      TaskList,
      TaskItem,
      Link.configure({
        openOnClick: false,
        defaultProtocol: 'https',
        protocols: [
          'ftp', 'mailto',
          {
            scheme: 'tel',
            optionalSlashes: true,
          },
        ],
        HTMLAttributes: {
          rel: 'noopener noreferrer',
        },
      }),
      CharacterCount.configure({
        limit: 10000,
      }),
    ],
    editable: true,
    onUpdate: ({ editor }) => {
      setContent(editor?.getHTML());
    },
    immediatelyRender: false,
    autofocus: false,
    content: `<div>${contents}</div>`,
  });

  return (
    <>
      {editor && <Toolbar editor={editor} />}
      <EditorContent
        editor={editor}
        //   onChange={setContent(editor.getHTML())}
        className="focus:hidden prose !min-w-full shadow-none !text-xs !h-[11rem]"
      />
    </>
  );
};

export default Tiptap;
