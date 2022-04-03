import cx from "classnames"
import { ProfileHeader, ProfileHeaderProps } from "./ProfileHeader"
import { UserStats, UserStatsProps } from "./UserStats"
import { UserInfo, UserInfoProps } from "./UserInfo"

type UserProfileProps = {
   joinedDate: string
   bio: string | null
} & ProfileHeaderProps &
   UserStatsProps &
   UserInfoProps

export const UserProfile = ({
   avatarUrl,
   username,
   displayName,
   bio,
   publicRepos,
   followers,
   following,
   location,
   twitterUsername,
   website,
   company,
   formatDate,
   isLightTheme,
}: UserProfileProps) => (
   <article className={cx("user-profile", { light: isLightTheme })}>
      <ProfileHeader
         avatarUrl={avatarUrl}
         username={username}
         displayName={displayName}
         isLightTheme={isLightTheme}
         formatDate={formatDate}
      />

      <div className="user-lower-container">
         <p className={cx("bio", { grey: !bio, light: isLightTheme })}>
            {bio || "This profile has no bio"}
         </p>

         <UserStats
            publicRepos={publicRepos}
            followers={followers}
            following={following}
            isLightTheme={isLightTheme}
         />

         <UserInfo
            location={location}
            twitterUsername={twitterUsername}
            website={website}
            company={company}
            isLightTheme={isLightTheme}
         />
      </div>
   </article>
)
