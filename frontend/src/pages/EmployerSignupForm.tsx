import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Modal from "../components/Modal";
import SelectComponent from "../components/Select/SelectComponent";
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
        <hr />
        <Input type="text" placeholder="Create a user ID." />
        {/* 비밀번호 */}
        <label htmlFor="Password">Password</label>
        <Input type="text" placeholder="Create a user ID." />
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
