import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import ErrorMessage from "../components/ErrorMessage";
import Input from "../components/Input/Input";
import Modal from "../components/Modal";
import SelectComponent from "../components/Select/SelectComponent";
import useUserIdCheck from "../hooks/useUserIdCheck";
import "../style/FreelancerSignupForm.css";

const countryCodes = [
  { value: "+82", label: "한국 (+82)" },
  { value: "+1", label: "미국/캐나다 (+1)" },
  { value: "+81", label: "일본 (+81)" },
  { value: "+86", label: "중국 (+86)" },
  { value: "+44", label: "영국 (+44)" },
];

const countries = [
  { value: "kr", label: "한국" },
  { value: "us", label: "미국" },
];

interface EmployerSignupFormInputs {
  userId: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  mobile: string;
  country: string;
  language: string;
  agreeToTerms: boolean;
}

const EmployerSignupForm = () => {
  const [selectedCountryCodes, setSelectedCountryCodes] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const { control, handleSubmit, watch } = useForm<EmployerSignupFormInputs>();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EmployerSignupFormInputs>({
    mode: "onChange", // or 'onBlur'
  });

  const {
    mutate: checkUserId,
    status,
    isError,
    error,
    data: isValidId,
  } = useUserIdCheck();

  const isLoading = status === "pending";

  const handleUserIdCheck = (e: React.MouseEvent) => {
    e.preventDefault();
    const userId = watch("userId");
    if (!userId) {
      alert("Please enter your user ID.");
      return;
    }
    checkUserId(userId);
  };

  const handleChange = (newValue: string) => {
    setSelectedCountryCodes(newValue);
    console.log(`Selected: ${newValue}`);
  };

  const openModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  // 폼 제출
  const onSubmit: SubmitHandler<EmployerSignupFormInputs> = (data) => {
    console.log(data);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="signup__container">
      <h3>회원 가입하고 모집 등록을 완료하세요!</h3>
      <form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
        {/* 아이디 */}
        <label htmlFor="User ID">User ID</label>
        <div className="signup__form__id-group group">
          <Controller
            name="userId"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input type="text" placeholder="Create a user ID." {...field} />
            )}
          />
          <Button
            size={"sm"}
            variant={
              isLoading
                ? "primary"
                : isValidId !== undefined
                ? isValidId
                  ? "secondary" // 'secondary'는 유효한 ID
                  : "tertiary" // 'tertiary'는 유효하지 않은 ID
                : "primary" // isLoading이나 isValidId가 undefined일 때 기본값
            }
            onClick={handleUserIdCheck}
            disabled={isLoading || !watch("userId")}
          >
            {isLoading ? "Checking..." : "Verify"}
          </Button>
          <div
            className={`signup__form__id-group__message ${
              isValidId ? "" : "invalid"
            }`}
          >
            {isError && <p>Error checking ID: {error.message}</p>}
            {isValidId !== undefined && (
              <span>ID is {isValidId ? "valid" : "invalid"}</span>
            )}
          </div>
        </div>
        {/* 비밀번호 */}
        <label htmlFor="Password">Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
            minLength: {
              value: 12,
              message: "Password must be at least 12 characters long.",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
              message:
                "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
            },
          }}
          render={({ field, fieldState }) => (
            <>
              <Input
                type="password"
                placeholder="Create your password."
                {...field}
              />
              {fieldState.error && (
                <ErrorMessage message={fieldState.error.message} />
              )}
            </>
          )}
        />

        {/* 비밀번호 확인 */}
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: true,
            validate: (value) =>
              value === watch("password") || "Passwords do not match.",
          }}
          render={({ field, fieldState }) => (
            <>
              <Input
                type="password"
                placeholder="Confirm your password."
                {...field}
              />
              {fieldState.error && (
                <ErrorMessage message={fieldState.error.message} />
              )}
            </>
          )}
        />
        {/* 이름 */}
        <label htmlFor="Full Name">Full Name</label>
        <div className="signup__form__name-group group">
          <Input type="text" placeholder="Enter your first name." />
          <Input type="text" placeholder="Enter your last name." />
        </div>
        {/* 회사 */}
        <label htmlFor="Company">Company</label>
        <Input type="text" placeholder="Enter your company name." />
        {/* 이메일 */}
        <label htmlFor="Email">Email</label>
        <div className="signup__form__email-group group">
          <Input type="text" placeholder="Enter your email address." />
          <Button size={"sm"} variant={"primary"}>
            Verify
          </Button>
        </div>
        {/* 전화번호 */}
        <label htmlFor="Mobile">Mobile</label>
        <div className="signup__form__phone-group group">
          <SelectComponent
            label=""
            options={countryCodes}
            selected={selectedCountryCodes}
            onChange={handleChange}
          />
          <Input type="text" placeholder="Enter your mobile number." />
          <Button size={"sm"} variant={"primary"}>
            Verify
          </Button>
        </div>
        {/* 국가 */}
        <label htmlFor="Country">Country</label>
        <SelectComponent
          label=""
          options={countries}
          selected={selectedCountryCodes}
          onChange={handleChange}
        />
        {/* 사용언어 */}
        <label htmlFor="Language">Language</label>
        <SelectComponent
          label=""
          options={countries}
          selected={selectedCountryCodes}
          onChange={handleChange}
        />
        {/* 약관 */}
        <label className="checkbox-label">
          <input type="checkbox" />
          <span className="agreement-text">
            I agree to the 플라잉 피그
            <span className="text-block">
              <a onClick={openModal}>User Agreement</a> and
              <a onClick={openModal}>Privacy Policy.</a>
            </span>
          </span>
        </label>

        <Button size={"lg"} variant={"primary"}>
          Join
        </Button>
        <span className="signup__form__login">
          Already have an account? <a href="/login">Log in</a>
        </span>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h1>Modal Content</h1>
        </Modal>
      </form>
    </div>
  );
};

export default EmployerSignupForm;

/*

  | "primary"
  | "secondary"
  | "tertiary"
  | "outlinePrimary"
  | "outlineSecondary"
  | "outlineTertiary";

  */
