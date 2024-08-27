import { useActionState, useEffect } from 'react'

import { TConsultancyList, TConsultancyRentrent } from '@/lib/zod'
import { TConsultancyForm, TTab } from "@/components/common/type"
import { Locations, LocationOption, PropertType, RoomSize, RealEstateType } from '@/components/common/data'

import { rentBuyProperty, listProperty } from '@/lib/actions'
import { useToast } from '@/components/ui/use-toast'

type Props = {
  tab: TTab;
  formData2?: TConsultancyForm;
  formData: TConsultancyRentrent | TConsultancyList;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formAction?: (formData: FormData) => void;
}

const Form = ({ formData, tab, onChange, handleSubmit, formAction }: Props) => {

  const action = tab === 'list' ? listProperty : rentBuyProperty
  const [state, dispatch, isPending] = useActionState(action, undefined)

  const { toast } = useToast()

  useEffect(() => {
    if (state?.message === 'success') {
      toast({
        title: 'Request Successful!',
        description: 'Your request has been made successfully',
      })
    }
    
    if (state?.message === 'error') {
      toast({
        title: 'Request Failed!',
        description: 'The request failed. Please try again',
        variant: 'destructive',
      })
    }
  }, [state?.message, toast])

  return (
    <form action={dispatch}>
      <div className="flex flex-col md:flex-row justify-between text-ui-dark mb-5 md:mb-10">
        <div className="left-fields space-y-5 mb-10 md:mb-0">
          <p className="text-sm md:text-lg font-medium">What are you looking to {tab}?</p>

          <Input
            inputType="select"
            inputName="state"
            inputLabel="State"
            inputRequired
            inputPlaceholder="Search..."
            inputId="state"
            inputValue={formData.state}
            options={Locations}
            onChange={onChange}
          />

          <Input
            inputType="select"
            inputName="location"
            inputLabel="location"
            inputRequired
            inputPlaceholder="Search..."
            inputId="location"
            inputValue={formData.location}
            options={LocationOption[formData.state as keyof typeof LocationOption]}
            onChange={onChange}
          />

          <Input
            inputType="hidden"
            inputName="request_type"
            inputLabel="request type"
            inputRequired
            inputPlaceholder="Search..."
            inputId="request_type"
            inputValue={tab}
            onChange={onChange}
          />

          {tab === 'list'
            ? (<>
              <Input
                inputType="select"
                inputName="real_estate_type"
                inputLabel="real estate type"
                inputRequired
                inputPlaceholder="Search..."
                inputId="realEstateType"
                inputValue={(formData as TConsultancyList).real_estate_type}
                options={[{ value: 'Property', label: 'Property', name: 'estate_type' }, { value: 'Land', label: 'Land', name: 'estate_type' }, { value: 'Both', label: 'Both', name: 'estate_type' }]}
                onChange={onChange}
              />

              <Input
                inputType="select"
                inputName="option"
                inputLabel="Do you want to sell or rent"
                inputRequired
                inputPlaceholder="Search..."
                inputId="option"
                inputValue={(formData as TConsultancyList).option}
                options={[{ value: 'Sell', label: 'Sell', name: 'option' }, { value: 'Rent', label: 'Rent', name: 'option' }]}
                onChange={onChange}
              />

              <Input
                inputType="textarea"
                inputName="description"
                inputLabel="description"
                inputRequired
                inputPlaceholder="Description"
                inputId="description"
                inputValue={(formData as TConsultancyList).description}
                onChange={onChange}
              />
            </>)
            : (<>
              <Input
                inputType="select"
                inputName="Property_type"
                inputLabel="property type"
                inputRequired
                inputPlaceholder="Search..."
                inputId="property_type"
                inputValue={(formData as TConsultancyRentrent).Property_type}
                options={PropertType}
                onChange={onChange}
              />

              <Input
                inputType="select"
                inputName="rooms"
                inputLabel="number of rooms"
                inputPlaceholder="Search..."
                inputRequired
                inputId="rooms"
                inputValue={(formData as TConsultancyRentrent).rooms}
                options={RoomSize}
                onChange={onChange}
              />

              <Input
                inputType="text"
                inputName="property_size"
                inputLabel="property size(sqm)"
                inputPlaceholder="3000sqm"
                inputRequired
                inputId="property_size"
                inputValue={(formData as TConsultancyRentrent).property_size}
                onChange={onChange}
              />
            </>)
          }
        </div>

        {/* <Divider type="vertical" className="h-full" /> */}
        <div className="hidden md:block min-h-full w-0 border-r border-ui-desc"></div>

        <div className="right-fields space-y-5">
          <p className="text-sm md:text-lg font-medium">We&apos;d like to get to know you better</p>

          <Input
            inputType="text"
            inputName="name"
            inputLabel="Full Name"
            inputRequired
            inputPlaceholder="Mark Victor O"
            inputId="name"
            inputValue={formData.name}
            onChange={onChange}
          />

          <Input
            inputType="text"
            inputName="number"
            inputLabel="number (whatsApp)"
            inputRequired
            inputPlaceholder="(+234) 809 222 0000"
            inputId="number"
            inputValue={formData.number}
            onChange={onChange}
          />

          <Input
            inputType="email"
            inputName="email"
            inputLabel="email"
            inputRequired
            inputPlaceholder="markvictor@gmail.com"
            inputId="email"
            inputValue={formData.email}
            onChange={onChange}
          />

          <p className="mt-10 md:mt-12 text-sm md:text-lg font-medium">What&apos;s your budget?</p>

          <div className="w-full">
            <label
              htmlFor="price"
              className="text-ui-desc text-sm capitalize font-medium flex items-center gap-1 md:gap-2 mb-2"
            >Price <span className="text-ui-red">*</span></label>
            <div className="border border-ui-dark rounded-xl md:rounded-[18px] bg-white overflow-hidden">
              <input
                className="bg-transparent text-sm  py-3 px-2 md:px-[15px] size-full"
                type="text"
                id="price"
                name="price"
                placeholder="200,000"
                value={formData.price}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>

          {
            tab !== 'list' && (<div className="flex items-center gap-7 w-full">
              <div className="w-1/2">
                <label
                  htmlFor="min_price"
                  className="text-ui-desc text-sm capitalize font-medium flex items-center gap-1 md:gap-2 mb-2"
                >Minimum <span className="text-ui-red">*</span></label>
                <div className="border border-ui-dark rounded-xl md:rounded-[18px] bg-white overflow-hidden">
                  <input
                    className="bg-transparent text-sm  py-3 px-2 md:px-[15px] size-full"
                    type="text"
                    id="min_price"
                    name="min_price"
                    placeholder="200,000"
                    value={(formData as TConsultancyRentrent).min_price}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="max_price"
                  className="text-ui-desc text-sm capitalize font-medium flex items-center gap-1 md:gap-2 mb-2"
                >Maximum <span className="text-ui-red">*</span></label>
                <div className="border border-ui-dark rounded-xl md:rounded-[18px] bg-white overflow-hidden">
                  <input
                    className="bg-transparent text-sm  py-3 px-2 md:px-[15px] size-full"
                    type="text"
                    id="max_price"
                    name="max_price"
                    placeholder="23,000,000"
                    value={(formData as TConsultancyRentrent).max_price}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>
            </div>)
          }
        </div>
      </div>

      <button
        aria-disabled={isPending}
        disabled={isPending}
        className="bg-ui-dark py-3 px-4 md:px-[20px] text-center font-medium rounded-xl md:rounded-[20px] text-white w-full md:w-[490px] text-sm md:text-base hover:opacity-95"
        type="submit"
      >
        Confirm/Proceed
      </button>
    </form>
  )
}


