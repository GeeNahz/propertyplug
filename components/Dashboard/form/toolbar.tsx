import { type Editor } from '@tiptap/react'

import { Fragment, useState } from 'react'

import ToolbarItem from './toolbar-item'
import Bold from './RemixIcon_SVG_2408162103/bold'
import Italic from './RemixIcon_SVG_2408162103/italic'
import Strikethrough from './RemixIcon_SVG_2408162103/strikethrough'
import MarkPenLine from './RemixIcon_SVG_2408162103/mark-pen-line'
import H1 from './RemixIcon_SVG_2408162103/h-1'
import H2 from './RemixIcon_SVG_2408162103/h-2'
import Paragraph from './RemixIcon_SVG_2408162103/paragraph'
import ListUnordered from './RemixIcon_SVG_2408162103/list-unordered'
import ListOrdered from './RemixIcon_SVG_2408162103/list-ordered'
import ListCheck2 from './RemixIcon_SVG_2408162103/list-check-2'
import Separator from './RemixIcon_SVG_2408162103/separator'
import ArrowGoBackFill from './RemixIcon_SVG_2408162103/arrow-go-back-fill'
import ArrowGoForwardFill from './RemixIcon_SVG_2408162103/arrow-go-forward-fill'
import FormatClear from './RemixIcon_SVG_2408162103/format-clear'
import { RxLink2 } from 'react-icons/rx'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Toggle } from '@/components/ui/toggle'

export default function Toolbar({ editor }: { editor: Editor }) {
  const [urlValue, setUrlValue] = useState<string | undefined>(undefined)

  const setCurrentUrl = () => {
    const previousUrl = editor.getAttributes('link').href
    setUrlValue(previousUrl)
  }

  const setEditorLink = (url?: string) => {
    // cancelled
    if (url === undefined) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }
  const removeEditorLink = () => {
    editor.chain().focus().extendMarkRange('link').unsetLink().run()
    setUrlValue(undefined)
    return
  }

  const items: {
    icon?: React.ReactNode;
    title?: string;
    action?: () => any;
    isActive?: () => boolean;
    type?: string;
  }[] = [
      {
        icon: <Bold />,
        title: 'Bold',
        //   @ts-ignore
        action: () => editor.chain().focus().toggleBold().run(),
        isActive: () => editor.isActive('bold'),
      },
      {
        icon: <Italic />,
        title: 'Italic',
        //   @ts-ignore
        action: () => editor.chain().focus().toggleItalic().run(),
        isActive: () => editor.isActive('italic'),
      },
      {
        icon: <Strikethrough />,
        title: 'Strike',
        //   @ts-ignore
        action: () => editor.chain().focus().toggleStrike().run(),
        isActive: () => editor.isActive('strike'),
      },
      {
        icon: <MarkPenLine />,
        title: 'Highlight',
        action: () => editor.chain().focus().toggleHighlight().run(),
        isActive: () => editor.isActive('highlight'),
      },
      {
        type: 'divider',
      },
      {
        icon: <H1 />,
        title: 'Heading 1',
        //   @ts-ignore
        action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => editor.isActive('heading', { level: 1 }),
      },
      {
        icon: <H2 />,
        title: 'Heading 2',
        //   @ts-ignore
        action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => editor.isActive('heading', { level: 2 }),
      },
      {
        icon: <Paragraph />,
        title: 'Paragraph',
        //   @ts-ignore
        action: () => editor.chain().focus().setParagraph().run(),
        isActive: () => editor.isActive('paragraph'),
      },
      {
        icon: <ListUnordered />,
        title: 'Bullet List',
        //   @ts-ignore
        action: () => editor.chain().focus().toggleBulletList().run(),
        isActive: () => editor.isActive('bulletList'),
      },
      {
        icon: <ListOrdered />,
        title: 'Ordered List',
        //   @ts-ignore
        action: () => editor.chain().focus().toggleOrderedList().run(),
        isActive: () => editor.isActive('orderedList'),
      },
      {
        icon: <ListCheck2 />,
        title: 'Task List',
        action: () => editor.chain().focus().toggleTaskList().run(),
        isActive: () => editor.isActive('taskList'),
      },
      {
        type: 'divider',
      },
      {
        icon: <AlertDialog>
          <AlertDialogTrigger className='p-0 flex items-center justify-center' onClick={setCurrentUrl}>
            <RxLink2 />
          </AlertDialogTrigger>

          <AlertDialogContent>
            <input name='url' placeholder="Type or paste link" value={urlValue} onChange={(e) => setUrlValue(e.target.value)} className='border border-border rounded-md px-2 py-1 text-xs font-medium' />

            <AlertDialogFooter>
              <AlertDialogCancel className='py-1 text-xs h-full px-2'>Cancel</AlertDialogCancel>
              <AlertDialogAction className='py-1 text-xs h-full px-2' disabled={urlValue === ''} onClick={() => { removeEditorLink() }}>Remove link</AlertDialogAction>
              <AlertDialogAction className='py-1 text-xs h-full px-2 bg-green-500 hover:bg-green-400' onClick={() => { setEditorLink(urlValue) }}>Add link</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>,
        title: 'Add/Remove Link',
        isActive: () => editor.isActive('link'),
      },

      {
        icon: <Separator />,
        title: 'Horizontal Rule',
        //   @ts-ignore
        action: () => editor.chain().focus().setHorizontalRule().run(),
      },
      {
        icon: <FormatClear />,
        title: 'Clear Format',
        action: () => editor.chain().focus().clearNodes().unsetAllMarks()
          .run(),
      },
      {
        type: 'divider',
      },
      {
        icon: <ArrowGoBackFill />,
        title: 'Undo',
        //   @ts-ignore
        action: () => editor.chain().focus().undo().run(),
      },
      {
        icon: <ArrowGoForwardFill />,
        title: 'Redo',
        //   @ts-ignore
        action: () => editor.chain().focus().redo().run(),
      },
    ]

  return (
    <div className="editor__header">
      {items.map((item, index) => (
        <Fragment key={index}>
          {item.type === 'divider'
            ? <div className="bg-gray-400 h-[1.25rem] w-[1px] ml-[0.5rem] mr-[0.75rem]" />
            : <ToolbarItem
              title={item.title}
              action={item.action}
              isActive={item.isActive}>
              {item.icon}
            </ToolbarItem>}
        </Fragment>
      ))}
    </div>
  )
}

