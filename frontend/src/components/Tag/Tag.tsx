import React from 'react';
import styled from 'styled-components';

interface TagProps {
  text: string;
  removable?: boolean;
  onRemove?: (text: string) => void;
}

const TagContainer = styled.div<{ removable: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => (props.removable ? '5px' : '5px 10px')};
  margin: 5px;
  background-color: #E6F0FF;
	color: #002E71;
  border-radius: 20px;
  cursor: default;
`;

const TagText = styled.span`
  margin: 0 5px;
`;

const RemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  border: none;
  margin-left: 5px;
  color: #002E71;
  cursor: pointer;
  &:after {
    content: '×';
  }
`;

const Tag: React.FC<TagProps> = ({ text, removable = false, onRemove }) => {
  return (
    <TagContainer removable={removable}>
      <TagText>{text}</TagText>
      {removable && (
        <RemoveButton
          onClick={() => onRemove?.(text)}
          aria-label={`Remove ${text}`}
        />
      )}
    </TagContainer>
  );
};

export default Tag;