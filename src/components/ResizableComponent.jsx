import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

export const ResizableComponent = ({ primary, secondary, tertiary }) => {
  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[720px] items-start justify-start p-6">
          {primary}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-start justify-start p-6">
              {secondary}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-start justify-start p-6">
              {tertiary}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
