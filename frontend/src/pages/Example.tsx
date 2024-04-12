import Button from "../components/Button/Button";
import ButtonPractice from "../components/Button/ButtonPractice";
import Input from "../components/Input/Input";

const Example = () => {
  return (
    <div>
      <div>
        안녕하세요
        <Button size="sm" variant="primary">
          확인
        </Button>
        <ButtonPractice variant="primary" size="md">
          Primary Button
        </ButtonPractice>
        <ButtonPractice variant="secondary" size="sm">
          Secondary Button
        </ButtonPractice>
      </div>
      {/* <div>sm</div>
			<Button size="sm" variant="primary">
				Button
			</Button>
			<Button size="sm" variant="secondary">
			Button
			</Button>
			<Button size="sm" variant="tertiary">
			Button
			</Button>
			<Button size="sm" variant="outlinePrimary">
			Button
			</Button>
			<Button size="sm" variant="outlineSecondary">
			Button
			</Button>
			<Button size="sm" variant="outlineTertiary">
			Button
			</Button>
			<Button size="sm" variant="primary" disabled>
			Button
			</Button>
			<div>md</div>
			<Button size="md" variant="primary">
			Button
			</Button>		
			<Button size="md" variant="secondary">
			Button
			</Button>
			<Button size="md" variant="tertiary">
			Button
			</Button>
			<Button size="md" variant="outlinePrimary">
			Button
			</Button>
			<Button size="md" variant="outlineSecondary">
			Button
			</Button>
			<Button size="md" variant="outlineTertiary">
			Button
			</Button>
			<Button size="md" variant="primary" disabled>
			Button
			</Button>
			<div>lg</div>
			<Button size="lg" variant="primary">
			Button
			</Button>		
			<Button size="lg" variant="secondary">
			Button
			</Button>
			<Button size="lg" variant="tertiary">
			Button
			</Button>
			<Button size="lg" variant="outlinePrimary">
			Button
			</Button>
			<Button size="lg" variant="outlineSecondary">
			Button
			</Button>
			<Button size="lg" variant="outlineTertiary">
			Button
			</Button>
			<Button size="lg" variant="primary" disabled>
			Button
			</Button>

			<Button size= "lg" variant="secondary" >
				삭제
			</Button> */}

      <div>
        <Input type="text" placeholder="이름을 입력해주세요." />
        <Input type="password" placeholder="나이를 입력해주세요." />
        <Input type="number" placeholder="숫자" />
      </div>

      <div></div>
    </div>
  );
};

export default Example;
