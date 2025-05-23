import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Icon } from "zmp-ui";

import { BackIcon } from "@/components/vectors";
import { useRouteHandle } from "@/hooks";
import { categoriesStateUpwrapped } from "@/state";
import logo1 from "@/static/tiger-icon.png";
import { useAccessTokenStore, useLoginModalStore } from "@/stores/auth-store";

const APP_NAME = "Dark Store";

export default function Header() {
  const categories = useAtomValue(categoriesStateUpwrapped);
  const navigate = useNavigate();
  const location = useLocation();
  const [handle, match] = useRouteHandle();

  const openLoginModal = useLoginModalStore((state) => state.openModal);
  const accessToken = useAccessTokenStore((state) => state.accessToken);
  const clearAccessToken = useAccessTokenStore(
    (state) => state.clearAccessToken
  );

  const title = useMemo(() => {
    if (handle) {
      if (typeof handle.title === "function") {
        return handle.title({ categories, params: match.params });
      } else {
        return handle.title;
      }
    }
  }, [handle, categories]);

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
