import React, { useState } from "react";
import { LoginErrorTextContainer, LoginForm, LoginFormContainer, LoginPanelSection } from "./LoginPanel.styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputGroup } from "../../../../common/components/InputGroup";
import { Label } from "../../../../common/components/Label";
import { Input } from "../../../../common/components/Input";
import { H2, Span } from "../../../../styles/TypographyStyles";
import { Button } from "../../../../common/components/Button";
import { InputErrorText } from "../../../../common/components/InputErrorText";
import { useServices } from "../../../../common/context/ServicesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useAuthActions } from "../../../../common/hooks/useAuthActions";
import { useNavigate } from "react-router-dom";

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginPanel: React.FC = () => {
  const { authService, storageService } = useServices();
  const { setUser } = useAuthActions();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit: SubmitHandler<LoginFormInputs> = async formData => {
    try {
      setLoading(true);
      setApiError("");

      const signInResponse = await authService.signIn(formData);
      storageService.setItem("user-token", signInResponse.token);
      setUser(signInResponse.user);

      setLoading(false);
      navigate("/");
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      console.log(error);
      setApiError(error.message);
    }
  };

  return (
    <LoginPanelSection>
      <H2>Welcome back! Sign in to your account</H2>
      <LoginFormContainer>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
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
            {errors.email && <InputErrorText>An email address is required.</InputErrorText>}
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
            {errors.password && <InputErrorText>A password is required.</InputErrorText>}
          </InputGroup>

          {apiError && (
            <LoginErrorTextContainer>
              <Span fontColor="var(--clr-danger)">{apiError}</Span>
            </LoginErrorTextContainer>
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
            Sign in
          </Button>
        </LoginForm>
      </LoginFormContainer>

      <Span>Don't have an account? Register here</Span>
    </LoginPanelSection>
  );
};

export default LoginPanel;
