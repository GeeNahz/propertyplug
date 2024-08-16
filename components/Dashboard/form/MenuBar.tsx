import type { Editor } from '@tiptap/react'

import { Fragment } from 'react'

import MenuItem from './MenuItem'

export default function MenuBar ({ editor }: { editor: Editor}) {
  const items = [
    {
      icon: 'bold',
      title: 'Bold',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
    },
    {
      icon: 'italic',
      title: 'Italic',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive('italic'),
    },
    {
      icon: 'strikethrough',
      title: 'Strike',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive('strike'),
    },
    {
      icon: 'code-view',
      title: 'Code',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive('code'),
    },
    {
      icon: 'mark-pen-line',
      title: 'Highlight',
      action: () => editor.chain().focus().toggleHighlight().run(),
      isActive: () => editor.isActive('highlight'),
    },
    {
      type: 'divider',
    },
    {
      icon: 'h-1',
      title: 'Heading 1',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive('heading', { level: 1 }),
    },
    {
      icon: 'h-2',
      title: 'Heading 2',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive('heading', { level: 2 }),
    },
    {
      icon: 'paragraph',
      title: 'Paragraph',
    //   @ts-ignore
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive('paragraph'),
    },
    {
      icon: 'list-unordered',
      title: 'Bullet List',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive('bulletList'),
    },
    {
      icon: 'list-ordered',
      title: 'Ordered List',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive('orderedList'),
    },
    {
      icon: 'list-check-2',
      title: 'Task List',
      action: () => editor.chain().focus().toggleTaskList().run(),
      isActive: () => editor.isActive('taskList'),
    },
    {
      icon: 'code-box-line',
      title: 'Code Block',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive('codeBlock'),
    },
    {
      type: 'divider',
    },
    {
      icon: 'double-quotes-l',
      title: 'Blockquote',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive('blockquote'),
    },
    {
      icon: 'separator',
      title: 'Horizontal Rule',
    //   @ts-ignore
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      type: 'divider',
    },
    {
      icon: 'text-wrap',
      title: 'Hard Break',
    //   @ts-ignore
      action: () => editor.chain().focus().setHardBreak().run(),
    },
    {
      icon: 'format-clear',
      title: 'Clear Format',
      action: () => editor.chain().focus().clearNodes().unsetAllMarks()
        .run(),
    },
    {
      type: 'divider',
    },
    {
      icon: 'arrow-go-back-line',
      title: 'Undo',
    //   @ts-ignore
      action: () => editor.chain().focus().undo().run(),
    },
    {
      icon: 'arrow-go-forward-line',
      title: 'Redo',
    //   @ts-ignore
      action: () => editor.chain().focus().redo().run(),
    },
  ]

  return (
    <div className="editor__header">
      {items.map((item, index) => (
        <Fragment key={index}>
          {item.type === 'divider' ? <div className="bg-white/25 h-[1.25rem] w-[1px] ml-[0.5rem] mr-[0.75rem]" /> : <MenuItem {...item} />}
        </Fragment>
      ))}
    </div>
  )
}