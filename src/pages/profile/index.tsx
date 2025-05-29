import ProfileActions from "@/pages/profile/actions";
import FollowOA from "@/pages/profile/follow-oa";
import Points from "@/pages/profile/points";

export default function ProfilePage() {
  return (
    <div className="min-h-full bg-section p-4 space-y-2.5">
      <Points />
      <ProfileActions />
      <FollowOA />
    </div>
  );
}
