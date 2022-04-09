import { UserInfoItem } from "./UserInfoItem"

export type UserInfoProps = {
   location: string | null
   twitterUsername: string | null
   website: string
   company: string | null
   isLightTheme: boolean
}

export const UserInfo = ({
   location,
   twitterUsername,
   website,
   company,
   isLightTheme,
}: UserInfoProps) => {
   const info = [location, twitterUsername, website, company]

   return (
      <ul className="user-info">
         {info.map((item, index) => (
            <UserInfoItem
               item={item}
               index={index}
               key={`info-item-${index}`}
               isLightTheme={isLightTheme}
            />
         ))}
      </ul>
   )
}
