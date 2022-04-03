import cx from "classnames"

export type ProfileHeaderProps = {
   avatarUrl: string
   username: string
   displayName: string | null
   isLightTheme: boolean
   renderDate: () => string
}

export const ProfileHeader = ({
   avatarUrl,
   username,
   displayName,
   renderDate,
   isLightTheme,
}: ProfileHeaderProps) => (
   <div className="user-upper-container">
      <img src={avatarUrl} className="user-image" alt="avatar" />
      <div className="name-and-date-container">
         <div className="name-and-date">
            <h2 className={cx("display-name", { light: isLightTheme })}>
               {displayName || username}
            </h2>
            <span className={cx("joined-date", { light: isLightTheme })}>
               {renderDate()}
            </span>
         </div>
         <h3 className="username">{`@${username}`}</h3>
      </div>
   </div>
)