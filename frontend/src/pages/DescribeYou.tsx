import React, { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import UserProfileImage from "../components/ProfileImage/UserProfileImage";

const defaultImageUrl =
  "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg";

const DescribeYou: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState<
    { category: string; subCategory: string }[]
  >([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null); // useRef로 input 요소에 대한 참조 생성
  const attachmentFileInputRef = useRef<HTMLInputElement>(null); // useRef로 input 요소에 대한 참조 생성

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // 서브 카테고리 목록을 메인 카테고리 변경 시 초기화하지 않음
  };

  const handleSubCategoryClick = (subCategory: string) => {
    setSelectedSubCategories((prevSubCategories) => {
      const category = selectedCategory || "";
      const index = prevSubCategories.findIndex(
        (item) => item.subCategory === subCategory && item.category === category
      );
      if (index !== -1) {
        return [
          ...prevSubCategories.slice(0, index),
          ...prevSubCategories.slice(index + 1),
        ];
      } else {
        return [...prevSubCategories, { category, subCategory }];
      }
    });
  };

  const removeSubCategory = (category: string, subCategory: string) => {
    setSelectedSubCategories((prevSubCategories) =>
      prevSubCategories.filter(
        (item) =>
          !(item.category === category && item.subCategory === subCategory)
      )
    );
  };

  const handleAddPhotoClick = () => {
    // 'input' 요소 클릭 이벤트를 발생시킵니다.
    if (fileInputRef.current) {
      fileInputRef.current.accept = "image/*"; // 이미지 파일만 허용
      fileInputRef.current.click();
    }
  };
  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  //파일
  const getFileName = (file: File) => {
    return file.name;
  };

  const removeFile = (file: File) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((prevFile) => prevFile !== file)
    );
  };

  const handleAttachFilesClick = () => {
    if (attachmentFileInputRef.current) {
      attachmentFileInputRef.current.click();
    }
  };

  // //새로 업로드시 기존 업로드 파일 리셋
  // const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if (files) {
  //     const fileList = Array.from(files);
  //     setSelectedFiles(fileList);
  //   }
  // };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileList = Array.from(files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...fileList]);
    }
  };
  // 각 카테고리 항목들
  const categories = [
    {
      name: "Programming & Tech",
      subCategories: [
        "Website Development",
        "Website Platforms",
        "Website Maintenance",
        "AI Development",
        "Chatbot Development",
        "Game Development",
        "Mobile App Development",
        "Wearable App Development",
        "Support & Cybersecurity",
        "Software Development",
        "Blockchain & Cryptocurrency",
        "Miscellaneous",
      ],
    },
    {
      name: "Graphics & Design",
      subCategories: [
        "Logo & Brand Identity",
        "Art & Illustration",
        "Web & App Design",
        "Product & Gaming",
        "Print Design",
        "Visual Design",
        "Marketing Design",
        "Packaging & Covers",
        "Architecture & Building Design",
        "Fashion & Merchandise",
        "3D Design",
        "Other",
      ],
    },
    {
      name: "Digital Marketing",
      subCategories: [
        "Search",
        "Social",
        "Methods & Techniques",
        "Channel Specific",
        "Analytics & Strategy",
        "Industry & Purpose-specific",
        "Other",
      ],
    },
    {
      name: "Video & Animation",
      subCategories: [
        "Editing & Post-Production",
        "Social & Marketing Videos",
        "Animation",
        "Motion Graphics",
        "Filmed Video Production",
        "Explainer Videos",
        "Product Videos",
        "AI Videos",
        "Photography",
        "Other",
      ],
    },
    {
      name: "Writing",
      subCategories: [
        "Content Writing",
        "Industry Specific Content",
        "Editing & Critique",
        "Book & eBook Publishing",
        "Career Writing",
        "Business & Marketing Copy",
        "Transcription",
        "Other",
      ],
    },
    {
      name: "Business",
      subCategories: [
        "Business Management",
        "E-Commerce Management",
        "Software Management",
        "AI Strategy & AI Lessons",
        "Accounting & Finance",
        "Legal Services",
        "Sales & Customer Care",
        "Professional Development",
        "Other",
      ],
    },
    {
      name: "Consulting",
      subCategories: [
        "Business Consultants",
        "Marketing Strategy",
        "Data Consulting",
        "Coaching & Advice",
        "Tech Consulting",
        "Mentorship",
      ],
    },
    {
      name: "Data",
      subCategories: [
        "Data Science & ML",
        "Data Analysis",
        "Data Collection",
        "Data Management",
      ],
    },
    {
      name: "AI Service",
      subCategories: [
        "AI Development",
        "Data",
        "AI for Business",
        "AI Artist",
        "AI Audio",
        "AI Video",
        "AI Content",
      ],
    },
  ];

  const navigate = useNavigate();

  const CreateProfileClick = () => {
    alert(
      "Your information has been temporarily saved.Please complete your registration."
    );
    navigate("/signup");
  };

  return (
    <Wrapper>
      <PropillContainer>
        <Title>Tell us about yourself</Title>
        <Describtion>
          Fill out your profile for clients to understand your services.
        </Describtion>
        <Boxes>
          <Box>
            <h4>Select a category</h4>
            <Category>
              {categories.map(({ name }, index) => (
                <CategoryItem
                  key={index}
                  selected={selectedCategory === name}
                  onClick={() => handleCategoryClick(name)}
                >
                  {name}
                </CategoryItem>
              ))}
            </Category>
          </Box>
          <Box>
            <h4>Select sub-categories</h4>
            <SelectedSubCategoriesWrapper>
              <SelectedSubCategories>
                {selectedCategory &&
                  categories
                    .find((category) => category.name === selectedCategory)
                    ?.subCategories.map((subCategory, index) => (
                      <SubCategoryBox
                        key={index}
                        selected={selectedSubCategories.some(
                          (item) => item.subCategory === subCategory
                        )}
                        onClick={() => handleSubCategoryClick(subCategory)}
                      >
                        {subCategory}
                      </SubCategoryBox>
                    ))}
              </SelectedSubCategories>
            </SelectedSubCategoriesWrapper>
          </Box>
          <Box>
            <h4>Selected skill</h4>
            <SelectedSkillsWrapper>
              <SelectedSkills>
                {selectedSubCategories.map(
                  ({ category, subCategory }, index) => (
                    <SelectedSkill key={index}>
                      {subCategory} ({category})
                      <RemoveButton
                        onClick={() => removeSubCategory(category, subCategory)}
                      >
                        x
                      </RemoveButton>
                    </SelectedSkill>
                  )
                )}
              </SelectedSkills>
            </SelectedSkillsWrapper>
          </Box>
        </Boxes>

        <ProfileWrapper>
          <ProfilePhoto>
            <UserProfileImage
              size="large"
              imageUrl={selectedPhoto || defaultImageUrl}
            />

            <InputFile
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              ref={fileInputRef}
            />
            <PhotoButtonWrapper>
              <Button
                variant="outlinePrimary"
                size="sm"
                onClick={handleAddPhotoClick}
              >
                Add Photo
              </Button>
            </PhotoButtonWrapper>
          </ProfilePhoto>
          <WriteWraapper>
            <WhatWrapper>
              <h3>What do you do?</h3>
              <p>Write one line descrition about yourself.</p>

              <Input type="text" style={{ width: "700px" }} />

              <h3>Describe yourself.</h3>
              <p>
                Describe your top skills, strengths, and expriences in detail.
              </p>
              <Input type="text" style={{ width: "700px", height: "90px" }} />
            </WhatWrapper>
            <DescribeWrapper>
              <FileWrapper>
                <AttachButtonWrapper>
                  <Button
                    variant="outlinePrimary"
                    size="sm"
                    onClick={handleAttachFilesClick}
                  >
                    Attach files
                  </Button>
                </AttachButtonWrapper>
                {/* 첨부 파일 선택 input */}
                <InputFile
                  type="file"
                  accept="*"
                  multiple
                  onChange={handleFileUpload}
                  ref={attachmentFileInputRef}
                />
                {/* 선택된 파일들 목록 */}
                {selectedFiles.map((file, index) => (
                  <SelectedFile key={index}>
                    {getFileName(file)} {/* 파일명 표시 */}
                    <RemoveButton onClick={() => removeFile(file)}>
                      x
                    </RemoveButton>{" "}
                    {/* 파일 삭제 버튼 */}
                  </SelectedFile>
                ))}
              </FileWrapper>
              <p>
                You may attach up to 10 files under the size of xxMB each.
                Include work samples or other supporting documents.
              </p>
            </DescribeWrapper>
            <RateWrapper>
              <h3> Set Your freelance rate.</h3>
              <Input
                type="text"
                placeholder="$ 00.00"
                style={{ width: "40px" }}
              />{" "}
              <p>(USD) / hour OR</p>{" "}
              <Input
                type="text"
                placeholder="$ 00.00"
                style={{ width: "40px" }}
              />{" "}
              <p>(USD) / weekly</p>
            </RateWrapper>
            <ButtonDiv>
              <Button variant="primary" size="md" onClick={CreateProfileClick}>
                Create Profile
              </Button>
            </ButtonDiv>
          </WriteWraapper>
        </ProfileWrapper>
      </PropillContainer>
    </Wrapper>
  );
};

