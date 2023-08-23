import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useServices } from "../../../../common/context/ServicesContext";
import { useAuthActions } from "../../../../common/hooks/useAuthActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../common/components/Button";
import { Input } from "../../../../common/components/Input";
import { InputErrorText } from "../../../../common/components/InputErrorText";
import { InputGroup } from "../../../../common/components/InputGroup";
import { Label } from "../../../../common/components/Label";
import { H2, Span } from "../../../../styles/TypographyStyles";
import { AuthForm } from "../AuthForm";
import { AuthErrorTextContainer } from "../AuthForm/AuthForm.styles";
import { RegisterPanelSection } from "./RegisterPanel.styles";

type RegisterFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPanel: React.FC = () => {
  const { authService, storageService } = useServices();
  const { setUser } = useAuthActions();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit: SubmitHandler<RegisterFormInputs> = async formData => {
    try {
      setLoading(true);
      setApiError("");

      const signInResponse = await authService.register(formData);
      storageService.setItem("user-token", signInResponse.token);
      setUser(signInResponse.user);

      navigate("/");
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      console.log(error);
      setApiError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const validateConfirmPasswordMatch = (value: string, formValues: RegisterFormInputs): boolean =>
    value === formValues.password;

  return (
    <RegisterPanelSection>
      <H2>Welcome back! Sign in to your account</H2>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <InputGroup>
          <Label
            labelText="Email:"
            htmlFor="email"
          />
          <Input
            id="email"
            type="text"
            {...register("email", { required: true })}
          />
          {errors.email && <InputErrorText>An email address is required</InputErrorText>}
        </InputGroup>

        {/* Password Input */}
        <InputGroup>
          <Label
            labelText="Password:"
            htmlFor="password"
          />
          <Input
            id="password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <InputErrorText>A password is required</InputErrorText>}
        </InputGroup>

        {/* Confirm Password Input */}
        <InputGroup>
          <Label
            labelText="Confirm Password:"
            htmlFor="confirmPassword"
          />
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: { value: true, message: "Confirm your password" },
              validate: (value, formValues) =>
                validateConfirmPasswordMatch(value, formValues) || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <InputErrorText>{errors.confirmPassword.message}</InputErrorText>}
        </InputGroup>

        {apiError && (
          <AuthErrorTextContainer>
            <Span fontColor="var(--clr-danger)">{apiError}</Span>
          </AuthErrorTextContainer>
        )}

        <Button
          variant="primary"
          type="submit"
          disabled={loading}>
          {loading && (
            <FontAwesomeIcon
              icon={faSpinner}
              spin
            />
          )}
          Register
        </Button>
      </AuthForm>

      <Span>
        Already have an account? <Link to="/auth/login">Sign in here</Link>
      </Span>
    </RegisterPanelSection>
  );
};

export default RegisterPanel;
