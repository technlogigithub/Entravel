import React, { useState } from 'react';
import { Button } from '../ui/button';

interface ReadMoreProps {
  text: string;
  maxLength: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>

        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
        <Button
            variant="link"
          onClick={toggleReadMore}
          className='p-0 h-auto pl-2'
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
    </div>
  );
};

export default ReadMore;