export default Form


type InputProps = {
  inputId?: string;
  inputName: string;
  inputLabel: string;
  inputRequired?: boolean;
  inputType: string;
  inputPlaceholder?: string;
  inputValue: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => any;
  options?: {
    value: string;
    label: string;
    name: string;
  }[];
}

const Input = ({
  inputId,
  inputName,
  inputLabel,
  inputRequired,
  inputType,
  inputPlaceholder,
  inputValue,
  options,
  onChange
}: InputProps) => {
  return inputType === 'select'
    ? (
      <div>
        <label
          htmlFor={inputId ? inputId : inputName}
          className="text-ui-desc text-sm capitalize font-medium flex items-center gap-1 md:gap-2 mb-2"
        >
          {inputLabel} {inputRequired && <span className="text-ui-red">*</span>}
        </label>

        <div className="border border-ui-dark rounded-xl md:rounded-[18px] bg-white overflow-hidden md:min-w-[490px] w-full md:w-[490px]">
          <select
            name={inputName}
            id={inputId ? inputId : inputName}
            required={inputRequired}
            value={inputValue}
            onChange={(e) => onChange(e)}
            className="bg-transparent py-3 px-2 md:px-[15px] size-full placeholder:text-ui-desc text-sm md:text-base"
          >
            <option className="text-ui-desc">Search...</option>
            {options?.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    )
    : inputType === 'textarea'
      ? (
        <div>
          <label
            htmlFor={inputId ? inputId : inputName}
            className="text-ui-desc text-sm capitalize font-medium flex items-center gap-1 md:gap-2 mb-2"
          >
            {inputLabel} {inputRequired && <span className="text-ui-red">*</span>}
          </label>

          <div className="border border-ui-dark rounded-xl md:rounded-[18px] bg-white overflow-hidden md:min-w-[490px] w-full md:w-[490px] text-sm md:text-base">
            <textarea
              name={inputName}
              id={inputId ? inputId : inputName}
              placeholder={inputPlaceholder}
              required={inputRequired}
              value={inputValue}
              onChange={(e) => onChange(e)}
              className="bg-transparent py-3 px-2 md:px-[15px] size-full h-56"
            ></textarea>
          </div>
        </div>
      )
      : inputType === 'hidden'
        ? (
          <input
            type={inputType}
            name={inputName}
            id={inputId ? inputId : inputName}
            placeholder={inputPlaceholder}
            required={inputRequired}
            value={inputValue}
            onChange={(e) => onChange(e)}
            className="bg-transparent py-3 px-2 md:px-[15px] size-full"
          />
        )
        : (
          <div>
            <label
              htmlFor={inputId ? inputId : inputName}
              className="text-ui-desc text-sm capitalize font-medium flex items-center gap-1 md:gap-2 mb-2"
            >
              {inputLabel} {inputRequired && <span className="text-ui-red">*</span>}
            </label>

            <div className="border border-ui-dark rounded-xl md:rounded-[18px] bg-white overflow-hidden md:min-w-[490px] w-full md:w-[490px] text-sm md:text-base">
              <input
                type={inputType}
                name={inputName}
                id={inputId ? inputId : inputName}
                placeholder={inputPlaceholder}
                required={inputRequired}
                value={inputValue}
                onChange={(e) => onChange(e)}
                className="bg-transparent py-3 px-2 md:px-[15px] size-full"
              />
            </div>
          </div>
        )
}
