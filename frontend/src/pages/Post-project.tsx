import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import "../style/PostProject.css";

const PostProject = () => {
  const nav = useNavigate();

  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (e.target.value.length >= 10) {
      // 입력 값이 10자 이상이면 에러 메시지를 비움
      setError("");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //여기에 제출 로직 추가
    if (value.length < 10) {
      // 입력 값이 10자 미만이면 에러 처리
      setError("10자 이상 입력해 주세요.");
      return; // 함수 종료
    }
    alert("입력한 요쳥사항: " + value);
    nav("/create");
    console.log("submit");
  };

  return (
    <div>
      <div className="post-project-container">
        <div className="project-form-container">
          <div className="form-header">
            <h1>Outline your requirements</h1>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="textarea-container">
                <label>
                  <textarea
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="i'm looking for..."
                    style={{ borderColor: isFocused ? "red" : "gray" }}
                  />
                  {error && (
                    <p style={{ color: "red", fontSize: 12 }}>{error}</p>
                  )}
                </label>
              </div>
              <div className="button-container">
                <Button size="md" variant="primary" type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </div>
          <div className="instruction-text">
            <p>
              <FaCircleCheck color="#0067FB" /> Get an instant quote in a
              minute.
            </p>
            <p>
              <FaCircleCheck color="#0067FB" /> Attain high-quality outcomes
              whit Korean experts
              <br /> at below local rates.
            </p>
            <p>
              <FaCircleCheck color="#0067FB" /> Connect with experts in over 40
              sevice categories.
            </p>
            <p>
              <FaCircleCheck color="#0067FB" /> ay when you are satisfied.
            </p>
          </div>
        </div>
        <div className="right-image-container">
          <img src="../public/images/exImge.jpeg" alt="예시" />
        </div>
      </div>
    </div>
  );
};

export default PostProject;
