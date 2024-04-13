import { useState } from "react";
import Button from "../components/Button/Button";
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

const EmployerSignupForm = () => {
  const [selectedCountryCodes, setSelectedCountryCodes] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // id 중복체크를 위한 상태 관리
  const [userId, setUserId] = useState("");

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
    if (!userId) {
      alert("Please enter your user ID.");
      return;
    }
    checkUserId(userId);
  };

  // 사용자가 입력한 ID 값이 변경될 때마다 호출되는 함수
  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setUserId(event.target.value);
  };

  const handleChange = (newValue: string) => {
    setSelectedCountryCodes(newValue);
    console.log(`Selected: ${newValue}`);
  };

  const openModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="signup__container">
      <h3>회원 가입하고 모집 등록을 완료하세요!</h3>
      <form className="signup__form">
        {/* 아이디 */}
        <label htmlFor="User ID">User ID</label>
        <div className="signup__form__id-group group">
          <Input
            type="text"
            placeholder="Create a user ID."
            onChange={handleUserIdChange}
            disabled={isLoading}
          />

          <Button size={"sm"} variant={"primary"} onClick={handleUserIdCheck}>
            {isLoading ? "Checking..." : "Verify"}
          </Button>
          {isError && <p>Error checking ID: {error.message}</p>}
          {isValidId !== undefined && (
            <p>ID is {isValidId ? "valid" : "invalid"}</p>
          )}
        </div>
        {/* 비밀번호 */}
        <label htmlFor="Password">Password</label>
        <Input type="text" placeholder="Create a your passowrd." />
        {/* 비밀번호 확인*/}
        <Input type="text" placeholder="Confirm your passowrd." />
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
