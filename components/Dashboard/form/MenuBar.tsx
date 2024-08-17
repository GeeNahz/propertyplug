import type { Editor } from '@tiptap/react'

import { Fragment } from 'react'

import MenuItem from './MenuItem'
import Bold from './RemixIcon_SVG_2408162103/bold'
import Italic from './RemixIcon_SVG_2408162103/italic'
import Strikethrough from './RemixIcon_SVG_2408162103/strikethrough'
import CodeView from './RemixIcon_SVG_2408162103/code-view'
import MarkPenLine from './RemixIcon_SVG_2408162103/mark-pen-line'
import H1 from './RemixIcon_SVG_2408162103/h-1'
import H2 from './RemixIcon_SVG_2408162103/h-2'
import Paragraph from './RemixIcon_SVG_2408162103/paragraph'
import ListUnordered from './RemixIcon_SVG_2408162103/list-unordered'
import ListOrdered from './RemixIcon_SVG_2408162103/list-ordered'
import ListCheck2 from './RemixIcon_SVG_2408162103/list-check-2'
import CodeBoxLine from './RemixIcon_SVG_2408162103/code-box-line'
import DoubleQuote from './RemixIcon_SVG_2408162103/double-quotes-l'
import Separator from './RemixIcon_SVG_2408162103/separator'
import ArrowGoBackFill from './RemixIcon_SVG_2408162103/arrow-go-back-fill'
import ArrowGoForwardFill from './RemixIcon_SVG_2408162103/arrow-go-forward-fill'
import Text from './RemixIcon_SVG_2408162103/text'
import FormatClear from './RemixIcon_SVG_2408162103/format-clear'

export default function MenuBar ({ editor }: { editor: Editor}) {
  const items = [
    {
      icon: Bold,
      title: 'Bold',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
    },
    {
      icon: Italic,
      title: 'Italic',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive('italic'),
    },
    {
      icon: Strikethrough,
      title: 'Strike',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive('strike'),
    },
    {
      icon: CodeView,
      title: 'Code',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive('code'),
    },
    {
      icon: MarkPenLine,
      title: 'Highlight',
      action: () => editor.chain().focus().toggleHighlight().run(),
      isActive: () => editor.isActive('highlight'),
    },
    {
      type: 'divider',
    },
    {
      icon: H1,
      title: 'Heading 1',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive('heading', { level: 1 }),
    },
    {
      icon: H2,
      title: 'Heading 2',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive('heading', { level: 2 }),
    },
    {
      icon: Paragraph,
      title: 'Paragraph',
    //   @ts-ignore
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive('paragraph'),
    },
    {
      icon: ListUnordered,
      title: 'Bullet List',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive('bulletList'),
    },
    {
      icon: ListOrdered,
      title: 'Ordered List',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive('orderedList'),
    },
    {
      icon: ListCheck2,
      title: 'Task List',
      action: () => editor.chain().focus().toggleTaskList().run(),
      isActive: () => editor.isActive('taskList'),
    },
    {
      icon: CodeBoxLine,
      title: 'Code Block',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive('codeBlock'),
    },
    {
      type: 'divider',
    },
    {
      icon: DoubleQuote,
      title: 'Blockquote',
    //   @ts-ignore
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive('blockquote'),
    },
    {
      icon: Separator,
      title: 'Horizontal Rule',
    //   @ts-ignore
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      type: 'divider',
    },
    {
      icon: Text,
      title: 'Hard Break',
    //   @ts-ignore
      action: () => editor.chain().focus().setHardBreak().run(),
    },
    {
      icon: FormatClear,
      title: 'Clear Format',
      action: () => editor.chain().focus().clearNodes().unsetAllMarks()
        .run(),
    },
    {
      type: 'divider',
    },
    {
      icon: ArrowGoBackFill,
      title: 'Undo',
    //   @ts-ignore
      action: () => editor.chain().focus().undo().run(),
    },
    {
      icon: ArrowGoForwardFill,
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