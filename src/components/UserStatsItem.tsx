import cx from "classnames"

type UserStatsItemProps = {
   count: number | null
   index: number
   isLightTheme: boolean
}

const categories = ["Repos", "Followers", "Following"]

export const UserStatsItem = ({
   count,
   index,
   isLightTheme,
}: UserStatsItemProps) => (
   <div className="repos">
      <span className={cx("category", { light: isLightTheme })}>
         {categories[index]}
      </span>
      <span className={cx("number", { light: isLightTheme })}>{count}</span>
   </div>
)
