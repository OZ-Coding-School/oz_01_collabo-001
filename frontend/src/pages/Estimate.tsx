// Estimate.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button/Button';
import '../styles/Estimate.css';


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
    // 해당 카테고리에서 name을 가진 옵션의 checked를 false로 설정합니다.
    const updatedOptions = {
      ...options,
      [category]: options[category].map(option =>
        option.name === name ? { ...option, checked: false } : option
      ),
    };
    setOptions(updatedOptions);
    // 다른 상태 업데이트 로직을 추가할 수 있습니다 (예: totalPrice 재계산).
  };

	useEffect(() => {
    const newTotalPrice = Object.values(options).flat().reduce((acc, option) => {
      return option.checked ? acc + option.price : acc;
    }, 0);

		const newHasExtras = Object.values(options).flat().some(option => option.checked && option.name === "Other");

		setTotal(newTotalPrice);
    setHasExtras(newHasExtras);
  }, [options]);

  const signup = () => {
    // navigate('/signup', { state: { selectedOptions, totalPrice, hasOther } });
  };

  return (
    <div className='estimate-container'>
      <h1>Quote Details</h1>
      {Object.entries(options).map(([category, options]) => (
        <div key={category}>
          {options.filter(option => option.checked).length > 0 && <h2>{category}</h2>}
          {options.filter(option => option.checked).map(option => (
            <div className="option-row" key={option.name}>
							<span>{option.name}</span>
              <span>${option.price}</span>
              {/* 삭제 버튼을 렌더링하고, 클릭 시 handleDelete 함수를 호출합니다. */}
              <button className='removebt' onClick={() => handleDelete(category, option.name)}>×</button>
            </div>
          ))}
        </div>
      ))}
			<div className="total">
      <h2 className="totaltext">Estimated Total</h2>
      <p className="totaltext">${total.toLocaleString()} {hasExtras && ' + optional extras'}</p>
			{/* <button onClick={() => alert('Your quote has been submitted!')}>Submit</button> */}
			</div>
      <Button size='md' variant='primary' onClick={signup}>Post My Job Now</Button>
    </div>
  );
};

export default Estimate;
