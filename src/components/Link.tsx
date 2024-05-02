interface Props {
  url: string,
  title: string,
  variant: string,
}

const Link = ({ url, title, variant }: Props) => {
  switch (variant) {
    case 'normal': return (
      <a className="text-3xl font-bold" href={url}>
        {title}
      </a>
    )
  
    default : return (
      <a href={url}>
        {title}
      </a>
    )

  }
};

export default Link;
