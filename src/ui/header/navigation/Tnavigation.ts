export type TNavigationLink = {
  linkName: string;
  linkUrl: string;
};

const HeaderNavigationLinks: TNavigationLink[] = [
  {
    linkName: "Community",
    linkUrl: "/community",
  },
  {
    linkName: "Project",
    linkUrl: "/project",
  },
  {
    linkName: "Login",
    linkUrl: "/login",
  },
];

export default HeaderNavigationLinks;
