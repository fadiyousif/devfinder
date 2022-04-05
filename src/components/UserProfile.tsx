import cx from "classnames"
import { ProfileHeader, ProfileHeaderProps } from "./ProfileHeader"
import { UserStats, UserStatsProps } from "./UserStats"
import { UserInfo, UserInfoProps } from "./UserInfo"
import { Bio, BioProps } from "./Bio"

type UserProfileProps = {
   joinedDate: string
} & ProfileHeaderProps &
   UserStatsProps &
   UserInfoProps &
   BioProps

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
         <Bio bio={bio} isLightTheme={isLightTheme} />

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
