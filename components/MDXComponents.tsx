import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function ImageWithTheme(props) {
  const { theme } = useTheme();

  return (
    <Image
      alt={props.alt}
      src={theme === 'light' ? props.light : props.dark}
      {...props}
    />
  );
}

function CustomLink(props: any) {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const MDXComponents = {
  Image: RoundedImage,
  ImageWithTheme,
  a: CustomLink,
};

export default MDXComponents;
