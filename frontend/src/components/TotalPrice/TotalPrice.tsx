// TotalPrice.tsx
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';


interface Option {
	name: string;
	price: number;
	description: string;
	checked: boolean;
}

interface SelectedOptions {
	[key: string]: Option[];
}

const TotalPrice = ({ selectedOptions }: { selectedOptions: SelectedOptions }) => {
    const calculateTotalPrice = () => {
        let totalPrice = 0;
				let hasOther = false;

        Object.values(selectedOptions).forEach(group => {
            group.forEach(option => {
                if (option.checked) {
                    totalPrice += option.price;
										if (option.name === 'Other') {
											hasOther = true;
										}
                }
            });
        });
        return { totalPrice, hasOther };
    };

		const { totalPrice, hasOther } = calculateTotalPrice()

		const navigate = useNavigate();

		const viewQuote = () => {
			const { totalPrice, hasOther } = calculateTotalPrice();
			navigate('/estimate', { state: { selectedOptions, totalPrice, hasOther } });
		};
    return (
        <TotalPriceContainer>
					<DivBox>
						<FirstText>Your estimate</FirstText>
            <SecondText>Total Price: ${totalPrice}</SecondText>	
						{hasOther && <OptionalText>+ Optional Extras</OptionalText>}	
						<Button size='md' variant='primary'  onClick={viewQuote}>View my quote</Button>		
					</DivBox>
        </TotalPriceContainer>
    );
};

export default TotalPrice;

	const TotalPriceContainer = styled.div`
		position: fixed;
		bottom: 10px;
		width: 100%;
		background-color: #ffffff;
		color: #0067FB;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 0 2px 6px rgba(0,0,0,0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #0067FB;
	`;
	const DivBox = styled.div`
		max-width: 1280px;
		display: flex;
		justify-content: center;
		align-items: center;
		`
	const FirstText = styled.h2`
		margin-right: 20px;
		`

	const SecondText = styled.h2`
		margin-right:10px;
		`
	const OptionalText = styled.h2`
		margin-right: 20px;`

	
	