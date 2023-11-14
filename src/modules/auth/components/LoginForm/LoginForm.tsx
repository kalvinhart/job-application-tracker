import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useServices } from "../../../../common/context/ServicesContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../common/components/Button";
import { Input } from "../../../../common/components/Input";
import { InputErrorText } from "../../../../common/components/InputErrorText";
import { InputGroup } from "../../../../common/components/InputGroup";
import { Label } from "../../../../common/components/Label";
import { Span } from "../../../../styles/TypographyStyles";
import { AuthForm } from "../AuthForm";
import { AuthErrorTextContainer } from "../AuthForm/AuthForm.styles";
import { StorageItems } from "../../../../common/enums/StorageItems";
import { AuthActionTypes } from "../../reducers/authReducer";
import { LoginFormInputs } from "../../types/LoginFormInputs";

const LoginForm: React.FC = () => {
  const { authService, storageService } = useServices();
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit: SubmitHandler<LoginFormInputs> = async formData => {
    try {
      setLoading(true);
      setApiError("");

      const signInResponse = await authService.signIn(formData);
      storageService.setItem(StorageItems.USER_TOKEN, signInResponse.token);
      authDispatch({ type: AuthActionTypes.SET_USER, payload: signInResponse.user });

      navigate("/");
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      console.log(error);
      setApiError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
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

      {apiError && (
        <AuthErrorTextContainer>
          <Span $fontColor="var(--clr-danger)">{apiError}</Span>
        </AuthErrorTextContainer>
      )}

      <Button
        $variant="primary"
        type="submit"
        disabled={loading}
      >
        {loading && (
          <FontAwesomeIcon
            icon={faSpinner}
            spin
          />
        )}
        Sign in
      </Button>
    </AuthForm>
  );
};

export default LoginForm;