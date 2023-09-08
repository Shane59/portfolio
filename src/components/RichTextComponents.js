import {Link, RichText, Date} from 'prismic-reactjs';

export default function RichTextComponents(props) {
  return (
    <>
      {RichText.render(props.text, '')}
    </>
  );
}