import {
  BellIcon as OutlineBellIcon,
  FolderIcon as OutlineFolderIcon,
  HomeIcon as OutlineHomeIcon,
  UserIcon as OutlineUserIcon,
} from "@heroicons/react/24/outline";
import {
  BellIcon as SolidBellIcon,
  FolderIcon as SolidFolderIcon,
  HomeIcon as SolidHomeIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";

export const HomeIcon = (props: { active?: boolean }) => {
  if (props.active) {
    return <SolidHomeIcon width={24} height={24} />;
  }
  return <OutlineHomeIcon width={24} height={24} />;
};

export const ContractIcon = (props: { active?: boolean }) => {
  if (props.active) {
    return <SolidFolderIcon width={24} height={24} />;
  }
  return <OutlineFolderIcon width={24} height={24} />;
};

export const NotificationIcon = (props: { active?: boolean }) => {
  if (props.active) {
    return <SolidBellIcon width={24} height={24} />;
  }
  return <OutlineBellIcon width={24} height={24} />;
};

export const ProfileIcon = (props: { active?: boolean }) => {
  if (props.active) {
    return <SolidUserIcon width={24} height={24} />;
  }
  return <OutlineUserIcon width={24} height={24} />;
};
