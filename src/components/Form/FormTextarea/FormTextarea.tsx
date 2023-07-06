import {
  Control,
  Controller,
  FieldName,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form"
import { TextField, TextareaAutosize } from "@mui/material"
import { styled } from "@mui/system"
import { IFormInput } from "@/components/MovieReviewForm/MovieReviewForm"

export interface FormInputProps {
  name: FieldPathValue<FieldValues, string>
  control: Control<IFormInput, any>
  rules: RegisterOptions<FieldValues, string>
}

export const FormTextarea = ({ name, control, rules }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => {
        var helperText = "Max 100 chars"
        if (error && error.type === "required") {
          helperText = "This field is required"
        }
        if (error && error.type === "maxLength") {
          helperText = "Max length exceeded"
        }
        return (
          <>
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
          </>
        )
      }}
    />
  )
}
