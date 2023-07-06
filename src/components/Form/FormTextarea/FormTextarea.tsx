import {
  Control,
  Controller,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form"
import { TextField } from "@mui/material"
import { IFormInput } from "@/components/MovieReviewForm/MovieReviewForm"

export interface FormInputProps {
  name: FieldPathValue<FieldValues, string>
  control: Control<IFormInput, string>
  rules: RegisterOptions<FieldValues, string>
}

export const FormTextarea = ({ name, control, rules }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        let helperText = ""
        if (error && error.type === "required") {
          helperText = error.message ? error.message : "Required"
        }
        if (error && error.type === "maxLength") {
          helperText = error.message ? error.message : "Max length exceeded"
        }
        return (
          <TextField
            name={name}
            multiline
            minRows={5}
            onChange={onChange}
            value={value}
            error={error ? true : false}
            id={name}
            helperText={helperText}
            InputProps={{ sx: { fontWeight: "300" } }}
            sx={{
              width: "100%",
              fontWeight: 300,
            }}
            InputLabelProps={{ sx: { display: "none" } }}
          />
        )
      }}
    />
  )
}
