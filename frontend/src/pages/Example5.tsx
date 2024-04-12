import React, { useState } from 'react';
import Tag from '../components/Tag/Tag';

const Example5: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['Tag 1', 'Tag 2', 'Tag 3']);

  const handleRemove = (removedTag: string) => {
    setTags(tags.filter(tag => tag !== removedTag));
  };

  return (
    <div>
      {tags.map(tag => (
        <Tag key={tag} text={tag} removable onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default Example5;