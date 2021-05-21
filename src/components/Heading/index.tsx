import React from 'react';

interface IHeading {
  type?: string;
  size?: string;
  className?: string;
}

const headingTypes = new Map([
  ['h1', '72px'],
  ['h2', '64px'],
  ['h3', '36px'],
  ['h4', '24px'],
  ['h5', '18px'],
  ['h6', '12px'],
  ['p', '16px'],
]);

const Heading: React.FC<IHeading> = ({ children, type, size, className }) => {
  let result = <div className={className}>{children}</div>;
  if (size) {
    result = (
      <div className={className} style={{ fontSize: size }}>
        {children}
      </div>
    );
  }
  if (type || size) {
    headingTypes.forEach((value, key) => {
      if (size === value || key === type) {
        const CustomTag = `${key}` as keyof JSX.IntrinsicElements;
        result = <CustomTag className={className}>{children}</CustomTag>;
      }
    });
  }

  return result;
};

export default Heading;
