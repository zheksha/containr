import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const ItemComponent = ({ items }) => {
  return (
    <Table
      className="text-left border rounded-lg "
      containerClassname="h-fit max-h-[650px] overflow-y-auto relative scrollbar"
    >
      <TableCaption>A list of items in your container.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items?.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="text-sm text-muted-foreground">
              {item.id}
            </TableCell>
            <TableCell>{item.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={1} />
          <TableCell className="text-right">
            Total: <strong>{items?.length}</strong>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
