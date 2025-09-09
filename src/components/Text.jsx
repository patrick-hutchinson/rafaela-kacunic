import { PortableText } from "next-sanity";

const Text = ({ text }) => {
  return (
    <PortableText
      value={text}
      components={{
        marks: {
          link: ({ value, children }) => {
            const href = value?.href || value?.link; // depending on your schema
            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          },
        },
      }}
    />
  );
};

export default Text;
