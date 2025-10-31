import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Building,
  Phone,
  MapPin,
  Briefcase,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  SignupContainer,
  SignupCard,
  Header,
  Logo,
  Title,
  Subtitle,
  Form,
  FormRow,
  InputGroup,
  Label,
  InputWrapper,
  Input,
  IconWrapper,
  PasswordToggle,
  CheckboxGroup,
  CheckboxLabel,
  Checkbox,
  CustomCheckbox,
  SubmitButton,
  Divider,
  SocialLogin,
  SocialButton,
  LoginLink,
  ProgressBar,
  ProgressFill,
  StepIndicator,
  FormContainer,
} from "./Signup.styles";

interface SignupProps {
  type: "user" | "hr";
}

const Signup: React.FC<SignupProps> = ({ type }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    phone: "",
    location: "",
    jobTitle: "",
    agreeToTerms: false,
    receiveUpdates: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup data:", { ...formData, type });
    // Handle signup logic here
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(
          formData.fullName &&
          formData.email &&
          (type === "user" || formData.companyName)
        );
      case 2:
        return !!(
          formData.password &&
          formData.confirmPassword &&
          formData.password === formData.confirmPassword
        );
      case 3:
        return !!formData.agreeToTerms;
      default:
        return false;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Basic Information";
      case 2:
        return "Security";
      case 3:
        return type === "user" ? "Preferences" : "Company Details";
      default:
        return "";
    }
  };

  return (
    <SignupContainer>
      <SignupCard>
        <Header>
          <Logo>
            <Briefcase size={24} />
            <span>JobMatch</span>
          </Logo>
          <Title>
            {type === "user" ? "Start Your Journey" : "Find Top Talent"}
          </Title>
          <Subtitle>
            {type === "user"
              ? "Create your account to discover amazing opportunities"
              : "Set up your recruiter account and start hiring"}
          </Subtitle>
        </Header>

        <ProgressBar>
          <StepIndicator>
            <span>Step {currentStep} of 3</span>
            <strong>{getStepTitle()}</strong>
          </StepIndicator>
          <ProgressFill width={(currentStep / 3) * 100} />
        </ProgressBar>

        <FormContainer>
          <Form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="form-step">
                <FormRow>
                  <InputGroup>
                    <Label htmlFor="fullName">
                      {type === "user" ? "Full Name" : "Your Name"}
                    </Label>
                    <InputWrapper>
                      <IconWrapper>
                        <User size={18} />
                      </IconWrapper>
                      <Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder={
                          type === "user" ? "John Doe" : "Jane Smith"
                        }
                        required
                      />
                    </InputWrapper>
                  </InputGroup>
                </FormRow>

                <FormRow>
                  <InputGroup>
                    <Label htmlFor="email">Email Address</Label>
                    <InputWrapper>
                      <IconWrapper>
                        <Mail size={18} />
                      </IconWrapper>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </InputWrapper>
                  </InputGroup>
                </FormRow>

                {type === "hr" && (
                  <FormRow>
                    <InputGroup>
                      <Label htmlFor="companyName">Company Name</Label>
                      <InputWrapper>
                        <IconWrapper>
                          <Building size={18} />
                        </IconWrapper>
                        <Input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Your Company Inc."
                          required
                        />
                      </InputWrapper>
                    </InputGroup>
                  </FormRow>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="form-step">
                <FormRow>
                  <InputGroup>
                    <Label htmlFor="password">Password</Label>
                    <InputWrapper>
                      <IconWrapper>
                        <Lock size={18} />
                      </IconWrapper>
                      <Input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a strong password"
                        required
                      />
                      <PasswordToggle
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </PasswordToggle>
                    </InputWrapper>
                  </InputGroup>
                </FormRow>

                <FormRow>
                  <InputGroup>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <InputWrapper>
                      <IconWrapper>
                        <Lock size={18} />
                      </IconWrapper>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        required
                      />
                      <PasswordToggle
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </PasswordToggle>
                    </InputWrapper>
                  </InputGroup>
                </FormRow>

                {type === "hr" && (
                  <FormRow>
                    <InputGroup>
                      <Label htmlFor="jobTitle">Your Role</Label>
                      <InputWrapper>
                        <IconWrapper>
                          <User size={18} />
                        </IconWrapper>
                        <Input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          placeholder="e.g., HR Manager, Recruiter"
                          required
                        />
                      </InputWrapper>
                    </InputGroup>
                  </FormRow>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div className="form-step">
                {type === "user" ? (
                  <>
                    <FormRow>
                      <InputGroup>
                        <Label htmlFor="location">Preferred Location</Label>
                        <InputWrapper>
                          <IconWrapper>
                            <MapPin size={18} />
                          </IconWrapper>
                          <Input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="City, Country or Remote"
                          />
                        </InputWrapper>
                      </InputGroup>
                    </FormRow>

                    <FormRow>
                      <InputGroup>
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <InputWrapper>
                          <IconWrapper>
                            <Phone size={18} />
                          </IconWrapper>
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                          />
                        </InputWrapper>
                      </InputGroup>
                    </FormRow>
                  </>
                ) : (
                  <FormRow>
                    <InputGroup>
                      <Label htmlFor="phone">Business Phone</Label>
                      <InputWrapper>
                        <IconWrapper>
                          <Phone size={18} />
                        </IconWrapper>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </InputWrapper>
                    </InputGroup>
                  </FormRow>
                )}

                <CheckboxGroup>
                  <CheckboxLabel>
                    <Checkbox
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                    />
                    <CustomCheckbox checked={formData.agreeToTerms}>
                      {formData.agreeToTerms && <Check size={12} />}
                    </CustomCheckbox>
                    <span>
                      I agree to the <a href="/terms">Terms of Service</a> and{" "}
                      <a href="/privacy">Privacy Policy</a>
                    </span>
                  </CheckboxLabel>

                  <CheckboxLabel>
                    <Checkbox
                      type="checkbox"
                      name="receiveUpdates"
                      checked={formData.receiveUpdates}
                      onChange={handleInputChange}
                    />
                    <CustomCheckbox checked={formData.receiveUpdates}>
                      {formData.receiveUpdates && <Check size={12} />}
                    </CustomCheckbox>
                    <span>Send me product updates and job opportunities</span>
                  </CheckboxLabel>
                </CheckboxGroup>
              </div>
            )}

            <div className="form-actions">
              <div style={{ display: "flex", gap: "12px", width: "100%" }}>
                {currentStep > 1 && (
                  <SubmitButton
                    type="button"
                    variant="secondary"
                    onClick={prevStep}
                  >
                    Back
                  </SubmitButton>
                )}
                {currentStep < 3 ? (
                  <SubmitButton
                    type="button"
                    onClick={nextStep}
                    disabled={!validateStep(currentStep)}
                    style={{ flex: 1 }}
                  >
                    Continue
                    <ArrowRight size={16} />
                  </SubmitButton>
                ) : (
                  <SubmitButton
                    type="submit"
                    disabled={!validateStep(currentStep)}
                    style={{ flex: 1 }}
                  >
                    Create Account
                  </SubmitButton>
                )}
              </div>
            </div>
          </Form>

          <Divider>
            <span>or continue with</span>
          </Divider>

          <SocialLogin
            onClick={() => {
              window.open(
                "https://recriminative-tattlingly-izola.ngrok-free.dev/auth/github"
              );
            }}
          >
            <SocialButton type="google">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </SocialButton>
            <SocialButton type="linkedin">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
              Github
            </SocialButton>
          </SocialLogin>

          <LoginLink>
            Already have an account? <a href="/login">Sign in</a>
          </LoginLink>
        </FormContainer>
      </SignupCard>
    </SignupContainer>
  );
};

export default Signup;
