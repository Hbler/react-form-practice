import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import { Button, CloseBtn, FloatingForm } from "../styled";
import { FlexBox } from "../../globalComponents";
import { consciences } from "../../data/consciences";

export default function Form({
  setLoggedIn,
  setFormVisible,
  setBgDirection,
  horizontal,
}) {
  const [checked, setChecked] = useState(false);
  const history = useHistory();
  const handleChange = (e) => {
    e.target.checked ? setChecked(true) : setChecked(false);
  };

  const formSchema = yup.object().shape({
    abstraction: yup
      .string()
      .required("We need it for personalisation")
      .matches("^[a-zA-Z]+$", "Use only letters A-z")
      .min(5, "Must have at least 5 chars"),
    alias: yup
      .string()
      .required("It's required, for legal reasons")
      .matches("^[a-zA-Z]+$", "Use only letters A-z"),
    digitalAddress: yup.string().email("Must be a valid email"),
    timeExisting: yup.number().min(18, "Must be 18 or older"),
    accessCode: yup
      .string()
      .required("Required, so you don't loose your conscience")
      .matches(
        "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9]).{8}$",
        "Must have 1 special char, 1 uppercase letter, 2 numbers, at least 8 chars"
      ),
    confirmCode: yup
      .string()
      .required("Must match!")
      .oneOf([yup.ref("accessCode"), null], "Codes must match"),
    declaration: yup.boolean().isTrue("You must check the declaration!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    reValidateMode: "onSubmit",
  });

  const submittedData = (data) => {
    consciences.push(data);
    setLoggedIn(true);
    history.push(`/conscience/${data.abstraction}`);
  };

  return (
    <FloatingForm onSubmit={handleSubmit(submittedData)}>
      <CloseBtn
        onClick={() => {
          setFormVisible(false);
          setBgDirection(horizontal);
        }}
      />
      <h3>Register to Access</h3>
      <FlexBox
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <fieldset>
          <input
            required
            type="text"
            {...register("abstraction")}
            placeholder="The name of your conscience"
          />
          {errors?.abstraction && <small>{errors.abstraction.message}</small>}
          <input
            required
            type="text"
            {...register("alias")}
            placeholder="The name of your body"
          />
          {errors?.formerAlias && <small>{errors.formerAlias.message}</small>}
        </fieldset>
        <fieldset>
          <input
            required
            type="email"
            {...register("digitalAddress")}
            placeholder="Your digital address (email)"
          />
          {errors?.digitalAddress && (
            <small>{errors.digitalAddress.message}</small>
          )}
          <input
            type="number"
            min="1"
            {...register("timeExisting")}
            placeholder="Time of existence (age)"
          />
          {errors?.timeExisting && <small>{errors.timeExisting.message}</small>}
        </fieldset>
        <fieldset>
          <input
            required
            type="password"
            {...register("accessCode")}
            placeholder="Pick an acsess code"
          />
          {errors?.accessCode && <small>{errors.accessCode.message}</small>}
          <input
            required
            type="password"
            {...register("confirmCode")}
            placeholder="Confirm the code"
          />
          {errors?.confirmCode && <small>{errors.confirmCode.message}</small>}
        </fieldset>
        <div>
          <input
            type="checkbox"
            {...register("declaration")}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="declaration">
            I declare that I'm aware of the risks.
          </label>
        </div>
        <Button disabled={!checked} type="submit">
          Leave Body
        </Button>
      </FlexBox>
    </FloatingForm>
  );
}
