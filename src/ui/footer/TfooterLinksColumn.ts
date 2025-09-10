export type TfooterLink = {
  linkName: string;
  linkUrl: string;
};

export type TfooterLinksColumn = {
  title: string;
  links: TfooterLink[];
};

const footerLinksColumns: TfooterLinksColumn[] = [
  {
    title: 'Quick Links',
    links: [
      { linkName: 'About Us', linkUrl: '#' },
      { linkName: 'FAQ', linkUrl: '#' },
    ],
  },
  {
    title: 'Other pages',
    links: [
      { linkName: 'Become a volunteer', linkUrl: '#' },
      { linkName: 'Donate', linkUrl: '#' },
    ],
  },
];

export default footerLinksColumns;
