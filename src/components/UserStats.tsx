import cx from "classnames"
import { UserStatsItem } from "./UserStatsItem"

export type UserStatsProps = {
   publicRepos: number | null
   followers: number | null
   following: number | null
   isLightTheme: boolean
}

export const UserStats = ({
   publicRepos,
   followers,
   following,
   isLightTheme,
}: UserStatsProps) => {
   const stats = [publicRepos, followers, following]

   return (
      <ul className={cx("stats", { light: isLightTheme })}>
         {stats.map((count, index) => (
            <UserStatsItem
               count={count}
               index={index}
               key={`stats-item-${index}`}
               isLightTheme={isLightTheme}
            />
         ))}
      </ul>
   )
}
