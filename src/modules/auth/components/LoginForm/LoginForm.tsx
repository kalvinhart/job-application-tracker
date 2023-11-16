import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useServices } from "../../../../common/context/ServicesContext";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { InputGroup } from "../../../../common/components/InputGroup";
import { AuthForm } from "../AuthForm";
import { AuthActionTypes } from "../../reducers/authReducer";
import { LoginFormInputs } from "../../types/LoginFormInputs";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";

const LoginForm: React.FC = () => {
  const theme = useTheme();
  const { authService } = useServices();
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit: SubmitHandler<LoginFormInputs> = async formData => {
    try {
      setLoading(true);
      setApiError("");

      const user = await authService.signIn(formData);
      authDispatch({ type: AuthActionTypes.SET_USER, payload: user });

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
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }): JSX.Element => (
            <TextField
              variant="standard"
              label="Email"
              error={errors.email !== undefined}
              helperText={errors.email ? "An email address is required" : ""}
              {...field}
            />
          )}
        />
      </InputGroup>

      {/* Password Input */}
      <InputGroup>
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }): JSX.Element => (
            <TextField
              type="password"
              variant="standard"
              label="Password"
              error={errors.password !== undefined}
              helperText={errors.password ? "A password is required" : ""}
              {...field}
            />
          )}
        />
      </InputGroup>

      {apiError && (
        <Box marginBottom={20}>
          <Typography
            component="span"
            sx={{ color: theme.palette.error.main }}
          >
            {apiError}
          </Typography>
        </Box>
      )}

      <Button
        variant="contained"
        type="submit"
        disabled={loading}
        sx={{ marginTop: "20px" }}
      >
        {loading && (
          <FontAwesomeIcon
            style={{ marginRight: "5px" }}
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
