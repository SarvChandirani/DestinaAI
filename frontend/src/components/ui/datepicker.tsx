// import * as React from "react"
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// export function DatePicker({ ref, calendarPopoverRef }: { calendarPopoverRef:  React.Ref<HTMLDivElement | null>, ref: React.Ref<HTMLButtonElement | null> }) { 
//   const [date, setDate] = React.useState<Date>()

//   return (
//     <Calendar
//           mode="single"
//           selected={date}
//           onSelect={setDate}
//           initialFocus
//         />
//     // <Popover>
//     //   <PopoverTrigger ref={ref}>
//     //     <Button
//     //       variant={"outline"}
//     //       className={cn(
//     //         "w-[280px] justify-start text-left font-normal",
//     //         !date && "text-muted-foreground"
//     //       )}
//     //     >
//     //       <CalendarIcon className="mr-2 h-4 w-4" />
//     //       {date ? format(date, "PPP") : <span>Pick a date</span>}
//     //     </Button>
//     //   </PopoverTrigger>
//     //   <PopoverContent ref={calendarPopoverRef} className="w-auto p-0">
//     //     <Calendar
//     //       mode="single"
//     //       selected={date}
//     //       onSelect={setDate}
//     //       initialFocus
//     //     />
//     //   </PopoverContent>
//     // </Popover>
//   )
// }
