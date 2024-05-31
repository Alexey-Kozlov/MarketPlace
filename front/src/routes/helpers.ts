export const pathsPublics: { [k: string]: string } = {
  home: "/",
  productDetails: "/product/:idOrSlug",
};

export const pathsPrivate: { [k: string]: string } = {
  accountSettings: "/account-settings",
};

export const paths: { [k: string]: string } = Object.assign(
  {},
  pathsPrivate,
  pathsPublics
);

export const checkPathMatch = (
  pathname: string,
  paths: { [k: string]: string }
): boolean => {
  let isMatch: boolean = false;
  const allPaths: string[] = Object.keys(paths).map((k) => paths[k]);
  const pathFirstSection: string = pathname.split("/")[1];
  allPaths.forEach((p) => {
    if (p.slice(1) === pathFirstSection) isMatch = true;
  });
  return isMatch;
};
