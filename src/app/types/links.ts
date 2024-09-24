export type link = {
    icon: string;
    name: string;
    link: string;
  };

export type page = {
  title: string,
  subtitle: string,
  imageSrc: string,
  altText: string,
  pos: string,
  links: link[],
  id?: string
}