import { TConsultancyForm } from "@/components/common/type"


type Props = {
  formData: TConsultancyForm;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ formData, onChange, handleSubmit }: Props) => {


  const stateOptions = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambara', 'Bauchi', 'Bayelsa',]

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex justify-between text-ui-dark mb-10">
        <div className="left-fields space-y-10">
          <p className="text-2xl font-medium">What are you looking for?</p>

          <Input
            inputType="select"
            inputName="state"
            inputLabel="State"
            inputRequired
            inputPlaceholder="Search..."
            inputId="state"
            inputValue={formData.state}
            options={stateOptions}
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
            options={stateOptions}
            onChange={onChange}
          />

          <Input
            inputType="select"
            inputName="propertyType"
            inputLabel="property type"
            inputRequired
            inputPlaceholder="Search..."
            inputId="propertyType"
            inputValue={formData.propertyType}
            options={stateOptions}
            onChange={onChange}
          />

          <Input
            inputType="select"
            inputName="numberOfRooms"
            inputLabel="number of rooms"
            inputPlaceholder="Search..."
            inputId="numberOfRooms"
            inputValue={formData.numberOfRooms}
            options={stateOptions}
            onChange={onChange}
          />

          <Input
            inputType="number"
            inputName="propertySize"
            inputLabel="property size(sqm)"
            inputPlaceholder="3000sqm"
            inputId="propertySize"
            inputValue={formData.propertySize}
            onChange={onChange}
          />
        </div>

        {/* <Divider type="vertical" className="h-full" /> */}
        <div className="min-h-full w-0 border-r border-ui-desc"></div>

        <div className="right-fields space-y-10">
          <p className="text-2xl font-medium">We&apos;d like to get to know you better</p>

          <Input
            inputType="text"
            inputName="fullName"
            inputLabel="Full Name"
            inputRequired
            inputPlaceholder="Mark Victor O"
            inputId="fullName"
            inputValue={formData.fullName}
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

          <p className="text-2xl font-medium mt-16">What&apos;s your budget?</p>
          <div className="flex items-center gap-7 max-w-[490px]">
            <div>
              <label
                htmlFor="min"
                className="text-ui-desc capitalize font-medium flex items-center gap-2 mb-4"
              >Minimum</label>
              <div className="border border-ui-dark rounded-[18px] bg-white overflow-hidden">
                <input
                  className="bg-transparent py-5 px-[30px] size-full"
                  type="number"
                  id="min"
                  name="min"
                  placeholder="200,000"
                  value={formData.min}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="max"
                className="text-ui-desc capitalize font-medium flex items-center gap-2 mb-4"
              >Maximum</label>
              <div className="border border-ui-dark rounded-[18px] bg-white overflow-hidden">
                <input
                  className="bg-transparent py-5 px-[30px] size-full"
                  type="number"
                  id="max"
                  name="max"
                  placeholder="23,000,000"
                  value={formData.max}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="bg-ui-dark py-6 px-[32px] text-center font-medium rounded-[20px] text-white w-[490px]" type="submit">Confirm/Proceed</button>
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
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => any;
  options?: any[];
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
          className="text-ui-desc capitalize font-medium flex items-center gap-2 mb-4"
        >
          {inputLabel} {inputRequired && <span className="text-ui-red">*</span>}
        </label>

        <div className="border border-ui-dark rounded-[18px] bg-white overflow-hidden min-w-[490px] w-[490px]">
          <select
            name={inputName}
            id={inputId ? inputId : inputName}
            required={inputRequired}
            value={inputValue}
            onChange={(e) => onChange(e)}
            className="bg-transparent py-5 px-[30px] size-full placeholder:text-ui-desc"
          >
            <option className="text-ui-desc">Search...</option>
            {options?.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    )
    : (
      <div>
        <label
          htmlFor={inputId ? inputId : inputName}
          className="text-ui-desc capitalize font-medium flex items-center gap-2 mb-4"
        >
          {inputLabel} {inputRequired && <span className="text-ui-red">*</span>}
        </label>

        <div className="border border-ui-dark rounded-[18px] bg-white overflow-hidden min-w-[490px] w-[490px]">
          <input
            type={inputType}
            name={inputName}
            id={inputId ? inputId : inputName}
            placeholder={inputPlaceholder}
            required={inputRequired}
            value={inputValue}
            onChange={(e) => onChange(e)}
            className="bg-transparent py-5 px-[30px] size-full"
          />
        </div>
      </div>
    )
}
