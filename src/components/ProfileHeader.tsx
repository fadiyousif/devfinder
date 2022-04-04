import cx from "classnames"
import { Image } from "./Image"

export type ProfileHeaderProps = {
   avatarUrl: string
   username: string
   displayName: string | null
   isLightTheme: boolean
   formatDate: () => string
}

export const ProfileHeader = ({
   avatarUrl,
   username,
   displayName,
   formatDate,
   isLightTheme,
}: ProfileHeaderProps) => (
   <div className="user-upper-container">
      <Image src={avatarUrl} />
      <div className="name-and-date-container">
         <div className="name-and-date">
            <h2 className={cx("display-name", { light: isLightTheme })}>
               {displayName || username}
            </h2>
            <span className={cx("joined-date", { light: isLightTheme })}>
               {formatDate()}
            </span>
         </div>
         <h3 className="username">{`@${username}`}</h3>
      </div>
   </div>
)
