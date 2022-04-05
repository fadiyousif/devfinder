import cx from "classnames"

export type JoinedDateProps = {
   date: string
   isLightTheme: boolean
}

export const JoinedDate = ({ date, isLightTheme }: JoinedDateProps) => (
   <span className={cx("joined-date", { light: isLightTheme })}>{date}</span>
)
