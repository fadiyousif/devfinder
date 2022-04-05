import cx from "classnames"

export type BioProps = {
   bio: string | null
   isLightTheme: boolean
}

export const Bio = ({ bio, isLightTheme }: BioProps) => (
   <p className={cx("bio", { grey: !bio, light: isLightTheme })}>
      {bio || "This profile has no bio"}
   </p>
)
