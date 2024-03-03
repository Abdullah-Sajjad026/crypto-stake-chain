import {Input, InputProps} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {SelectProps} from "@radix-ui/react-select";
import {Select, SelectContent, SelectItem, SelectOption, SelectTrigger, SelectValue} from "@/components/ui/select";
import Image from "next/image";

const InputWithSelect = ({
                           selectOptions,
                           label,
                           inputProps,
                           selectProps

                         }: {
  label?: string
  inputProps?: InputProps,
  selectProps?: SelectProps,
  selectOptions: SelectOption[]
}) => {
  return (
    <div>
      {label && (
        <Label htmlFor={label} className="mb-4">
          {label}
        </Label>)
      }
      <div
        className="w-full overflow-hidden rounded-full border-2 p-1 border-input flex items-center justify-center gap-x-2">
        <Input id={label} className="flex-grow border-none " type="number" {...inputProps}/>
        <div>
          <Select {...selectProps} >
            <SelectTrigger className="rounded-full border-input w-max">
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
              {
                selectOptions.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {/*  Icon with text */}
                    <div className="flex items-center">
                      {
                        option.icon && (
                          <Image src={option.icon} alt={option.value} width={20} height={20} className="mr-2"
                                 layout="fixed"/>
                        )
                      }
                      {option.label}
                    </div>
                  </SelectItem>
                ))
              }

            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default InputWithSelect;