const AttachButtonWrapper = styled.div`
  margin-top: 10px;
`;

const PhotoButtonWrapper = styled.div`
  margin-left: 45px;
  margin-top: 10px;
`;

const WhatWrapper = styled.div``;

const DescribeWrapper = styled.div`
  margin-bottom: 40px;
`;

const RateWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const SelectedFile = styled.div`
  margin-right: 10px; // 파일들 사이의 간격 조절
  display: inline-block; // 가로로 나열되도록 설정
  font-size: 13px;
`;

const FileWrapper = styled.div`
  display: flex;
`;
const WriteWraapper = styled.div``;

const ProfileWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 50px;
`;

const ProfilePhoto = styled.div`
  margin-top: 90px;
  margin-right: 30px;
`;
const InputFile = styled.input`
  display: none;
`;
// const ProfileImage = styled.div`

// `;

// const WriteWrapper = styled.div`

// `;

const Wrapper = styled.div`
  margin-top: 120px;
  width: 100%;
  margin-bottom: 80px;
`;

const PropillContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h3``;

const Describtion = styled.p``;

const Boxes = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  flex: 1;
  margin-left: 30px;
`;

const Category = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  max-width: 300px; /* 원하는 너비 설정 */
  height: 420px; /* 고정 높이 설정 */
  overflow-y: auto; /* 넘치는 내용을 스크롤로 처리 */
`;

const SelectedSubCategoriesWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  max-width: 300px; /* 원하는 너비 설정 */
  height: 460px; /* 고정 높이 설정 */
  overflow-y: auto; /* 넘치는 내용을 스크롤로 처리 */
`;

const SelectedSubCategories = styled.div`
  padding: 10px;
`;

interface CategoryItemProps {
  selected: boolean;
}

const CategoryItem = styled.li<CategoryItemProps>`
  cursor: pointer;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${({ selected }) => (selected ? "#007bff" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#0056b3" : "#f0f0f0")};
  }
`;

const SubCategoryBox = styled.div<CategoryItemProps>`
  cursor: pointer;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${({ selected }) => (selected ? "#007bff" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#0056b3" : "#f0f0f0")};
  }
`;

const SelectedSkillsWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  max-width: 300px; /* 원하는 너비 설정 */
  height: 460px; /* 고정 높이 설정 */
  overflow-y: auto; /* 넘치는 내용을 스크롤로 처리 */
`;

const SelectedSkills = styled.div`
  padding: 10px;
`;

const SelectedSkill = styled.div`
  margin-bottom: 5px;
  border: 1px solid #ccc;
  font-size: 13px;
`;

const RemoveButton = styled.button`
  margin-left: 5px;
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export default DescribeYou;
