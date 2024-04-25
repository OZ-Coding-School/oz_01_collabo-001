// Estimate.tsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import "../style/estimate.css";

interface Option {
  name: string;
  price: number;
  description: string;
  checked: boolean;
}

interface SelectedOptions {
  [category: string]: Option[];
}

const Estimate = () => {
  const location = useLocation();
  const { selectedOptions, totalPrice, hasOther } = location.state as {
    selectedOptions: SelectedOptions;
    totalPrice: number;
    hasOther: boolean;
  };

  const [options, setOptions] = useState(selectedOptions);
  const [total, setTotal] = useState(totalPrice); // totalPrice 상태를 추가
  const [hasExtras, setHasExtras] = useState(hasOther); // hasOther 상태도 추가

  const handleDelete = (category: string, name: string) => {
    const updatedOptions = {
      ...options,
      [category]: options[category].map((option) =>
        option.name === name ? { ...option, checked: false } : option
      ),
    };
    setOptions(updatedOptions);
  };

  useEffect(() => {
    const newTotalPrice = Object.values(options)
      .flat()
      .reduce((acc, option) => {
        return option.checked ? acc + option.price : acc;
      }, 0);

    const newHasExtras = Object.values(options)
      .flat()
      .some((option) => option.checked && option.name === "Other");

    setTotal(newTotalPrice);
    setHasExtras(newHasExtras);
  }, [options]);

  const navigate = useNavigate();

  const signupclick = () => {
    alert(
      "Your information has been temporarily saved.Please complete your registration."
    );
    navigate("/signup");
  };

  return (
    <div className="estimate-container">
      <h1>Quote Details</h1>
      {Object.entries(options).map(([category, options]) => (
        <div key={category}>
          {options.filter((option) => option.checked).length > 0 && (
            <h2>{category}</h2>
          )}
          {options
            .filter((option) => option.checked)
            .map((option) => (
              <div className="option-row" key={option.name}>
                <span>{option.name}</span>
                <span>${option.price}</span>

                <button
                  className="removebt"
                  onClick={() => handleDelete(category, option.name)}
                >
                  ×
                </button>
              </div>
            ))}
        </div>
      ))}
      <div className="total">
        <h2 className="totaltext">Estimated Total</h2>
        <p className="totaltext">
          ${total.toLocaleString()} {hasExtras && " + optional extras"}
        </p>
      </div>
      <div className="postmyjob-bt">
        <Button size="md" variant="primary" onClick={signupclick}>
          Post My Job Now
        </Button>
      </div>
    </div>
  );
};

export default Estimate;
