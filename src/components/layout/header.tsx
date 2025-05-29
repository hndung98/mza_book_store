import {
  UIMatch,
  useLocation,
  useMatches,
  useNavigate,
} from "react-router-dom";
import { Avatar, Icon } from "zmp-ui";

import { BackIcon } from "@/components/ui/vectors";
import logo1 from "@/static/tiger-icon.png";
import { useAccessTokenStore, useLoginModalStore } from "@/stores/auth-store";

const APP_NAME = "Dark Store";

export function useRouteHandle() {
  const matches = useMatches() as UIMatch<
    undefined,
    {
      title?: string | Function;
      logo?: boolean;
      back?: boolean;
      scrollRestoration?: number;
    }
  >[];
  const lastMatch = matches[matches.length - 1];

  return [lastMatch.handle, lastMatch, matches] as const;
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [handle, match] = useRouteHandle();

  const openLoginModal = useLoginModalStore((state) => state.openModal);
  const accessToken = useAccessTokenStore((state) => state.accessToken);
  const clearAccessToken = useAccessTokenStore(
    (state) => state.clearAccessToken
  );

  const title = "";

  const showBack = location.key !== "default" && handle?.back !== false;

  if (handle?.logo) {
    return (
      <div className="h-14 w-full flex justify-between items-center">
        <div className="h-14 flex items-center gap-2 p-2">
          <img src={logo1} className="max-h-full" />
          <p className="ml-2 text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            {APP_NAME.toLocaleUpperCase()}
          </p>
        </div>
        <div className="py-2 px-4">
          {accessToken && (
            <Avatar
              size={36}
              backgroundColor="PURPLE-BLUE"
              onClick={clearAccessToken}
            >
              <Icon icon="zi-leave-solid" />
            </Avatar>
          )}
          {!accessToken && (
            <Avatar size={36} onClick={openLoginModal}>
              <Icon icon="zi-key-solid" />
            </Avatar>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-12 w-full flex items-center pl-2 pr-[106px] py-2 space-x-1">
      {showBack && (
        <div className="p-2 cursor-pointer" onClick={() => navigate(-1)}>
          <BackIcon />
        </div>
      )}
      <div className="text-xl font-medium truncate">{title}</div>
    </div>
  );
}
