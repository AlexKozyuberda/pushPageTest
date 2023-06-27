import { icons } from '../theme/icons';

export const getIconComponent = (iconName: string) => {
  const IconComponent = icons[iconName];

  if (IconComponent) {
    return <IconComponent />;
  }

  return null;
};
